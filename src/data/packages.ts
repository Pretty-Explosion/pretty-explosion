/** Quality Video planning bands — quote after brief, not sold prices. */

export const PACKAGE_SPINE = ["Brief", "Preview", "Approve"] as const;

export const PACKAGE_BAND_NOTE = "Planning band · quote after brief";

export const BUY_SOON_LABEL = "Coming soon — CAD Stripe after BN";

export type VideoPackage = {
  name: string;
  tag: string;
  band: string;
  summary: string;
  deliverables: string[];
  bestFor: string;
};

export const videoPackages: VideoPackage[] = [
  {
    name: "Spark",
    tag: "Social-ready",
    band: "CAD $2.5–8k",
    summary:
      "A polished short-form promo for product drops, artist singles, or campaign teasers.",
    deliverables: [
      "15–30s hero cut + 9:16 crop",
      "AI-assisted rough assembly",
      "1 revision round",
      "Color pass & mix",
      "2 platform aspect ratios",
    ],
    bestFor: "Creators, startups, single-asset launches",
  },
  {
    name: "Pulse",
    tag: "Campaign",
    band: "CAD $8–25k",
    summary:
      "A multi-cut campaign package with narrative beat, talent direction, and channel variants.",
    deliverables: [
      "60–90s hero film",
      "3 social cutdowns",
      "Moodboard + shotlist",
      "2 revision rounds",
      "Licensed/AI stock + original VO guidance",
      "Captioned masters",
    ],
    bestFor: "Brands, nonprofits, album campaigns",
  },
  {
    name: "Explosion",
    tag: "Flagship",
    band: "CAD $25–75k+",
    summary:
      "Full cinematic promo production — concept through delivery — with human directors and AI-accelerated pipelines.",
    deliverables: [
      "90s–3min campaign film",
      "Full creative treatment",
      "On-set or hybrid production day(s)",
      "Editor suite + finishing",
      "Unlimited social variants within scope",
      "Inclusive casting & story consult",
      "Delivery kit + usage guide",
    ],
    bestFor: "Brand films, artist docs, major launches",
  },
];

export const retainerPackage: VideoPackage = {
  name: "Retainer",
  tag: "Optional",
  band: "CAD $5–20k/mo",
  summary:
    "Ongoing creative capacity — cutdowns, campaign refresh, and director-in-the-loop hours. Scope locks after the brief.",
  deliverables: [
    "Monthly drop cadence, agreed in the brief",
    "Cutdowns & channel refresh",
    "Director-in-the-loop hours",
    "Same brief → preview → approve spine",
  ],
  bestFor: "Teams who need a steady film desk, not a one-off",
};

export const educatePack = {
  name: "AI-positive educate packs",
  headline: "AI that helps people — filmed like it matters.",
  band: "Pulse–Explosion range",
  summary:
    "Explainers and education films that treat AI as a tool that helps people — not a stunt. Planning sits in the Pulse–Explosion band. Quote after brief.",
};

export type UseRightsBand = {
  name: string;
  tag: string;
  band: string;
  rights: string;
};

export const hardSellPromo = {
  name: "2:00 Hard-Sell",
  tag: "PE 2:00 Hard-Sell Promo",
  duration: "~2:00",
  headline: "The future of business — fast, efficient, quality.",
  summary:
    "A ~2:00 hard-sell promo for new clients. Sliding scale by use rights. Quote after brief — not list prices.",
  usageNote:
    "Usage — where it runs and for how long — belongs on the brief. If Personal or Public later runs as paid ads, we re-quote an upgrade.",
  useRights: [
    {
      name: "Personal",
      tag: "Portfolio",
      band: "CAD $2.5–8k",
      rights: "Non-commercial / portfolio only.",
    },
    {
      name: "Public",
      tag: "Public-good",
      band: "CAD $8–18k",
      rights: "Public-good / educate / CSR.",
    },
    {
      name: "Commercial",
      tag: "Paid ads",
      band: "CAD $15–25k",
      rights: "Paid ads. Explosion only if flagship CSR / AI-positive.",
    },
  ] satisfies UseRightsBand[],
};
