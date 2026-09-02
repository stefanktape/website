// Insights: exhibition notes, technical observations, and content placeholders.
// This file is the future connection point between the Obsidian knowledge base and the website.
// When Obsidian export is set up, website-ready insights can be placed here directly.

export type InsightType = "exhibition" | "technical" | "supplier" | "youtube" | "research";

export interface Insight {
  id: string;
  title: string;
  type: InsightType;
  date?: string;       // ISO date string — add when content is ready
  summary: string;
  tags: string[];
  status: "placeholder" | "draft" | "published";
  // Obsidian: link to source note
  obsidianNote?: string;
  // Future: link to published article or video
  href?: string;
}

// Placeholder insights — replace with real content as it is created.
export const insights: Insight[] = [
  {
    id: "exhibition-notes-placeholder",
    title: "Exhibition notes",
    type: "exhibition",
    summary:
      "Structured notes from supplier booths, equipment demonstrations, and technical discussions at coating and spraying industry exhibitions.",
    tags: ["exhibition", "suppliers", "equipment"],
    status: "placeholder",
    obsidianNote: "Exhibitions/index.md"
  },
  {
    id: "tbc-process-comparison-placeholder",
    title: "TBC process comparison: APS vs SPS vs EB-PVD",
    type: "technical",
    summary:
      "A structured comparison of thermal barrier coating processes — microstructure, thermal cycling performance, equipment requirements, and typical application contexts.",
    tags: ["TBC", "APS", "SPS", "EB-PVD", "ceramic coatings"],
    status: "placeholder",
    obsidianNote: "Processes/TBC/process-comparison.md"
  },
  {
    id: "feedstock-powder-sourcing-placeholder",
    title: "YSZ and MCrAlY powder sourcing in China",
    type: "supplier",
    summary:
      "Notes and observations on ceramic and alloy powder suppliers based in China — availability, typical grades, characterization data, and contact notes.",
    tags: ["feedstock", "YSZ", "MCrAlY", "China", "suppliers"],
    status: "placeholder",
    obsidianNote: "Suppliers/Powders/china-sources.md"
  },
  {
    id: "youtube-intro-placeholder",
    title: "YouTube: Coating & Spraying Solutions — channel coming soon",
    type: "youtube",
    summary:
      "A planned YouTube channel covering coating technologies, thermal spraying processes, feedstock materials, supplier research, and exhibition visits. Content will be connected to this site when published.",
    tags: ["YouTube", "content", "thermal spraying", "TBC"],
    status: "placeholder"
  },
  {
    id: "tbc-phd-research-placeholder",
    title: "PhD research direction: ceramic coatings and TBC systems",
    type: "research",
    summary:
      "Background and context on the PhD research focus in ceramic coatings, thermal barrier coatings, and suspension-based spray processes — connecting academic work to the supplier and industrial knowledge being developed through this platform.",
    tags: ["PhD", "research", "TBC", "ceramic coatings", "SPS"],
    status: "placeholder",
    obsidianNote: "Research/PhD/overview.md"
  }
];

// Helper: get published insights (placeholder filter removed when real content is added)
export const publishedInsights = insights.filter((i) => i.status === "published");

// Helper: get insights by type
export const getInsightsByType = (type: InsightType) =>
  insights.filter((i) => i.type === type);
