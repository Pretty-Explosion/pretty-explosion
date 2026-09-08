'use client';

import { useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Errors = Partial<Record<"name" | "email" | "projectType" | "message", string>>;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("General inquiry");
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
    if (!projectType.trim()) next.projectType = "Choose a project type.";
    if (!message.trim() || message.trim().length < 20) {
      next.message = "Share at least 20 characters so we can help.";
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
      setProjectType("General inquiry");
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
              Got it — thanks
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted">
              This local preview does not send email yet. Your note validated and simulated a
              submit so we can demo the flow.
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
              <span className="mb-2 block font-medium">Project type</span>
              <select
                className="input-field cursor-pointer"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
              >
                <option>General inquiry</option>
                <option>Quality Video / studio brief</option>
                <option>Grant matching help</option>
                <option>Journalism pitch</option>
                <option>Recruit / join the crew</option>
                <option>Partnerships / invest</option>
                <option>Press</option>
                <option>Product feedback</option>
              </select>
              {errors.projectType && <span className="mt-1.5 block text-xs text-accent">{errors.projectType}</span>}
            </label>
            <label className="block text-sm">
              <span className="mb-2 block font-medium">Message</span>
              <textarea
                className="input-field min-h-[140px] resize-y"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <span className="mt-1.5 block text-xs text-accent">{errors.message}</span>
              )}
            </label>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="text-xs text-muted">Client-side validation · mock submit only</p>
              <button type="submit" className="btn-primary" disabled={sending}>
                {sending ? "Sending…" : "Send message"}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
