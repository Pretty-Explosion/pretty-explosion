export const STUDIO_INBOX = "prettyxplosion@gmail.com";

export const DELIVERY_ERROR =
  "We couldn't send that just now. Please try again, or email prettyxplosion@gmail.com.";

export const FIELD_ERROR_SUMMARY = "Please check the highlighted fields.";

export const TOO_LARGE_ERROR = "That message is too large to send.";

export const CONTACT_TOPICS = [
  "General inquiry",
  "Quality Video / studio brief",
  "Grant matching help",
  "Journalism pitch",
  "Recruit / join the crew",
  "Partnerships / invest",
  "Press",
  "Product feedback",
] as const;

export const RECRUIT_ROLES = [
  "Director / DP",
  "Editor",
  "Journalist",
  "Grant writer",
  "Producer",
  "AI-fluent creative",
  "Other craft",
] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type InquiryKind = "contact" | "recruit";

export type InquiryFields = {
  kind: InquiryKind;
  name: string;
  email: string;
  topic: string;
  message: string;
  botField: string;
};

export type InquiryField = "name" | "email" | "topic" | "message";

export type InquiryFieldErrors = Partial<Record<InquiryField, string>>;

export type ValidInquiry = {
  kind: InquiryKind;
  name: string;
  email: string;
  topic: string;
  message: string;
};

export type InquiryResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: InquiryFieldErrors };

export function isHoneypotTripped(botField: string) {
  return botField.trim().length > 0;
}

export function validateInquiry(input: InquiryFields): InquiryFieldErrors {
  const errors: InquiryFieldErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const topic = input.topic.trim();
  const message = input.message.trim();
  const topics: readonly string[] = input.kind === "contact" ? CONTACT_TOPICS : RECRUIT_ROLES;

  if (name.length < 2 || /[\r\n]/.test(name)) {
    errors.name = "Please enter your name.";
  } else if (name.length > 120) {
    errors.name = "Please use a shorter name.";
  }

  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email) || /[\r\n]/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!topics.includes(topic)) {
    errors.topic = input.kind === "contact" ? "Choose a project type." : "Choose a role.";
  }

  if (message.length < 20) {
    errors.message =
      input.kind === "contact"
        ? "Share at least 20 characters so we can help."
        : "Share at least 20 characters about your craft or interest.";
  } else if (message.length > 5000) {
    errors.message = "Please keep the message under 5,000 characters.";
  }

  return errors;
}

export function toValidInquiry(input: InquiryFields): ValidInquiry | null {
  if (Object.keys(validateInquiry(input)).length > 0) return null;
  return {
    kind: input.kind,
    name: input.name.trim(),
    email: input.email.trim(),
    topic: input.topic.trim(),
    message: input.message.trim(),
  };
}

function isField(value: string): value is InquiryField {
  return value === "name" || value === "email" || value === "topic" || value === "message";
}

function readFieldErrors(data: unknown): InquiryFieldErrors | undefined {
  if (!data || typeof data !== "object" || !("fieldErrors" in data)) return undefined;
  const raw = (data as { fieldErrors?: unknown }).fieldErrors;
  if (!raw || typeof raw !== "object") return undefined;
  const fieldErrors: InquiryFieldErrors = {};
  for (const [key, value] of Object.entries(raw)) {
    if (isField(key) && typeof value === "string" && value.trim()) {
      fieldErrors[key] = value;
    }
  }
  return Object.keys(fieldErrors).length > 0 ? fieldErrors : undefined;
}

export async function postInquiry(fields: InquiryFields): Promise<InquiryResult> {
  try {
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(fields),
    });
    const data: unknown = await response.json().catch(() => null);
    if (data && typeof data === "object" && "ok" in data && data.ok === true) {
      return { ok: true };
    }
    const error =
      data && typeof data === "object" && "error" in data && typeof data.error === "string" && data.error.trim()
        ? data.error
        : DELIVERY_ERROR;
    return { ok: false, error, fieldErrors: readFieldErrors(data) };
  } catch {
    return { ok: false, error: DELIVERY_ERROR };
  }
}
