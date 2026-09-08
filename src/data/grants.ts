export type Medium =
  | "Narrative Film"
  | "Documentary"
  | "Commercial"
  | "TV / Series"
  | "Animation"
  | "Digital / Streaming"
  | "Immersive / XR";

export type Stage =
  | "Development"
  | "Production"
  | "Post-Production"
  | "Distribution"
  | "Research";

export type Region =
  | "North America"
  | "Europe"
  | "Latin America"
  | "Asia-Pacific"
  | "Africa / MENA"
  | "Global / Remote";

export type EligibilityTheme =
  | "Emerging Creators"
  | "Underrepresented Voices"
  | "Climate & Social Impact"
  | "Innovation / Tech"
  | "Women & Non-Binary Led"
  | "Indigenous Storytelling"
  | "Youth / Student"
  | "Open Eligibility";

export type GrantStatus = "open" | "rolling" | "upcoming";

export interface Grant {
  id: string;
  title: string;
  funder: string;
  medium: Medium[];
  stage: Stage[];
  region: Region;
  eligibility: EligibilityTheme[];
  amount: string;
  deadline: string;
  summary: string;
  fullDescription: string;
  eligibilityBullets: string[];
  requiredMaterials: string[];
  applicationTips: string[];
  applicationUrl: string;
  status: GrantStatus;
  example: true;
}

export const MEDIUMS: Medium[] = [
  "Narrative Film",
  "Documentary",
  "Commercial",
  "TV / Series",
  "Animation",
  "Digital / Streaming",
  "Immersive / XR",
];

export const STAGES: Stage[] = [
  "Development",
  "Production",
  "Post-Production",
  "Distribution",
  "Research",
];

export const REGIONS: Region[] = [
  "North America",
  "Europe",
  "Latin America",
  "Asia-Pacific",
  "Africa / MENA",
  "Global / Remote",
];

export const THEMES: EligibilityTheme[] = [
  "Emerging Creators",
  "Underrepresented Voices",
  "Climate & Social Impact",
  "Innovation / Tech",
  "Women & Non-Binary Led",
  "Indigenous Storytelling",
  "Youth / Student",
  "Open Eligibility",
];

export const STATUS_LABELS: Record<GrantStatus, string> = {
  open: "Open",
  rolling: "Rolling",
  upcoming: "Upcoming",
};

