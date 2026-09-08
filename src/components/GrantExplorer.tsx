'use client';

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  grants,
  MEDIUMS,
  STAGES,
  REGIONS,
  THEMES,
  STATUS_LABELS,
  type Medium,
  type Stage,
  type Region,
  type EligibilityTheme,
  type Grant,
  type GrantStatus,
} from "@/data/grants";

function formatDeadline(iso: string) {
  if (iso.toLowerCase() === "rolling") return "Rolling";
  try {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function statusStyles(status: GrantStatus) {
  switch (status) {
    case "open":
      return "border-accent-2/30 bg-accent-2/10 text-accent-2";
    case "rolling":
      return "border-accent/30 bg-accent/10 text-accent";
    case "upcoming":
      return "border-accent-3/30 bg-accent-3/10 text-accent-3";
  }
}

function BulletList({ items, title }: { items: string[]; title: string }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-3">
        {title}
      </h4>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GrantCard({ g, index }: { g: Grant; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: Math.min(index * 0.03, 0.2) }}
      className="glass group relative overflow-hidden rounded-3xl"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl transition group-hover:bg-accent/20" />
      <div className="relative p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-3">
              {g.funder}
            </p>
            <h2 className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
              {g.title}
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${statusStyles(g.status)}`}
            >
              {STATUS_LABELS[g.status]}
            </span>
            <span className="rounded-full border border-warning/25 bg-warning/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-warning">
              Example
            </span>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted">{g.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {g.medium.map((m) => (
            <span
              key={m}
              className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-foreground/80"
            >
              {m}
            </span>
          ))}
          {g.stage.map((s) => (
            <span
              key={s}
              className="rounded-full bg-accent-2/15 px-2.5 py-1 text-xs text-accent-2"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {g.eligibility.map((e) => (
            <span
              key={e}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted"
            >
              {e}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4 text-sm">
          <p>
            <span className="text-muted">Amount </span>
            <span className="font-semibold text-foreground">{g.amount}</span>
          </p>
          <p>
            <span className="text-muted">Region </span>
            <span className="font-medium">{g.region}</span>
          </p>
          <p>
            <span className="text-muted">Deadline </span>
            <span className="font-medium">{formatDeadline(g.deadline)}</span>
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="btn-secondary text-sm"
          >
            {open ? "Hide details" : "View full details"}
          </button>
          <a
            href={g.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            Example application link →
          </a>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="relative space-y-6 border-t border-white/5 bg-white/[0.02] px-6 py-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Full description
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  {g.fullDescription}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <BulletList title="Eligibility" items={g.eligibilityBullets} />
                <BulletList title="Required materials" items={g.requiredMaterials} />
              </div>

              <BulletList title="Application tips" items={g.applicationTips} />

              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm">
                <div className="flex flex-wrap gap-4">
                  <p>
                    <span className="text-muted">Status </span>
                    <span className="font-medium">{STATUS_LABELS[g.status]}</span>
                  </p>
                  <p>
                    <span className="text-muted">Deadline </span>
                    <span className="font-medium">{formatDeadline(g.deadline)}</span>
                  </p>
                </div>
                <a
                  href={g.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Open example URL
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export function GrantExplorer() {
  const [query, setQuery] = useState("");
  const [medium, setMedium] = useState<Medium | "All">("All");
  const [stage, setStage] = useState<Stage | "All">("All");
  const [region, setRegion] = useState<Region | "All">("All");
  const [theme, setTheme] = useState<EligibilityTheme | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return grants.filter((g) => {
      if (medium !== "All" && !g.medium.includes(medium)) return false;
      if (stage !== "All" && !g.stage.includes(stage)) return false;
      if (region !== "All" && g.region !== region) return false;
      if (theme !== "All" && !g.eligibility.includes(theme)) return false;
      if (!q) return true;
      const hay = [
        g.title,
        g.funder,
        g.summary,
        g.fullDescription,
        g.status,
        ...g.medium,
        ...g.stage,
        ...g.eligibility,
        ...g.eligibilityBullets,
        ...g.requiredMaterials,
        ...g.applicationTips,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query, medium, stage, region, theme]);

  const selectClass =
    "input-field !rounded-xl !py-2.5 text-sm appearance-none cursor-pointer";

  return (
    <div className="space-y-8">
      <div className="glass rounded-3xl p-5 md:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> of{" "}
            {grants.length} example grants
          </p>
          <span className="rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-xs font-medium text-warning">
            All listings are examples
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          <input
            type="search"
            placeholder="Search titles, funders, themes…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input-field lg:col-span-1"
            aria-label="Search grants"
          />
          <select
            className={selectClass}
            value={medium}
            onChange={(e) => setMedium(e.target.value as Medium | "All")}
            aria-label="Filter by medium"
          >
            <option value="All">All media</option>
            {MEDIUMS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <select
            className={selectClass}
            value={stage}
            onChange={(e) => setStage(e.target.value as Stage | "All")}
            aria-label="Filter by stage"
          >
            <option value="All">All stages</option>
            {STAGES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <select
            className={selectClass}
            value={region}
            onChange={(e) => setRegion(e.target.value as Region | "All")}
            aria-label="Filter by region"
          >
            <option value="All">All regions</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <select
            className={selectClass}
            value={theme}
            onChange={(e) => setTheme(e.target.value as EligibilityTheme | "All")}
            aria-label="Filter by eligibility theme"
          >
            <option value="All">All eligibility</option>
            {THEMES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="glass rounded-3xl px-6 py-16 text-center"
          >
            <p className="text-lg font-medium">No matching example grants</p>
            <p className="mt-2 text-sm text-muted">
              Try broadening filters or clearing search.
            </p>
            <button
              type="button"
              className="btn-secondary mt-6 text-sm"
              onClick={() => {
                setQuery("");
                setMedium("All");
                setStage("All");
                setRegion("All");
                setTheme("All");
              }}
            >
              Reset filters
            </button>
          </motion.div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.map((g, i) => (
              <GrantCard key={g.id} g={g} index={i} />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
