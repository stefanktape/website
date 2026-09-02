// Thermal spray and related coating process data.
// Keep descriptions factual and process-focused.
// Expand with real parameters as they are collected from suppliers and literature.

export interface Technology {
  id: string;
  name: string;
  abbreviation: string;
  category: "thermal-spray" | "solid-state" | "advanced";
  description: string;
  coatingDensity: string;
  typicalApplications: string[];
  feedstockForm: string[];
  processNote: string;
  categorySlug: string;
}

export const technologies: Technology[] = [
  {
    id: "aps",
    name: "Atmospheric Plasma Spraying",
    abbreviation: "APS",
    category: "thermal-spray",
    description:
      "High-temperature plasma jet melts ceramic and metallic powders and deposits them onto a prepared substrate. APS is the primary process for YSZ thermal barrier coating top coats, producing a characteristic lamellar microstructure with controlled porosity.",
    coatingDensity: "85–95% (controlled porosity for TBC)",
    typicalApplications: [
      "YSZ thermal barrier coating top coats",
      "Alumina and chromia ceramic coatings",
      "MCrAlY bond coat (alternative to HVOF)",
      "Functional and specialty ceramic coatings"
    ],
    feedstockForm: ["Powder (ceramic, metallic)", "Suspension (SPS variant)"],
    processNote:
      "Plasma gas composition (Ar, H2, N2) and torch power strongly influence particle temperature, velocity, and final coating microstructure.",
    categorySlug: "plasma-spraying"
  },
  {
    id: "hvof",
    name: "High-Velocity Oxygen Fuel",
    abbreviation: "HVOF",
    category: "thermal-spray",
    description:
      "Combustion of fuel and oxygen produces a high-velocity jet that accelerates particles to produce dense, well-bonded coatings. HVOF is widely used for carbide wear coatings and MCrAlY bond coats for TBC systems where low porosity and minimal phase decomposition are required.",
    coatingDensity: "95–99% (dense, low-porosity)",
    typicalApplications: [
      "WC-Co and WC-CoCr wear-resistant coatings",
      "MCrAlY bond coat for TBC systems",
      "Corrosion-resistant alloy coatings",
      "Pump and valve wear protection"
    ],
    feedstockForm: ["Powder (carbide, metallic alloy)"],
    processNote:
      "Particle velocity (600–900 m/s) is the key driver of coating density. Fuel type (kerosene, hydrogen, propylene) affects flame temperature and process economics.",
    categorySlug: "hvof-hvaf-solutions"
  },
  {
    id: "hvaf",
    name: "High-Velocity Air Fuel",
    abbreviation: "HVAF",
    category: "thermal-spray",
    description:
      "HVAF replaces oxygen with compressed air in the combustion process, producing particle velocities comparable to HVOF but at lower particle temperatures. This is particularly useful for carbide powders where excessive thermal exposure can cause WC decomposition.",
    coatingDensity: "96–99% (comparable to or exceeding HVOF)",
    typicalApplications: [
      "WC-Co and WC-CoCr wear coatings with minimal decomposition",
      "MCrAlY bond coat alternative to HVOF",
      "Carbide coatings where WC phase preservation is critical"
    ],
    feedstockForm: ["Powder (carbide, metallic alloy)"],
    processNote:
      "Lower particle temperature compared to HVOF can preserve carbide phase integrity and improve coating toughness. Operating costs are generally lower due to replacing O2 with compressed air.",
    categorySlug: "hvof-hvaf-solutions"
  },
  {
    id: "cold-spray",
    name: "Cold Spray",
    abbreviation: "CS",
    category: "solid-state",
    description:
      "Particles are accelerated to very high velocities (600–1200 m/s) using a supersonic gas jet while remaining below their melting temperature. Bonding occurs through plastic deformation on impact, preserving the original material phase and enabling deposition of temperature-sensitive metals.",
    coatingDensity: "95–99% (dense, solid-state bonding)",
    typicalApplications: [
      "Metal repair and dimensional restoration",
      "Aluminum and copper conductive coatings",
      "Corrosion protection of aluminum structures",
      "Research and development for sensitive materials"
    ],
    feedstockForm: ["Powder (metallic — Al, Cu, Ti, Ni)"],
    processNote:
      "Critical velocity determines successful deposition. Gas type (N2 or He), pressure, and temperature are the primary process variables. Helium gives higher velocities but at higher operating cost.",
    categorySlug: "cold-spray"
  },
  {
    id: "arc-spray",
    name: "Wire Arc Spraying",
    abbreviation: "AS",
    category: "thermal-spray",
    description:
      "Two conductive wires are melted at an electric arc and atomized by compressed air toward the substrate. Wire arc spray is valued for high deposition rates, low equipment cost, and suitability for large-area anti-corrosion coatings on steel structures.",
    coatingDensity: "85–95% (higher porosity than HVOF)",
    typicalApplications: [
      "Zinc and aluminum anti-corrosion coatings on steel",
      "Machine part rebuilding and dimensional repair",
      "Large surface protective coatings",
      "On-site field coating applications"
    ],
    feedstockForm: ["Wire (solid and cored)"],
    processNote:
      "High deposition rate (up to 15+ kg/h for aluminum) and portability make arc spray practical for large infrastructure and field coating work.",
    categorySlug: "arc-spraying-guns-and-systems"
  },
  {
    id: "sps",
    name: "Suspension Plasma Spraying",
    abbreviation: "SPS",
    category: "advanced",
    description:
      "SPS injects a liquid suspension of sub-micron ceramic particles into the plasma jet instead of conventional powder. This enables deposition of nanostructured and columnar TBC microstructures that are not achievable with standard APS. SPS is an active research area for next-generation TBC systems.",
    coatingDensity: "Variable — columnar or dense depending on parameters",
    typicalApplications: [
      "Nanostructured YSZ thermal barrier coatings",
      "Columnar TBC microstructures for improved thermal cycling",
      "Advanced ceramic coatings for research and development",
      "Multi-layer functional coatings with fine microstructure control"
    ],
    feedstockForm: ["Liquid suspension (sub-micron ceramic particles)"],
    processNote:
      "Suspension preparation (particle size, solid loading, solvent, dispersant) and injection method are critical variables. SPS can produce columnar microstructures similar to EB-PVD but with lower equipment cost.",
    categorySlug: "plasma-spraying"
  },
  {
    id: "flame-spray",
    name: "Flame Spraying",
    abbreviation: "FS",
    category: "thermal-spray",
    description:
      "Combustion of fuel gas (acetylene, propane) melts powder, wire, or rod feedstock and propels particles toward the substrate. Flame spraying is one of the oldest thermal spray processes, valued for simplicity and low equipment cost in workshop and field applications.",
    coatingDensity: "80–90% (higher porosity)",
    typicalApplications: [
      "Self-fluxing alloy coatings with post-fusion",
      "General anti-corrosion protective coatings",
      "Repair coatings in workshop environments",
      "Low to medium wear protection"
    ],
    feedstockForm: ["Powder", "Wire", "Rod"],
    processNote:
      "Self-fluxing NiCrBSi alloys are a key application — the coating is sprayed and then fused with a torch to produce a dense, metallurgically bonded layer. Process simplicity comes with lower coating density compared to HVOF or APS.",
    categorySlug: "flame-spraying"
  }
];
