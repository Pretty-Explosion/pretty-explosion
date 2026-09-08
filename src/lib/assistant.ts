import { grants, type Grant, type Medium, type Stage } from "@/data/grants";

export type AssistantMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  matches?: Grant[];
  outline?: string[];
  checklist?: string[];
};

const mediumKeywords: Record<string, Medium> = {
  narrative: "Narrative Film",
  feature: "Narrative Film",
  fiction: "Narrative Film",
  short: "Narrative Film",
  documentary: "Documentary",
  doc: "Documentary",
  nonfiction: "Documentary",
  commercial: "Commercial",
  brand: "Commercial",
  ad: "Commercial",
  tv: "TV / Series",
  series: "TV / Series",
  episodic: "TV / Series",
  animation: "Animation",
  animated: "Animation",
  anime: "Animation",
  streaming: "Digital / Streaming",
  digital: "Digital / Streaming",
  web: "Digital / Streaming",
  immersive: "Immersive / XR",
  vr: "Immersive / XR",
  ar: "Immersive / XR",
  xr: "Immersive / XR",
};

const stageKeywords: Record<string, Stage> = {
  develop: "Development",
  treatment: "Development",
  script: "Development",
  produce: "Production",
  shoot: "Production",
  filming: "Production",
  post: "Post-Production",
  edit: "Post-Production",
  finishing: "Post-Production",
  distribute: "Distribution",
  festival: "Distribution",
  release: "Distribution",
  research: "Research",
  archive: "Research",
};

function detectMedia(text: string): Medium[] {
  const lower = text.toLowerCase();
  const found = new Set<Medium>();
  for (const [key, medium] of Object.entries(mediumKeywords)) {
    if (lower.includes(key)) found.add(medium);
  }
  if (found.size === 0) found.add("Narrative Film");
  return [...found];
}

function detectStages(text: string): Stage[] {
  const lower = text.toLowerCase();
  const found = new Set<Stage>();
  for (const [key, stage] of Object.entries(stageKeywords)) {
    if (lower.includes(key)) found.add(stage);
  }
  if (found.size === 0) found.add("Development");
  return [...found];
}

function scoreGrant(grant: Grant, media: Medium[], stages: Stage[], text: string): number {
  let score = 0;
  const lower = text.toLowerCase();
  if (grant.medium.some((m) => media.includes(m))) score += 3;
  if (grant.stage.some((s) => stages.includes(s))) score += 2;
  if (lower.includes("women") || lower.includes("non-binary") || lower.includes("nonbinary")) {
    if (grant.eligibility.includes("Women & Non-Binary Led")) score += 2;
  }
  if (lower.includes("indigenous") || lower.includes("first nations")) {
    if (grant.eligibility.includes("Indigenous Storytelling")) score += 2;
  }
  if (lower.includes("climate") || lower.includes("social") || lower.includes("impact")) {
    if (grant.eligibility.includes("Climate & Social Impact")) score += 2;
  }
  if (lower.includes("emerging") || lower.includes("first-time") || lower.includes("debut")) {
    if (grant.eligibility.includes("Emerging Creators")) score += 1;
  }
  if (lower.includes("student") || lower.includes("youth")) {
    if (grant.eligibility.includes("Youth / Student")) score += 1;
  }
  if (lower.includes("tech") || lower.includes("innovation") || lower.includes("experimental")) {
    if (grant.eligibility.includes("Innovation / Tech")) score += 1;
  }
  return score;
}

export function analyzeProject(description: string): {
  reply: string;
  matches: Grant[];
  outline: string[];
  checklist: string[];
} {
  const media = detectMedia(description);
  const stages = detectStages(description);
  const ranked = [...grants]
    .map((g) => ({ g, score: scoreGrant(g, media, stages, description) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((x) => x.g);

  const matches = ranked.length > 0 ? ranked : grants.slice(0, 3);

  const outline = [
    "Logline (1–2 sentences capturing premise, protagonist, and stakes)",
    `Project overview — medium: ${media.join(", ")}; stage: ${stages.join(", ")}`,
    "Artistic statement: why this story, why now, and your unique POV",
    "Audience & impact: who it reaches and how success is measured",
    "Team bios emphasizing lived experience and relevant craft",
    "Budget summary aligned to the requested stage and grant range",
    "Timeline with milestones from award to delivery",
    "Work samples / lookbook / trailer links (or planned materials)",
  ];

  const checklist = [
    "Project title and working logline",
    "Full treatment or script (stage-appropriate)",
    "Director / creator statement",
    "Key creative bios and DEI / community notes",
    "Preliminary budget and financing plan",
    "Production schedule or development timeline",
    "Letters of support or community partners (if applicable)",
    "Sample reel, stills, or prototype (immersive / animation)",
    "Eligibility confirmation for each target funder",
    "Proofread narrative + consistent naming across docs",
  ];

  const reply = [
    "I've reviewed your project description with Pretty Explosion's example grant intelligence (client-side mock — no external API).",
    "",
    `Detected focus: **${media.join(", ")}** · Stage signals: **${stages.join(", ")}**.`,
    "",
    `Here are ${matches.length} example grant types that align with your brief. Each is marked as an example for preview purposes.`,
    "",
    "Below you'll also find a draft submission outline and a materials checklist you can adapt for real applications.",
  ].join("\n");

  return { reply, matches, outline, checklist };
}

export const welcomeMessage: AssistantMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Welcome to the Pretty Explosion AI Grant Assistant. Describe your film or media project — medium, stage, themes, and goals — and I'll match example grant types, draft an outline, and build a materials checklist. This preview uses client-side mock intelligence only.",
};
