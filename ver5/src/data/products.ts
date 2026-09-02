// Product and specification cards.
// productType distinguishes what kind of item this is.
// status tracks data quality: "placeholder" | "pending" | "verified"
// Add real manufacturer data only when confirmed from catalogs or direct supplier contact.

export type ProductType = "equipment" | "powder" | "system" | "solution";
export type ProductStatus = "placeholder" | "pending" | "verified";

export interface ProductSpec {
  id: string;
  productName: string;
  productType: ProductType;
  status: ProductStatus;
  technologyType: string;
  manufacturer: string;
  application: string;
  materials: string;
  keySpecifications: string[];
  catalogLabel: string;
  catalogHref: string;
  videoLabel: string;
  videoHref: string;
  contactHref: string;
  categorySlug: string;
  // Obsidian integration: link to source note when available
  obsidianNote?: string;
}

// Add real products here after collecting verified data from suppliers and exhibitions.
// Keep productType and status fields updated as data quality improves.
export const products: ProductSpec[] = [
  {
    id: "ysz-tbc-powder",
    productName: "YSZ Thermal Barrier Coating Powder",
    productType: "powder",
    status: "placeholder",
    technologyType: "APS / SPS feedstock",
    manufacturer: "Powder supplier to be confirmed",
    application: "Thermal barrier coating top coat via atmospheric plasma spray",
    materials: "Yttria-stabilized zirconia — 7–8 wt% Y2O3 (standard grade)",
    keySpecifications: [
      "Particle size: add verified distribution (D10/D50/D90)",
      "Phase: fully stabilized cubic / partially stabilized tetragonal",
      "Morphology: hollow spherical (HOSP) or dense agglomerated/sintered",
      "Apparent density: add supplier value",
      "Recommended process: APS — add verified parameters"
    ],
    catalogLabel: "Download datasheet",
    catalogHref: "/categories/thermal-barrier-coatings/#documents",
    videoLabel: "Process video",
    videoHref: "/categories/thermal-barrier-coatings/#videos",
    contactHref: "/#contact",
    categorySlug: "thermal-barrier-coatings"
  },
  {
    id: "mcraly-bond-coat",
    productName: "MCrAlY Bond Coat Powder",
    productType: "powder",
    status: "placeholder",
    technologyType: "HVOF / APS bond coat",
    manufacturer: "Alloy powder supplier to be confirmed",
    application: "Bond coat layer in TBC systems — oxidation protection and adhesion",
    materials: "CoNiCrAlY or NiCoCrAlY alloy powder",
    keySpecifications: [
      "Composition: add verified alloy grade (Co/Ni ratio, Cr, Al, Y content)",
      "Particle size: add supplier distribution",
      "Recommended process: HVOF or APS",
      "Surface roughness after spraying: add Ra target",
      "Oxidation resistance temperature range: add supplier data"
    ],
    catalogLabel: "Download datasheet",
    catalogHref: "/categories/thermal-barrier-coatings/#documents",
    videoLabel: "Process video",
    videoHref: "/categories/hvof-hvaf-solutions/#videos",
    contactHref: "/#contact",
    categorySlug: "hvof-hvaf-solutions"
  },
  {
    id: "hvof-carbide-powder",
    productName: "HVOF Carbide Powder",
    productType: "powder",
    status: "placeholder",
    technologyType: "HVOF / HVAF feedstock",
    manufacturer: "Powder supplier to be confirmed",
    application: "Dense wear-resistant coatings on industrial parts",
    materials: "WC-CoCr or WC-Co carbide powder",
    keySpecifications: [
      "Particle size: add supplier distribution",
      "WC content: add verified percentage",
      "Morphology: agglomerated and sintered",
      "Hardness of deposited coating: add target HV0.3",
      "Recommended process: HVOF or HVAF"
    ],
    catalogLabel: "Download datasheet",
    catalogHref: "/categories/hvof-hvaf-solutions/#documents",
    videoLabel: "Process video",
    videoHref: "/categories/hvof-hvaf-solutions/#videos",
    contactHref: "/#contact",
    categorySlug: "hvof-hvaf-solutions"
  },
  {
    id: "arc-spray-system",
    productName: "Wire Arc Spray System",
    productType: "equipment",
    status: "placeholder",
    technologyType: "Wire arc spraying",
    manufacturer: "Manufacturer to be confirmed",
    application: "Anti-corrosion and dimensional repair coatings",
    materials: "Zinc, aluminum, stainless steel, cored wires",
    keySpecifications: [
      "Wire diameter compatibility: add verified range",
      "Output current: add verified range (A)",
      "Deposition rate: add supplier value (kg/h)",
      "Air pressure: add operating requirement (bar)"
    ],
    catalogLabel: "View catalog",
    catalogHref: "/categories/arc-spraying-guns-and-systems/#documents",
    videoLabel: "Process video",
    videoHref: "/categories/arc-spraying-guns-and-systems/#videos",
    contactHref: "/#contact",
    categorySlug: "arc-spraying-guns-and-systems"
  },
  {
    id: "cold-spray-aluminum",
    productName: "Cold Spray Aluminum Powder",
    productType: "powder",
    status: "placeholder",
    technologyType: "Cold spray feedstock",
    manufacturer: "Manufacturer to be confirmed",
    application: "Metal repair and conductive coating applications",
    materials: "Aluminum powder or aluminum alloy powder",
    keySpecifications: [
      "Particle size: add verified range",
      "Purity or alloy grade: add supplier data",
      "Flowability: add measured value (Hall flowmeter)",
      "Critical velocity estimate: add from literature or supplier",
      "Recommended system: high-pressure or low-pressure cold spray"
    ],
    catalogLabel: "Download datasheet",
    catalogHref: "/categories/cold-spray/#documents",
    videoLabel: "Process video",
    videoHref: "/categories/cold-spray/#videos",
    contactHref: "/#contact",
    categorySlug: "cold-spray"
  }
];

// Helper: filter by type
export const getProductsByType = (type: ProductType) =>
  products.filter((p) => p.productType === type);

// Helper: filter by category slug
export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.categorySlug === slug);
