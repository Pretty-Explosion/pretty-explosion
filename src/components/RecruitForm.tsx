'use client';

import { useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Errors = Partial<Record<"name" | "email" | "role" | "message", string>>;

const roles = [
  "Director / DP",
  "Editor",
  "Journalist",
  "Grant writer",
  "Producer",
  "AI-fluent creative",
  "Other craft",
];

export function RecruitForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(roles[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim() || name.trim().length < 2) next.name = "Please enter your name.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!role.trim()) next.role = "Choose a role.";
    if (!message.trim() || message.trim().length < 20) {
      next.message = "Share at least 20 characters about your craft or interest.";
    }
    return next;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setRole(roles[0]);
      setMessage("");
    }, 700);
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
              This local preview does not send email yet. Prefer to write directly?{" "}
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
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-2 block font-medium">Name</span>
                <input
                  className="input-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
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
              >
                {roles.map((r) => (
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
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <span className="mt-1.5 block text-xs text-accent">{errors.message}</span>
              )}
            </label>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="text-xs text-muted">
                Client-side mock · or email{" "}
                <a href="mailto:prettyxplosion@gmail.com" className="text-accent underline-offset-2 hover:underline">
                  prettyxplosion@gmail.com
                </a>
              </p>
              <button type="submit" className="btn-primary" disabled={sending}>
                {sending ? "Sending…" : "Express interest"}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
