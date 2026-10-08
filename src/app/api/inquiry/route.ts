import {
  DELIVERY_ERROR,
  FIELD_ERROR_SUMMARY,
  TOO_LARGE_ERROR,
  isHoneypotTripped,
  toValidInquiry,
  validateInquiry,
  type InquiryFields,
  type InquiryKind,
} from "@/lib/inquiry";
import { sendInquiryEmail } from "@/lib/send-inquiry-email";

function asString(value: unknown) {
  return typeof value === "string" ? value : "";
}

function parseFields(body: unknown): InquiryFields | null {
  if (!body || typeof body !== "object") return null;
  const record = body as Record<string, unknown>;
  const kind: InquiryKind | null = record.kind === "contact" || record.kind === "recruit" ? record.kind : null;
  if (!kind) return null;
  return {
    kind,
    name: asString(record.name),
    email: asString(record.email),
    topic: asString(record.topic),
    message: asString(record.message),
    botField: asString(record.botField),
  };
}

function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const host = request.headers.get("host");
  if (!host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return Response.json({ ok: false, error: DELIVERY_ERROR }, { status: 403 });
  }

  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return Response.json({ ok: false, error: DELIVERY_ERROR }, { status: 400 });
  }

  if (raw.length > 20_000) {
    return Response.json({ ok: false, error: TOO_LARGE_ERROR }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ ok: false, error: DELIVERY_ERROR }, { status: 400 });
  }

  const fields = parseFields(body);
  if (!fields) {
    return Response.json({ ok: false, error: DELIVERY_ERROR }, { status: 400 });
  }

  if (isHoneypotTripped(fields.botField)) {
    return Response.json({ ok: true });
  }

  const inquiry = toValidInquiry(fields);
  if (!inquiry) {
    return Response.json(
      { ok: false, error: FIELD_ERROR_SUMMARY, fieldErrors: validateInquiry(fields) },
      { status: 400 },
    );
  }

  const result = await sendInquiryEmail(inquiry);
  if (result !== "sent") {
    return Response.json(
      { ok: false, error: DELIVERY_ERROR },
      { status: result === "unconfigured" ? 503 : 502 },
    );
  }

  return Response.json({ ok: true });
}
