'use client';

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  analyzeProject,
  welcomeMessage,
  type AssistantMessage,
} from "@/lib/assistant";

const examples = [
  "Debut narrative feature about queer diaspora identity, seeking development support in North America.",
  "Climate documentary in production needing finishing funds and impact distribution across Africa.",
  "Immersive XR experience exploring Indigenous star knowledge — experimental tech, early research stage.",
];

export function AssistantChat() {
  const [messages, setMessages] = useState<AssistantMessage[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy]);

  function pushAnalysis(text: string) {
    const userMsg: AssistantMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMsg]);
    setBusy(true);

    window.setTimeout(() => {
      const result = analyzeProject(text);
      const assistantMsg: AssistantMessage = {
        id: `a-${Date.now()}`,
        role: "assistant",
        content: result.reply,
        matches: result.matches,
        outline: result.outline,
        checklist: result.checklist,
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setBusy(false);
    }, 650);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    pushAnalysis(text);
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <div className="glass flex max-h-[70vh] min-h-[420px] flex-col overflow-hidden rounded-3xl">
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
          <div>
            <p className="text-sm font-semibold">AI Grant Assistant</p>
            <p className="text-xs text-muted">Client-side mock intelligence · example data</p>
          </div>
          <span className="ai-label inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Ready
          </span>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
          <AnimatePresence initial={false}>
            {messages.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[92%] rounded-2xl px-4 py-3 text-sm leading-relaxed md:max-w-[85%] ${
                    m.role === "user"
                      ? "bg-gradient-to-br from-[#d4d8de] to-[#8b949e] text-[#0a0a0c]"
                      : "border border-white/10 bg-white/5 text-foreground/95"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.content.replace(/\*\*(.*?)\*\*/g, "$1")}</p>

                  {m.matches && m.matches.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <p className="ai-label text-xs font-semibold uppercase tracking-[0.14em] text-accent-3">
                        Matched example grants
                      </p>
                      {m.matches.map((g) => (
                        <div
                          key={g.id}
                          className="rounded-xl border border-white/10 bg-black/20 p-3"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <p className="font-medium">{g.title}</p>
                            <span className="shrink-0 rounded-full bg-warning/15 px-2 py-0.5 text-[10px] font-semibold uppercase text-warning">
                              Example
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-muted">
                            {g.funder} · {g.amount} · {g.region}
                          </p>
                          <p className="mt-2 text-xs text-foreground/70">{g.summary}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {m.outline && (
                    <div className="mt-4">
                      <p className="ai-label text-xs font-semibold uppercase tracking-[0.14em] text-accent-2">
                        Draft outline
                      </p>
                      <ol className="mt-2 list-decimal space-y-1 pl-4 text-xs text-foreground/80">
                        {m.outline.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {m.checklist && (
                    <div className="mt-4">
                      <p className="ai-label text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                        Materials checklist
                      </p>
                      <ul className="mt-2 space-y-1 text-xs text-foreground/80">
                        {m.checklist.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {busy && (
            <div className="flex justify-start">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                Matching grant types…
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={onSubmit} className="border-t border-white/5 p-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={3}
              placeholder="Describe your project: medium, stage, themes, region, goals…"
              className="input-field min-h-[88px] resize-y sm:flex-1"
              aria-label="Project description"
            />
            <button type="submit" disabled={busy || !input.trim()} className="btn-primary disabled:cursor-not-allowed disabled:opacity-50 sm:self-end">
              Analyze
            </button>
          </div>
        </form>
      </div>

      <div>
        <p className="ai-label mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Try an example
        </p>
        <div className="flex flex-col gap-2">
          {examples.map((ex) => (
            <button
              key={ex}
              type="button"
              disabled={busy}
              onClick={() => pushAnalysis(ex)}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-foreground/80 transition hover:border-accent/40 hover:bg-white/[0.06] disabled:opacity-50"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
