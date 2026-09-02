export interface ResourceItem {
  title: string;
  description: string;
  type: "Article" | "Catalog" | "Exhibition note" | "Video" | "Case study";
}

// Add resource links later when documents, photos, and videos are ready to publish.
// This section will eventually connect to the Obsidian knowledge base export.
export const resources: ResourceItem[] = [
  {
    title: "Technical articles",
    description:
      "Short explainers on TBC systems, coating process selection, feedstock materials, and spraying equipment — building over time.",
    type: "Article"
  },
  {
    title: "Supplier catalogs",
    description:
      "PDF brochures, datasheets, material specifications, and technical sheets from verified powder and equipment suppliers.",
    type: "Catalog"
  },
  {
    title: "Exhibition notes",
    description:
      "Structured notes from booth visits, supplier meetings, product samples, and follow-up discussions at coating industry exhibitions.",
    type: "Exhibition note"
  },
  {
    title: "Videos",
    description:
      "Process demonstrations, equipment walkthroughs, and coating application examples. YouTube channel content will be linked here when published.",
    type: "Video"
  },
  {
    title: "Case studies",
    description:
      "Application examples with material selection, process parameters, and performance results — added as verified data is collected.",
    type: "Case study"
  }
];
