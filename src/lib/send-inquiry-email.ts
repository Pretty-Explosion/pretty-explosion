import { STUDIO_INBOX, type ValidInquiry } from "@/lib/inquiry";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_FROM = "Pretty Explosion <onboarding@resend.dev>";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type InquiryEmail = {
  from: string;
  to: string[];
  reply_to: string;
  subject: string;
  text: string;
  html: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function resolveStudioInbox() {
  const configured = process.env.CONTACT_TO_EMAIL?.trim();
  if (!configured) return STUDIO_INBOX;
  if (EMAIL_PATTERN.test(configured) && !/[\r\n]/.test(configured)) return configured;
  console.error("CONTACT_TO_EMAIL is not a valid email; using prettyxplosion@gmail.com.");
  return STUDIO_INBOX;
}

export function resolveFromAddress() {
  const configured = process.env.CONTACT_FROM_EMAIL?.trim();
  if (!configured) return DEFAULT_FROM;
  if (/[\r\n]/.test(configured)) {
    console.error("CONTACT_FROM_EMAIL contains a line break; using the default sender.");
    return DEFAULT_FROM;
  }
  return configured;
}

export function buildInquiryEmail(inquiry: ValidInquiry): InquiryEmail {
  const topicLabel = inquiry.kind === "contact" ? "Project type" : "Role";
  const intro =
    inquiry.kind === "contact"
      ? "New message from the Pretty Explosion contact form."
      : "New crew interest from the Pretty Explosion recruit form.";
  const subject =
    inquiry.kind === "contact"
      ? `Studio inquiry: ${inquiry.name} — ${inquiry.topic}`
      : `Crew interest: ${inquiry.name} — ${inquiry.topic}`;

  const text = [
    intro,
    "",
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `${topicLabel}: ${inquiry.topic}`,
    "",
    inquiry.message,
  ].join("\n");

  const html = [
    `<p>${escapeHtml(intro)}</p>`,
    "<p>",
    `<strong>Name:</strong> ${escapeHtml(inquiry.name)}<br>`,
    `<strong>Email:</strong> ${escapeHtml(inquiry.email)}<br>`,
    `<strong>${escapeHtml(topicLabel)}:</strong> ${escapeHtml(inquiry.topic)}`,
    "</p>",
    `<p style="white-space:pre-wrap">${escapeHtml(inquiry.message)}</p>`,
  ].join("");

  return {
    from: resolveFromAddress(),
    to: [resolveStudioInbox()],
    reply_to: inquiry.email,
    subject,
    text,
    html,
  };
}

export async function sendInquiryEmail(inquiry: ValidInquiry): Promise<"sent" | "unconfigured" | "failed"> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("Inquiry email not sent: RESEND_API_KEY is not set.");
    return "unconfigured";
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      cache: "no-store",
      signal: AbortSignal.timeout(12_000),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(buildInquiryEmail(inquiry)),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend rejected an inquiry email.", response.status, detail.slice(0, 500));
      return "failed";
    }

    return "sent";
  } catch (error) {
    console.error("Inquiry email request failed.", error);
    return "failed";
  }
}
