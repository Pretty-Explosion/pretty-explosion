"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RECRUIT_ROLES, postInquiry, validateInquiry, type InquiryFieldErrors } from "@/lib/inquiry";

type Errors = Partial<Record<"name" | "email" | "role" | "message", string>>;

function toFormErrors(fieldErrors: InquiryFieldErrors | undefined): Errors {
  if (!fieldErrors) return {};
  const errors: Errors = {};
  if (fieldErrors.name) errors.name = fieldErrors.name;
  if (fieldErrors.email) errors.email = fieldErrors.email;
  if (fieldErrors.topic) errors.role = fieldErrors.topic;
  if (fieldErrors.message) errors.message = fieldErrors.message;
  return errors;
}

export function RecruitForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<string>(RECRUIT_ROLES[0]);
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError("");
    const fields = {
      kind: "recruit" as const,
      name,
      email,
      topic: role,
      message,
      botField,
    };
    const next = toFormErrors(validateInquiry(fields));
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    const result = await postInquiry(fields);
    setSending(false);

    if (!result.ok) {
      setErrors(toFormErrors(result.fieldErrors));
      setFormError(result.error);
      return;
    }

    setSubmitted(true);
    setName("");
    setEmail("");
    setRole(RECRUIT_ROLES[0]);
    setMessage("");
    setBotField("");
  }

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 md:p-8">
      <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-10 text-center"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
              ✓
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
              Thanks — we got your note
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted">
              Your interest is in the studio inbox. Prefer to write directly?{" "}
              <a href="mailto:prettyxplosion@gmail.com?subject=Recruit%20-%20Pretty%20Explosion" className="text-accent underline-offset-2 hover:underline">
                prettyxplosion@gmail.com
              </a>
            </p>
            <button type="button" className="btn-secondary mt-8 text-sm" onClick={() => setSubmitted(false)}>
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            className="relative space-y-5"
            noValidate
          >
            <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
              <label>
                Website
                <input
                  type="text"
                  name="bot-field"
                  tabIndex={-1}
                  autoComplete="off"
                  value={botField}
                  onChange={(event) => setBotField(event.target.value)}
                />
              </label>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-2 block font-medium">Name</span>
                <input
                  className="input-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className="mt-1.5 block text-xs text-accent">{errors.name}</span>}
              </label>
              <label className="block text-sm">
                <span className="mb-2 block font-medium">Email</span>
                <input
                  type="email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className="mt-1.5 block text-xs text-accent">{errors.email}</span>}
              </label>
            </div>
            <label className="block text-sm">
              <span className="mb-2 block font-medium">Role / craft</span>
              <select
                className="input-field cursor-pointer"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                aria-required="true"
                aria-invalid={!!errors.role}
              >
                {RECRUIT_ROLES.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
              {errors.role && <span className="mt-1.5 block text-xs text-accent">{errors.role}</span>}
            </label>
            <label className="block text-sm">
              <span className="mb-2 block font-medium">Tell us about your craft</span>
              <textarea
                className="input-field min-h-[140px] resize-y"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What you make, how you like to work, and why PE…"
                aria-required="true"
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <span className="mt-1.5 block text-xs text-accent">{errors.message}</span>
              )}
            </label>
            {formError && (
              <p role="alert" className="rounded-2xl border border-card-border bg-card px-4 py-3 text-sm text-foreground">
                {formError}
              </p>
            )}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="text-xs text-muted">
                Or email{" "}
                <a href="mailto:prettyxplosion@gmail.com" className="text-accent underline-offset-2 hover:underline">
                  prettyxplosion@gmail.com
                </a>
              </p>
              <button type="submit" className="btn-primary" disabled={sending} aria-busy={sending}>
                {sending ? "Sending…" : "Express interest"}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