export const grants: Grant[] = [
  {
    id: "pe-ex-001",
    title: "Horizon Narrative Catalyst",
    funder: "Example Media Futures Fund",
    medium: ["Narrative Film"],
    stage: ["Development", "Production"],
    region: "North America",
    eligibility: ["Emerging Creators", "Underrepresented Voices"],
    amount: "$15,000 – $75,000",
    deadline: "2026-11-15",
    summary:
      "Example grant supporting character-driven narrative features and shorts from emerging directors with bold aesthetic vision.",
    fullDescription:
      "The Horizon Narrative Catalyst is an example program designed to accelerate character-driven narrative features and shorts by emerging directors across Canada and the United States. Awards support script refinement, package development, and early production when a clear creative vision and inclusive leadership plan are in place. Recipients receive a one-time cash award plus optional mentorship from working producers and festival programmers. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Director or writer-director must be emerging (fewer than two features released theatrically or on major SVOD)",
      "Primary applicant based in Canada or the United States",
      "Project must be narrative fiction (feature or short over 10 minutes)",
      "Teams with underrepresented leadership strongly encouraged",
      "Cannot have already closed more than 60% of the total production budget",
    ],
    requiredMaterials: [
      "Project synopsis (1–2 pages) and treatment or script sample",
      "Director's statement and visual lookbook",
      "Budget top sheet and financing plan",
      "Bios / CV for key creative personnel",
      "Work sample (previous short, reel, or proof-of-concept)",
      "Optional: letters of intent from cast, DP, or producers",
    ],
    applicationTips: [
      "Lead with the emotional spine of the story, not just plot beats",
      "Show how the requested amount unlocks a specific next milestone",
      "Name collaborators and access already secured — specificity builds trust",
      "If applying as an underrepresented team, connect lived perspective to creative choices without tokenizing",
    ],
    applicationUrl: "https://example.com/grants/horizon-narrative-catalyst",
    status: "open",
    example: true,
  },
  {
    id: "pe-ex-002",
    title: "Truth Lens Documentary Fellowship",
    funder: "Example Civic Story Institute",
    medium: ["Documentary"],
    stage: ["Development", "Production", "Post-Production"],
    region: "Global / Remote",
    eligibility: ["Climate & Social Impact", "Underrepresented Voices"],
    amount: "$25,000 – $100,000",
    deadline: "2026-10-01",
    summary:
      "Example fellowship for nonfiction projects examining climate justice, community resilience, and systemic change.",
    fullDescription:
      "Truth Lens is an example global fellowship for nonfiction filmmakers whose work examines climate justice, community resilience, and systemic change. Fellows receive flexible funding usable across development, production, or post, plus cohort convenings (virtual) and editorial mentorship. The program prioritizes filmmakers with deep community relationships and clear consent / care practices. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Open to documentary directors worldwide (remote-friendly)",
      "Project must engage climate, environmental justice, or community resilience themes",
      "Demonstrated relationship with the communities portrayed",
      "Underrepresented and Global South creators prioritized",
      "Feature-length or ambitious series formats accepted",
    ],
    requiredMaterials: [
      "Project description and theory of change (max 3 pages)",
      "Access / character update and sample footage or previous work",
      "Impact and distribution strategy outline",
      "Detailed budget and fundraising status",
      "Community care / consent statement",
      "Two professional references",
    ],
    applicationTips: [
      "Center community agency — avoid extractive framing of subjects",
      "Be honest about access risks and mitigation plans",
      "Map how Truth Lens funds fill a real financing gap, not the entire budget",
      "Include a short ethics note on archival or sensitive material if relevant",
    ],
    applicationUrl: "https://example.com/grants/truth-lens-fellowship",
    status: "open",
    example: true,
  },
  {
    id: "pe-ex-003",
    title: "Spectrum Commercial Craft Award",
    funder: "Example Brand Arts Collective",
    medium: ["Commercial"],
    stage: ["Production", "Post-Production"],
    region: "Europe",
    eligibility: ["Innovation / Tech", "Open Eligibility"],
    amount: "€10,000 – €40,000",
    deadline: "2026-09-30",
    summary:
      "Example award for inventive commercial and branded content that elevates craft, inclusivity, and cultural storytelling.",
    fullDescription:
      "The Spectrum Commercial Craft Award is an example European program celebrating inventive commercial and branded content. It funds production or finishing for spots, branded shorts, and experimental brand films that elevate craft, inclusivity, and cultural storytelling — not soft-sell wallpaper. Jury members include creative directors, DPs, and editors. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Applicant must be a director, creative studio, or production company based in Europe",
      "Work must be commercial / branded content (paid or speculative)",
      "Strong craft emphasis: cinematography, design, sound, or performance",
      "Open eligibility; innovation in technique or format encouraged",
      "Prior brand clients welcome but not required",
    ],
    requiredMaterials: [
      "Creative deck or treatment for the proposed / in-progress spot",
      "Showreel (max 3 minutes) or three prior commercial pieces",
      "Production schedule and craft team bios",
      "Budget with clear use of award funds",
      "Inclusivity / casting approach statement",
    ],
    applicationTips: [
      "Submit work that shows a point of view, not only technical polish",
      "If speculative, still define the brand problem you are solving",
      "Highlight craft collaborators (colorist, sound designer, VFX) by name",
      "Keep the reel tight — three strong pieces beat twelve average ones",
    ],
    applicationUrl: "https://example.com/grants/spectrum-commercial-craft",
    status: "open",
    example: true,
  },
  {
    id: "pe-ex-004",
    title: "Serial Worlds Series Lab",
    funder: "Example Streaming Creators Trust",
    medium: ["TV / Series", "Digital / Streaming"],
    stage: ["Development"],
    region: "North America",
    eligibility: ["Women & Non-Binary Led", "Emerging Creators"],
    amount: "$20,000 + mentorship",
    deadline: "2026-12-05",
    summary:
      "Example lab funding limited series and streaming pilots with strong episodic architecture and inclusive writers' rooms.",
    fullDescription:
      "Serial Worlds is an example development lab for limited series and streaming pilots. Selected writers and showrunners receive a stipend, a six-week virtual lab with showrunner mentors, and introductions to streamers and indie financiers. The lab emphasizes episodic architecture, inclusive writers' rooms, and market-ready packages. Preference for women and non-binary led rooms. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Lead creator must be a woman or non-binary emerging writer / showrunner",
      "Based in Canada or the United States (remote participation OK)",
      "Original limited series or pilot concept (no existing network deal required)",
      "Prior produced credits helpful but not mandatory",
      "Writers' room diversity plan required for multi-episode proposals",
    ],
    requiredMaterials: [
      "Series bible or pilot script + series overview",
      "Episode outlines for seasons 1 (or limited series arc)",
      "Personal statement on creative leadership",
      "Sample of prior writing (script or produced work)",
      "Optional: lookbook or tone reel",
    ],
    applicationTips: [
      "Clarify the engine of the series — what generates episode after episode",
      "Show you understand platform length and tone without chasing trends",
      "Name the audience and comparable titles honestly",
      "If you have no prior TV credit, lean on theatre, film, or digital writing samples",
    ],
    applicationUrl: "https://example.com/grants/serial-worlds-lab",
    status: "upcoming",
    example: true,
  },
  {
    id: "pe-ex-005",
    title: "Motion Bloom Animation Grant",
    funder: "Example Frame & Form Foundation",
    medium: ["Animation"],
    stage: ["Development", "Production"],
    region: "Asia-Pacific",
    eligibility: ["Youth / Student", "Emerging Creators"],
    amount: "$8,000 – $35,000",
    deadline: "2027-01-20",
    summary:
      "Example grant for independent animation—2D, 3D, stop-motion, or hybrid—with distinctive visual language.",
    fullDescription:
      "Motion Bloom supports independent animation across the Asia-Pacific region — 2D, 3D, stop-motion, and hybrid techniques. The example grant funds development or production for shorts and mid-length works with a distinctive visual language. Student and early-career animators are priority applicants. Mentorship from regional studios is available for top awards. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Applicant based in Asia-Pacific (citizenship or primary residence)",
      "Age under 35 or currently enrolled / recent graduate preferred",
      "Independent animation project (not studio IP assignment)",
      "Any technique: 2D, 3D, stop-motion, experimental hybrid",
      "Runtime typically under 30 minutes; mid-length considered case-by-case",
    ],
    requiredMaterials: [
      "Animatic, storyboard, or style frames",
      "Director's statement on visual approach",
      "Production pipeline and schedule",
      "Budget and team roles",
      "Prior animation sample or student reel",
    ],
    applicationTips: [
      "Let the still frames and animatic carry the aesthetic argument",
      "Be realistic about pipeline capacity — ambitious art with a feasible plan wins",
      "Call out software, render strategy, and key collaborators",
      "If student-led, clarify faculty support and equipment access",
    ],
    applicationUrl: "https://example.com/grants/motion-bloom",
    status: "upcoming",
    example: true,
  },
  {
    id: "pe-ex-006",
    title: "Presence Immersive Creation Fund",
    funder: "Example Spatial Media Alliance",
    medium: ["Immersive / XR"],
    stage: ["Development", "Production"],
    region: "Global / Remote",
    eligibility: ["Innovation / Tech", "Open Eligibility"],
    amount: "$30,000 – $120,000",
    deadline: "2026-10-22",
    summary:
      "Example fund for VR, AR, and immersive installations that push narrative presence and accessible interaction design.",
    fullDescription:
      "Presence funds VR, AR, and immersive installations that push narrative presence and accessible interaction design. This example global fund supports prototypes through production, with emphasis on comfort, accessibility, and story craft — not tech demos alone. Teams may be distributed worldwide. Hardware partnerships are announced each cycle. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Open to creators worldwide (remote-friendly teams)",
      "Project must be immersive: VR, AR, MR, or spatial installation",
      "Clear narrative or experiential thesis beyond pure tech showcase",
      "Accessibility plan required (comfort, subtitles, seated modes, etc.)",
      "Open eligibility; interdisciplinary teams welcome",
    ],
    requiredMaterials: [
      "Experience design document and interaction flow",
      "Prototype build, demo video, or technical proof",
      "Accessibility and comfort strategy",
      "Budget, tech stack, and production timeline",
      "Team bios covering creative and engineering leads",
    ],
    applicationTips: [
      "Lead with what the audience feels and does, then the tech stack",
      "Document motion-sickness and onboarding mitigation early",
      "Show a playable or filmed prototype whenever possible",
      "Name target platforms and venue partners if installation-based",
    ],
    applicationUrl: "https://example.com/grants/presence-immersive",
    status: "open",
    example: true,
  },
  {
    id: "pe-ex-007",
    title: "Southern Light Production Support",
    funder: "Example LatAm Screen Trust",
    medium: ["Narrative Film", "Documentary"],
    stage: ["Production"],
    region: "Latin America",
    eligibility: ["Indigenous Storytelling", "Underrepresented Voices"],
    amount: "$12,000 – $60,000",
    deadline: "2026-11-30",
    summary:
      "Example production support for Latin American creators centering Indigenous languages, place, and contemporary myth.",
    fullDescription:
      "Southern Light provides example production support for Latin American narrative and documentary projects that center Indigenous languages, place-based storytelling, and contemporary myth. Funds cover principal photography costs with community-first production practices. Co-productions across LatAm territories are welcome. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Director or producer primarily based in Latin America",
      "Project centers Indigenous storytelling, languages, or place-based narratives",
      "Ready for or in production (not pure development)",
      "Demonstrated community consultation and benefit-sharing plan",
      "Underrepresented creative leadership prioritized",
    ],
    requiredMaterials: [
      "Shooting script or documentary production bible",
      "Community consultation / consent documentation",
      "Production schedule and location plan",
      "Budget with local crew and language support line items",
      "Key creative bios and prior work samples",
    ],
    applicationTips: [
      "Show how language and place shape the form, not only the subject",
      "Budget for community fees, translation, and local crew meaningfully",
      "Avoid outsider-savior framing — clarify your positionality",
      "If co-producing, map which partner holds creative authority",
    ],
    applicationUrl: "https://example.com/grants/southern-light",
    status: "open",
    example: true,
  },
  {
    id: "pe-ex-008",
    title: "Afterimage Post & Finish Fund",
    funder: "Example Craft Completion Circle",
    medium: ["Narrative Film", "Documentary", "Animation"],
    stage: ["Post-Production"],
    region: "Europe",
    eligibility: ["Open Eligibility", "Emerging Creators"],
    amount: "€8,000 – €45,000",
    deadline: "2026-09-18",
    summary:
      "Example finishing fund covering edit, sound, color, VFX, and delivery for festival-bound works in progress.",
    fullDescription:
      "Afterimage is an example European finishing fund for festival-bound narrative, documentary, and animation works already in post. Grants cover edit, sound, color, VFX, and delivery specs. Emerging filmmakers with a locked picture schedule and festival strategy are prioritized. In-kind partner facilities may be offered alongside cash. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Project must be in post-production with a clear path to picture lock",
      "Director or producer based in Europe (or European co-production)",
      "Narrative, documentary, or animation eligible",
      "Open eligibility; emerging creators prioritized for upper awards",
      "Must not have already premiered at a major A-list festival",
    ],
    requiredMaterials: [
      "Rough cut or assembly (secure link)",
      "Post schedule and finishing vendor quotes",
      "Festival strategy and target premiere list",
      "Budget showing remaining post costs",
      "Director's note on creative finishing priorities",
    ],
    applicationTips: [
      "Submit the strongest cut you have — reviewers watch assemblies carefully",
      "Itemize exactly which finishing steps the award unlocks",
      "Be specific about premiere window and why it matters",
      "If VFX-heavy, include a shot list priority for funded work",
    ],
    applicationUrl: "https://example.com/grants/afterimage-finish",
    status: "open",
    example: true,
  },
  {
    id: "pe-ex-009",
    title: "Signal Reach Distribution Spark",
    funder: "Example Audience Access Network",
    medium: ["Digital / Streaming", "Documentary", "Narrative Film"],
    stage: ["Distribution"],
    region: "Africa / MENA",
    eligibility: ["Climate & Social Impact", "Underrepresented Voices"],
    amount: "$5,000 – $25,000",
    deadline: "2026-12-15",
    summary:
      "Example distribution grant for impact campaigns, community screenings, and platform launches across Africa & MENA.",
    fullDescription:
      "Signal Reach funds distribution and impact for completed films and digital projects across Africa and MENA. This example grant supports community screenings, impact campaigns, accessibility (captions / dubs), and platform launches for climate and social-impact stories by underrepresented creators. Hybrid theatrical–digital strategies are welcome. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Project must be picture-locked or already completed",
      "Director or impact producer with ties to Africa / MENA audiences",
      "Clear climate or social impact goals",
      "Underrepresented creative teams prioritized",
      "Digital / streaming, documentary, or narrative formats eligible",
    ],
    requiredMaterials: [
      "Final or near-final cut + synopsis",
      "Distribution and impact campaign plan",
      "Audience map (regions, languages, partners)",
      "Budget for screenings, marketing, and accessibility",
      "Partner letters (NGOs, exhibitors, platforms) if available",
    ],
    applicationTips: [
      "Treat distribution as creative work — name partners, not only channels",
      "Budget for language access (dubs, captions) where audiences need it",
      "Define impact metrics you can actually measure",
      "Show how community screenings feed digital reach, or vice versa",
    ],
    applicationUrl: "https://example.com/grants/signal-reach",
    status: "upcoming",
    example: true,
  },
  {
    id: "pe-ex-010",
    title: "Seed Research & Treatment Studio",
    funder: "Example Story Science Guild",
    medium: ["Documentary", "TV / Series", "Immersive / XR"],
    stage: ["Research", "Development"],
    region: "Global / Remote",
    eligibility: ["Youth / Student", "Innovation / Tech"],
    amount: "$3,000 – $18,000",
    deadline: "2027-02-01",
    summary:
      "Example early research support for treatments, archival access, community consultation, and prototype narratives.",
    fullDescription:
      "Seed Research & Treatment Studio is an example early-stage award for students and young innovators building documentary, series, or immersive projects. Funds cover archival access, community consultation, research travel, and prototype treatments before full development. Remote applicants worldwide are welcome. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Applicant under 30 or currently a student / recent graduate",
      "Project in research or early development only",
      "Documentary, series, or immersive / XR formats",
      "Innovation in method or form encouraged",
      "Open globally; remote participation supported",
    ],
    requiredMaterials: [
      "Research question and methodology outline (max 2 pages)",
      "Preliminary treatment or prototype concept",
      "Archival / access / consultation plan",
      "Simple budget for research phase",
      "CV and one work sample or academic project",
    ],
    applicationTips: [
      "Frame a crisp research question — vagueness is the most common reject reason",
      "Show you already have one door open (archive contact, community intro)",
      "Keep the ask proportional to research, not full production",
      "If XR, describe the prototype fidelity you will reach with this seed",
    ],
    applicationUrl: "https://example.com/grants/seed-research-studio",
    status: "upcoming",
    example: true,
  },
  {
    id: "pe-ex-011",
    title: "Equinox Women Directors Circle",
    funder: "Example Parity Pictures Initiative",
    medium: ["Narrative Film", "TV / Series", "Commercial"],
    stage: ["Development", "Production"],
    region: "North America",
    eligibility: ["Women & Non-Binary Led", "Emerging Creators"],
    amount: "$10,000 – $50,000",
    deadline: "2026-10-10",
    summary:
      "Example circle backing women and non-binary directors across narrative, series, and commercial formats.",
    fullDescription:
      "Equinox is an example North American circle backing women and non-binary directors across narrative film, series, and commercial work. Awards fund development packages or production gaps, and fellows join a peer network with quarterly craft sessions. The program aims to close financing gaps that disproportionately affect women and non-binary directors. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Director must identify as a woman or non-binary",
      "Based in Canada or the United States",
      "Emerging career stage (typically fewer than two major released works as director)",
      "Narrative, TV / series, or commercial projects eligible",
      "Development or production stage",
    ],
    requiredMaterials: [
      "Director's statement and project materials (script, treatment, or commercial deck)",
      "Reel or prior directed work",
      "Budget and financing gap narrative",
      "Key collaborators list",
      "Short essay on barriers faced and how Equinox changes trajectory",
    ],
    applicationTips: [
      "Be concrete about the career leap this award enables",
      "For commercials, show authorship — not only client execution",
      "Invite your producer or EP to submit a short support note if helpful",
      "Highlight how you build inclusive sets and rooms",
    ],
    applicationUrl: "https://example.com/grants/equinox-directors-circle",
    status: "open",
    example: true,
  },
  {
    id: "pe-ex-012",
    title: "Pixel Commons Streaming Seed",
    funder: "Example Open Channel Lab",
    medium: ["Digital / Streaming", "Animation"],
    stage: ["Development", "Distribution"],
    region: "Asia-Pacific",
    eligibility: ["Innovation / Tech", "Youth / Student"],
    amount: "$6,000 – $28,000",
    deadline: "2026-11-08",
    summary:
      "Example seed for short-form streaming, web series, and animated digital-first projects with experimental formats.",
    fullDescription:
      "Pixel Commons seeds short-form streaming, web series, and animated digital-first projects across Asia-Pacific. This example program funds development or early distribution experiments — vertical video, interactive episodes, and hybrid live-animation formats. Youth and student creators with innovative distribution ideas are prioritized. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Based in Asia-Pacific",
      "Youth / student or early-career digital creators preferred",
      "Digital-first or streaming-native format (including animation)",
      "Experimental or innovative format strongly encouraged",
      "Development or distribution stage",
    ],
    requiredMaterials: [
      "Series / episode concept and format bible (short-form OK)",
      "Pilot script, boards, or sample episode",
      "Audience and platform strategy",
      "Budget and release timeline",
      "Creator reel or student portfolio",
    ],
    applicationTips: [
      "Define the platform constraints you are designing for (length, aspect, hooks)",
      "Show retention thinking — cold open, cliffhangers, shareability",
      "If animated, clarify pipeline and episode throughput",
      "Distribution-stage applicants should bring analytics from prior drops",
    ],
    applicationUrl: "https://example.com/grants/pixel-commons",
    status: "open",
    example: true,
  },
  {
    id: "pe-ex-013",
    title: "Maple Frame Canadian Development Fund",
    funder: "Example Northern Screens Collective",
    medium: ["Narrative Film", "Documentary", "TV / Series"],
    stage: ["Development"],
    region: "North America",
    eligibility: ["Open Eligibility", "Indigenous Storytelling"],
    amount: "CAD $10,000 – $40,000",
    deadline: "2026-10-30",
    summary:
      "Example Canadian development fund for features, docs, and series packages with strong Canadian creative control.",
    fullDescription:
      "Maple Frame is an example Canadian development fund supporting features, documentaries, and series packages with Canadian creative control. Awards cover writing, packaging, casting, and prep toward production financing. Indigenous storytellers and bilingual / multilingual projects receive dedicated review pathways. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Canadian citizen or permanent resident as lead writer, director, or producer",
      "Canadian creative control meeting example CAVCO-style thresholds",
      "Narrative, documentary, or TV / series in development",
      "Open eligibility; Indigenous storytelling prioritized in a dedicated stream",
      "Cannot already be in principal photography",
    ],
    requiredMaterials: [
      "Script, treatment, or series bible",
      "Development budget and timeline",
      "Producer's note on financing pathway (Telefilm / provincial / private)",
      "Team bios and Canadian content declaration",
      "Optional: letters of interest from broadcasters or streamers",
    ],
    applicationTips: [
      "Map a realistic Canadian financing stack — reviewers know the ecosystem",
      "For Indigenous projects, document nation relationships and protocols",
      "Show what development milestones cash will buy (drafts, attachments, tables)",
      "If bilingual, explain audience and versioning early",
    ],
    applicationUrl: "https://example.com/grants/maple-frame-dev",
    status: "open",
    example: true,
  },
  {
    id: "pe-ex-014",
    title: "Coastal Impact Climate Doc Award",
    funder: "Example Blue Horizon Media Trust",
    medium: ["Documentary", "Digital / Streaming"],
    stage: ["Production", "Post-Production"],
    region: "North America",
    eligibility: ["Climate & Social Impact", "Underrepresented Voices"],
    amount: "$20,000 – $80,000",
    deadline: "2026-11-01",
    summary:
      "Example award for climate and coastal justice documentaries and digital docs from US and Canadian teams.",
    fullDescription:
      "Coastal Impact funds climate and coastal justice documentaries and digital docs from US and Canadian teams. This example award supports production or finishing for stories on oceans, fisheries, Indigenous water rights, and climate migration. Impact producers may apply alongside directors. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "US or Canadian director / producer team",
      "Documentary or digital documentary format",
      "Clear climate, coastal, or water-justice focus",
      "Underrepresented voices and frontline community leadership prioritized",
      "Production or post stage",
    ],
    requiredMaterials: [
      "Project summary and climate thesis",
      "Sample footage or previous climate / community work",
      "Impact plan and scientific or community advisors list",
      "Budget and status of other funding",
      "Safety / field protocols for climate reporting",
    ],
    applicationTips: [
      "Pair science literacy with human story — avoid didactic essays",
      "Name advisors and community partners with consent",
      "Budget for field safety and insurance honestly",
      "Digital applicants should propose a release cadence, not only a feature cut",
    ],
    applicationUrl: "https://example.com/grants/coastal-impact",
    status: "open",
    example: true,
  },
  {
    id: "pe-ex-015",
    title: "Neon Market Commercial Innovation Prize",
    funder: "Example Pacific Brand Lab",
    medium: ["Commercial", "Digital / Streaming"],
    stage: ["Development", "Production"],
    region: "Asia-Pacific",
    eligibility: ["Innovation / Tech", "Emerging Creators"],
    amount: "$12,000 – $45,000",
    deadline: "Rolling",
    summary:
      "Example rolling prize for inventive branded and commercial work experimenting with new formats across Asia-Pacific.",
    fullDescription:
      "Neon Market is an example rolling prize for inventive branded and commercial work across Asia-Pacific. It funds development or production of spots, branded series, and shoppable / interactive commercial experiments. Emerging directors and creative technologists are preferred. Decisions are made monthly while funds remain. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Asia-Pacific based director, creative, or small studio",
      "Commercial or branded digital project with format innovation",
      "Emerging creators preferred (under 10 years professional directing)",
      "Development or production stage",
      "Rolling submissions accepted year-round",
    ],
    requiredMaterials: [
      "Creative concept deck",
      "Innovation / tech approach one-pager",
      "Showreel and case study of one prior commercial",
      "Budget and brand partner status (secured or speculative)",
      "Timeline to delivery",
    ],
    applicationTips: [
      "Define the innovation clearly — interactive, live commerce, AI-assisted craft, etc.",
      "Even speculative briefs need a believable brand problem",
      "Show you can deliver on a commercial calendar",
      "Submit anytime; stronger packs get faster decisions in this example model",
    ],
    applicationUrl: "https://example.com/grants/neon-market-prize",
    status: "rolling",
    example: true,
  },
  {
    id: "pe-ex-016",
    title: "Aurora Indigenous Storyways",
    funder: "Example First Light Media Circle",
    medium: ["Narrative Film", "Documentary", "Animation", "Immersive / XR"],
    stage: ["Development", "Production", "Distribution"],
    region: "North America",
    eligibility: ["Indigenous Storytelling", "Underrepresented Voices"],
    amount: "$15,000 – $90,000",
    deadline: "2026-12-01",
    summary:
      "Example multi-stage fund for Indigenous creators across narrative, doc, animation, and immersive forms in Canada & US.",
    fullDescription:
      "Aurora Indigenous Storyways is an example multi-stage fund for Indigenous creators in Canada and the United States working across narrative, documentary, animation, and immersive forms. Support spans development through distribution with cultural protocol guidance and peer mentorship. Nation-specific and urban Indigenous applicants are welcome. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Lead creative must be Indigenous (First Nations, Métis, Inuit, Native American, Alaska Native, or Native Hawaiian as applicable)",
      "Based in Canada or the United States",
      "Narrative, documentary, animation, or immersive / XR",
      "Development, production, or distribution stage",
      "Projects affirming sovereignty, language, or contemporary Indigenous life prioritized",
    ],
    requiredMaterials: [
      "Project materials appropriate to stage (treatment, script, cut, or distribution plan)",
      "Cultural protocol / community accountability statement",
      "Budget and timeline",
      "Team bios confirming Indigenous leadership",
      "Optional: language revitalization or community benefit plan",
    ],
    applicationTips: [
      "Center Indigenous creative authority in every role that matters",
      "Describe protocols without oversharing sacred knowledge",
      "Budget for community review time and ceremony where appropriate",
      "Distribution applicants should name Indigenous exhibition partners",
    ],
    applicationUrl: "https://example.com/grants/aurora-storyways",
    status: "open",
    example: true,
  },
  {
    id: "pe-ex-017",
    title: "Eurovision Animation Co-Production Bridge",
    funder: "Example Continental Toon Network",
    medium: ["Animation", "TV / Series"],
    stage: ["Development", "Production"],
    region: "Europe",
    eligibility: ["Open Eligibility", "Youth / Student"],
    amount: "€15,000 – €70,000",
    deadline: "2027-01-10",
    summary:
      "Example bridge funding for European animation features and kids/teen series seeking cross-border co-production partners.",
    fullDescription:
      "This example bridge fund helps European animation features and kids/teen series lock cross-border co-production partners. Awards support development bibles, pilots, and early production while teams pursue MEDIA-style or national co-pro deals. Youth and student-originated IPs with professional producers attached are encouraged. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "At least one European producer or studio attached",
      "Animation feature or TV / series (kids, teen, or adult)",
      "Seeking or in active co-production discussions across borders",
      "Open eligibility; youth / student-origin IP with pro producers welcome",
      "Development or early production",
    ],
    requiredMaterials: [
      "Series bible or feature treatment + art package",
      "Co-production status memo (territories, partners, soft money)",
      "Pilot episode or animatic if available",
      "Budget and financing plan by country",
      "Producer and director bios",
    ],
    applicationTips: [
      "Show co-pro math clearly — who brings what soft money",
      "Art package quality is decisive for animation juries",
      "Clarify target broadcaster / streamer windows per territory",
      "Student-origin IP should prove producer capacity for delivery",
    ],
    applicationUrl: "https://example.com/grants/eurovision-animation-bridge",
    status: "upcoming",
    example: true,
  },
  {
    id: "pe-ex-018",
    title: "Sahara Voices Documentary Lab",
    funder: "Example Maghreb Story Commons",
    medium: ["Documentary"],
    stage: ["Development", "Production"],
    region: "Africa / MENA",
    eligibility: ["Underrepresented Voices", "Women & Non-Binary Led"],
    amount: "$10,000 – $55,000",
    deadline: "2026-11-20",
    summary:
      "Example lab for Maghreb and Sahel documentary makers, with priority for women and non-binary directors.",
    fullDescription:
      "Sahara Voices is an example documentary lab for Maghreb and Sahel filmmakers. It combines a cash award with a hybrid residency (regional hub + remote mentorship) focused on authorship, ethics, and international festival pathways. Women and non-binary directors receive priority in selection. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Director based in Maghreb or Sahel regions (or diaspora with strong regional access)",
      "Documentary in development or production",
      "Women and non-binary directors prioritized",
      "Underrepresented voices and local-language storytelling encouraged",
      "Willingness to participate in lab sessions",
    ],
    requiredMaterials: [
      "Director's statement and project synopsis",
      "Character / access update and sample footage if any",
      "Budget and production plan",
      "CV and prior work",
      "Motivation letter for the lab cohort",
    ],
    applicationTips: [
      "Describe access with care and specificity",
      "Explain language choices and intended premiere strategies",
      "Show readiness to give and receive peer critique in a lab setting",
      "If diaspora-based, clarify on-the-ground collaborators",
    ],
    applicationUrl: "https://example.com/grants/sahara-voices-lab",
    status: "open",
    example: true,
  },
  {
    id: "pe-ex-019",
    title: "Orbit XR Festival Circuit Grant",
    funder: "Example Presence Festival Alliance",
    medium: ["Immersive / XR"],
    stage: ["Distribution", "Post-Production"],
    region: "Global / Remote",
    eligibility: ["Innovation / Tech", "Open Eligibility"],
    amount: "$4,000 – $22,000",
    deadline: "Rolling",
    summary:
      "Example rolling grant helping immersive works finish deliverables and tour major XR festival circuits worldwide.",
    fullDescription:
      "Orbit helps completed or nearly completed immersive works finish festival deliverables and tour the XR circuit. This example rolling grant covers localization, hardware kits, travel for creators, and technical finishing for venues. Open globally. Applications reviewed every six weeks. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Immersive / XR work near completion or completed",
      "Open eligibility worldwide",
      "Must have a festival submission or exhibition plan",
      "Innovation in form or interaction preferred but not required",
      "Rolling deadline",
    ],
    requiredMaterials: [
      "Build or venue-ready demo link / capture",
      "Technical requirements sheet (platform, space, runtime)",
      "Festival / exhibition target list with dates",
      "Budget for finishing, travel, and hardware",
      "Team contact for technical install",
    ],
    applicationTips: [
      "Include a crystal-clear tech rider — festivals reject vague installs",
      "Prioritize 3–5 realistic targets over a laundry list",
      "Budget creator travel only where presence meaningfully helps",
      "Localization (languages / subtitles in headset) is a strong differentiator",
    ],
    applicationUrl: "https://example.com/grants/orbit-xr-circuit",
    status: "rolling",
    example: true,
  },
  {
    id: "pe-ex-020",
    title: "River City Student Narrative Award",
    funder: "Example Campus Cinema Foundation",
    medium: ["Narrative Film"],
    stage: ["Production", "Post-Production"],
    region: "North America",
    eligibility: ["Youth / Student", "Emerging Creators"],
    amount: "$3,000 – $15,000",
    deadline: "2027-02-15",
    summary:
      "Example student and recent-graduate award for narrative shorts and thesis features in Canada and the US.",
    fullDescription:
      "River City supports students and recent graduates making narrative shorts and thesis-scale features in Canada and the US. This example award funds production or post, with festival coaching included for top recipients. School enrollment or graduation within 18 months is required. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Currently enrolled or graduated within the last 18 months from a North American film / media program",
      "Narrative fiction short or feature",
      "Production or post-production stage",
      "Youth / student status required; emerging creators welcome",
      "Faculty advisor letter required for enrolled students",
    ],
    requiredMaterials: [
      "Script and director's statement",
      "Proof of enrollment or graduation",
      "Budget and shooting / post plan",
      "Prior student work sample",
      "Faculty advisor letter (if enrolled)",
    ],
    applicationTips: [
      "Keep scope achievable for a student schedule and crew",
      "Show craft ambition within constraints — resourcefulness impresses",
      "If thesis feature, prove you have a path to finish",
      "Name key student department heads already attached",
    ],
    applicationUrl: "https://example.com/grants/river-city-student",
    status: "upcoming",
    example: true,
  },
  {
    id: "pe-ex-021",
    title: "Andes Hybrid Series Accelerator",
    funder: "Example Cordillera Stream Initiative",
    medium: ["TV / Series", "Digital / Streaming"],
    stage: ["Development", "Production"],
    region: "Latin America",
    eligibility: ["Emerging Creators", "Underrepresented Voices"],
    amount: "$18,000 – $65,000",
    deadline: "2026-12-20",
    summary:
      "Example accelerator for LatAm hybrid TV and digital series blending local stories with global platform ambitions.",
    fullDescription:
      "Andes Hybrid Series Accelerator is an example program for Latin American creators building hybrid TV and digital series — local stories with global platform ambitions. Funding covers writers' room weeks, pilot production, or season packaging. Emerging and underrepresented showrunners are prioritized. Mentors include regional and international showrunners. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Lead creator based in Latin America",
      "TV / series or digital series format",
      "Emerging creators and underrepresented voices prioritized",
      "Development or early production",
      "Spanish, Portuguese, Indigenous languages, or bilingual projects welcome",
    ],
    requiredMaterials: [
      "Series bible and pilot script or outline",
      "Tone reel or visual references",
      "Writers' room plan and diversity commitments",
      "Budget for development or pilot",
      "Showrunner / creator bio and prior work",
    ],
    applicationTips: [
      "Articulate why this story is local and why it travels",
      "Be clear about intended platform length and episode count",
      "If Indigenous language, plan subtitling and cultural consultants",
      "Show room leadership skills, not only solo writing talent",
    ],
    applicationUrl: "https://example.com/grants/andes-hybrid-accelerator",
    status: "upcoming",
    example: true,
  },
  {
    id: "pe-ex-022",
    title: "Lumen Equity Commercial Fellowship",
    funder: "Example Inclusive Brand Story Fund",
    medium: ["Commercial", "Narrative Film"],
    stage: ["Development", "Production"],
    region: "Global / Remote",
    eligibility: ["Women & Non-Binary Led", "Underrepresented Voices", "Emerging Creators"],
    amount: "$8,000 – $35,000",
    deadline: "2026-10-18",
    summary:
      "Example global fellowship pairing underrepresented commercial directors with brand mentors and production stipends.",
    fullDescription:
      "Lumen Equity is an example global fellowship pairing underrepresented commercial directors — especially women and non-binary creators — with brand mentors and production stipends. Fellows develop a speculative or commissioned spot and may apply funds toward a narrative short that builds their authorship reel. Remote mentorship is core to the program. This listing is fictional and for product demonstration only.",
    eligibilityBullets: [
      "Director from an underrepresented background; women and non-binary creators prioritized",
      "Open globally (remote fellowship)",
      "Focus on commercial craft and/or authorship narrative short",
      "Emerging career stage",
      "Willingness to join mentorship sessions with brand creative leads",
    ],
    requiredMaterials: [
      "Director reel (commercial and/or narrative)",
      "Statement of creative point of view",
      "Proposed fellowship project (spot concept or short outline)",
      "Budget for stipend use",
      "Two references (producer, agency, or faculty)",
    ],
    applicationTips: [
      "Show a clear authorship signature across commercial and personal work",
      "Explain how mentorship will change your next 12 months",
      "If proposing a narrative short, connect it to your commercial positioning",
      "Keep the reel ruthless — quality over volume",
    ],
    applicationUrl: "https://example.com/grants/lumen-equity-fellowship",
    status: "open",
    example: true,
  },
];
