// ─────────────────────────────────────────────────────────────
// OFFERINGS
// Add a new reading by copying one block below and editing it.
// Remove one by deleting its block. The Offerings page updates
// automatically — no other file needs to change.
// ─────────────────────────────────────────────────────────────

export type Offering = {
  title: string;
  duration: string;
  price: string;
  description: string;
};

export const offerings: Offering[] = [
  {
    title: "15 Mins",
    duration: "a focused reading",
    price: "$25",
    description:
      "For clarity around one specific question, situation, or decision. A short and direct opportunity to see your situation from a different perspective.",
  },
  {
    title: "30 mins",
    duration: "a deeper look",
    price: "$50",
    description:
      "A little more room to explore. We'll focus on one area of your life, with space to uncover patterns or possibilities that may not have been obvious at first.",
  },
  {
    title: "60 mins",
    duration: "in-depth",
    price: "$80",
    description:
      "Time to slow down and really explore what's going on. We'll look at the bigger picture. There's space to go deeper and ask follow-up questions.",
  },
];
