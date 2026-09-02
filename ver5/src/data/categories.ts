export interface Category {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  applications: string[];
  materials: string[];
  equipmentExamples: string[];
  keyParameters: string[];
  suppliers: string;
  documents: string;
  videos: string;
  exhibitionNotes: string;
  relatedProductIds: string[];
}

// Priority order reflects the project's focus:
// TBC → Thermal Spraying → Feedstock Materials → Equipment → HVOF/HVAF → Plasma → Cold Spray → Arc → Flame → Other
export const categories: Category[] = [
  {
    slug: "thermal-barrier-coatings",
    title: "Thermal barrier coatings",
    summary:
      "Ceramic TBC systems for high-temperature protection in aerospace, energy, and industrial applications.",
    overview:
      "Thermal barrier coatings (TBC) are multilayer ceramic coating systems designed to insulate metallic components from extreme heat. A typical TBC system consists of a metallic bond coat for oxidation protection and adhesion, a thermally grown oxide (TGO) layer that forms during service, and a ceramic top coat — commonly yttria-stabilized zirconia (YSZ) — for thermal insulation. This page is prepared for future TBC system data, supplier comparisons, and process parameter collections gathered from exhibitions and academic sources.",
    applications: [
      "Gas turbine blade and vane protection",
      "Combustion chamber liner coatings",
      "Industrial turbine and power generation components",
      "Diesel engine components requiring thermal management",
      "Aerospace and aero-engine applications"
    ],
    materials: [
      "Yttria-stabilized zirconia (YSZ) top coat powders",
      "MCrAlY bond coat alloys",
      "Lanthanum zirconate and next-generation TBC ceramics",
      "Alumina-forming bond coat variants",
      "Suspension and solution feedstocks for advanced TBC"
    ],
    equipmentExamples: [
      "Atmospheric plasma spray (APS) torches for ceramic top coat",
      "HVOF systems for bond coat application",
      "EB-PVD equipment for columnar microstructure TBC",
      "Suspension plasma spray (SPS) systems",
      "Post-coat inspection and testing tools"
    ],
    keyParameters: [
      "Top coat thickness and phase composition",
      "Bond coat composition and roughness (Ra)",
      "TGO thickness and growth rate in service",
      "Thermal conductivity of the ceramic layer",
      "Adhesion strength (MPa)",
      "Thermal cycling performance"
    ],
    suppliers: "Add TBC powder suppliers, bond coat alloy producers, and coating service notes after exhibition research.",
    documents: "Add TBC system datasheets, powder specifications, and academic references here.",
    videos: "Add APS and HVOF coating process videos, microstructure images, and supplier demos here.",
    exhibitionNotes: "Add exhibition notes, TBC supplier contacts, and sample observations here.",
    relatedProductIds: ["ysz-tbc-powder", "mcraly-bond-coat"]
  },
  {
    slug: "thermal-spraying",
    title: "Thermal spraying",
    summary:
      "Overview of thermal spraying processes: APS, HVOF, HVAF, cold spray, arc spray, and flame spray.",
    overview:
      "Thermal spraying is a family of surface coating processes where feedstock material is heated, accelerated, and deposited onto a prepared substrate to form a functional coating. Process selection depends on coating requirements such as density, bond strength, phase preservation, and feedstock type. This page serves as the general hub for process comparison and supplier information across thermal spraying methods.",
    applications: [
      "Wear-resistant coatings for shafts, rolls, and industrial parts",
      "Thermal barrier coatings for high-temperature components",
      "Corrosion protection for exposed metal structures",
      "Dimensional restoration and repair coatings",
      "Functional ceramic and conductive coatings"
    ],
    materials: [
      "Ceramic powders (YSZ, alumina, chromia)",
      "Carbide powders (WC-Co, WC-CoCr, Cr3C2-NiCr)",
      "Metallic alloy powders (MCrAlY, NiCr, NiAl)",
      "Wire feedstock for arc and flame spray",
      "Suspension and slurry feedstocks for advanced processes"
    ],
    equipmentExamples: [
      "Plasma torches (atmospheric and vacuum)",
      "HVOF and HVAF guns",
      "Cold spray systems",
      "Wire arc spray guns",
      "Powder feeders, manipulators, and process controls"
    ],
    keyParameters: [
      "Particle temperature and velocity at impact",
      "Coating porosity and density",
      "Bond strength to substrate",
      "Deposition efficiency",
      "Substrate preparation (surface roughness, cleanliness)"
    ],
    suppliers: "Add thermal spray equipment and material supplier notes after exhibition research.",
    documents: "Add process comparison charts, supplier brochures, and technical references here.",
    videos: "Add process demonstrations and comparative spraying videos here.",
    exhibitionNotes: "Add field notes, booth summaries, and follow-up tasks here.",
    relatedProductIds: ["ysz-tbc-powder", "mcraly-bond-coat", "hvof-carbide-powder", "arc-spray-system"]
  },
  {
    slug: "feedstock-materials",
    title: "Feedstock materials",
    summary:
      "Ceramic, metallic, and carbide powder materials for thermal spray processes — including YSZ, MCrAlY, and suspension feedstocks.",
    overview:
      "Feedstock material selection directly determines coating microstructure, phase composition, deposition efficiency, and final service performance. This section covers ceramic powders for TBC applications, bond coat alloys, carbide powders for wear protection, and emerging suspension-based feedstocks. Powder characterization — including particle size distribution, morphology, flowability, and chemistry — is a key part of process qualification.",
    applications: [
      "YSZ top coat powders for TBC systems",
      "MCrAlY and NiAl bond coat powders",
      "WC-Co and WC-CoCr wear-resistant powders",
      "Alumina and chromia ceramic powders",
      "Suspension and slurry feedstocks for SPS processes"
    ],
    materials: [
      "Yttria-stabilized zirconia (YSZ) — 7-8 wt% Y2O3 standard grades",
      "Lanthanum zirconate and multi-component TBC ceramics",
      "CoNiCrAlY, NiCoCrAlY, and NiAl bond coat alloys",
      "WC-Co (12%), WC-CoCr, and Cr3C2-NiCr carbide grades",
      "Alpha-alumina, chromia, and titania powders"
    ],
    equipmentExamples: [
      "Powder feeders and carrier gas systems",
      "Powder sieving and classification equipment",
      "Laser diffraction particle size analyzers",
      "SEM and flow testing for morphology and flowability",
      "Storage and conditioning systems"
    ],
    keyParameters: [
      "Particle size distribution (D10, D50, D90)",
      "Morphology: spherical, irregular, hollow",
      "Chemical purity and phase composition",
      "Apparent density and flowability (Hall flowmeter)",
      "Recommended spray process compatibility"
    ],
    suppliers: "Add ceramic, carbide, and alloy powder supplier profiles after exhibition research.",
    documents: "Add material datasheets, SDS documents, and powder characterization reports here.",
    videos: "Add powder handling, SEM images, and process demonstration videos here.",
    exhibitionNotes: "Add expo powder samples, quotes, supplier contacts, and comparison notes here.",
    relatedProductIds: ["ysz-tbc-powder", "mcraly-bond-coat", "hvof-carbide-powder", "cold-spray-aluminum"]
  },
  {
    slug: "spraying-equipment",
    title: "Spraying equipment",
    summary:
      "Thermal spray systems, guns, feeders, manipulators, booths, and supporting equipment for industrial coating operations.",
    overview:
      "This category covers complete spraying systems and supporting equipment for industrial coating operations — from manual spray guns and powder feeders to robotic manipulators, spray booths, and process monitoring systems. Equipment selection depends on process type, coating requirements, production volume, and budget.",
    applications: [
      "Manual and automated APS, HVOF, and arc spray operations",
      "Repair workshops and reclamation coating cells",
      "Process development and laboratory coating systems",
      "Industrial production coating lines"
    ],
    materials: [
      "Powder feedstock (ceramic, carbide, metallic)",
      "Wire feedstock for arc and flame spray",
      "Combustion gases, plasma gases, and compressed air",
      "Masking, grit blast media, and auxiliary consumables"
    ],
    equipmentExamples: [
      "Plasma torch packages (F4, 9MB, Axial III)",
      "HVOF and HVAF gun systems",
      "Wire arc spray gun sets",
      "Robotic positioners and turntable systems",
      "Spray booths, filters, and dust extraction units"
    ],
    keyParameters: [
      "Process type and torch/gun power rating",
      "Throughput and duty cycle",
      "Automation compatibility",
      "Utilities: gas supply, cooling water, electrical requirements"
    ],
    suppliers: "Add equipment supplier shortlists and comparison notes after exhibition research.",
    documents: "Add equipment manuals, layout drawings, brochures, and quotations here.",
    videos: "Add equipment operation videos, factory tour clips, and installation demos here.",
    exhibitionNotes: "Add booth visit notes, pricing references, and follow-up questions here.",
    relatedProductIds: ["arc-spray-system"]
  },
  {
    slug: "hvof-hvaf-solutions",
    title: "HVOF / HVAF solutions",
    summary:
      "High-velocity coating systems for dense carbide, alloy, and bond coat applications.",
    overview:
      "HVOF (High-Velocity Oxygen Fuel) and HVAF (High-Velocity Air Fuel) processes accelerate particles at high velocity to produce dense, low-porosity coatings. HVOF is widely used for carbide wear coatings and metallic bond coats for TBC systems. HVAF operates at lower particle temperatures with comparable velocity, which can improve coating density and reduce phase decomposition in sensitive materials.",
    applications: [
      "WC-Co and WC-CoCr wear-resistant coatings",
      "MCrAlY bond coat deposition for TBC systems",
      "Pump and valve component protection",
      "Oil and gas wear and corrosion protection",
      "Rolls, tooling, and precision industrial parts"
    ],
    materials: [
      "WC-CoCr and WC-Co carbide powders",
      "Cr3C2-NiCr for elevated temperature wear",
      "CoNiCrAlY and NiCoCrAlY bond coat alloys",
      "Nickel-based alloy powders for corrosion applications"
    ],
    equipmentExamples: [
      "HVOF guns (JP-5000, Diamond Jet, Top Gun)",
      "HVAF systems (Uniquecoat, Kermetico)",
      "Fuel and oxygen delivery and control systems",
      "Powder feeders with high accuracy metering",
      "Cooling and exhaust management systems"
    ],
    keyParameters: [
      "Particle velocity (typically 600–900 m/s for HVOF)",
      "Fuel type (kerosene, hydrogen, propane, propylene)",
      "Powder feed rate and carrier gas flow",
      "Coating porosity (target <1% for carbide coatings)",
      "Coating hardness (HV0.3)"
    ],
    suppliers: "Add HVOF/HVAF equipment and powder supplier comparisons after research.",
    documents: "Add gun datasheets, powder compatibility guides, and case studies here.",
    videos: "Add HVOF spraying demonstrations and coating cross-section images here.",
    exhibitionNotes: "Add expo notes, sample photos, and supplier follow-up contacts here.",
    relatedProductIds: ["hvof-carbide-powder", "mcraly-bond-coat"]
  },
  {
    slug: "plasma-spraying",
    title: "Plasma spraying",
    summary:
      "High-temperature plasma spray processes for ceramic, TBC, and specialty functional coatings.",
    overview:
      "Plasma spraying uses a high-energy plasma jet to melt and accelerate feedstock particles onto a substrate. Atmospheric plasma spraying (APS) is the primary process for ceramic top coats in TBC systems, producing a characteristic lamellar microstructure with controlled porosity. Suspension plasma spraying (SPS) is an emerging process for nanostructured and columnar TBC microstructures.",
    applications: [
      "YSZ thermal barrier coating top coats",
      "Alumina and chromia wear and electrical insulation coatings",
      "Biomedical hydroxyapatite coatings",
      "High-temperature component protection",
      "Advanced TBC via suspension plasma spraying (SPS)"
    ],
    materials: [
      "Yttria-stabilized zirconia (YSZ) powders",
      "Lanthanum zirconate and multi-component TBC ceramics",
      "Alpha-alumina and chromia powders",
      "Hydroxyapatite and biomedical coating powders",
      "YSZ and ceramic suspensions for SPS"
    ],
    equipmentExamples: [
      "APS torches (F4, 9MB, SG-100, Axial III)",
      "Plasma gas control systems (Ar, H2, N2, He)",
      "Powder feeders for ceramic powders",
      "Suspension feeders for SPS",
      "Cooling, masking, and post-coat inspection tools"
    ],
    keyParameters: [
      "Plasma gas composition and total flow",
      "Torch net power (kW)",
      "Spray distance and gun traverse speed",
      "Powder feed rate and injection position",
      "Coating thickness and porosity control"
    ],
    suppliers: "Add APS and SPS torch manufacturer and integrator notes here.",
    documents: "Add torch brochures, coating application notes, and SPS process papers here.",
    videos: "Add plasma spraying demonstrations and SPS process videos here.",
    exhibitionNotes: "Add exhibition notes, sample references, and academic contact notes here.",
    relatedProductIds: ["ysz-tbc-powder"]
  },
  {
    slug: "cold-spray",
    title: "Cold spray",
    summary:
      "Solid-state high-velocity deposition for metal repair, conductive coatings, and sensitive materials.",
    overview:
      "Cold spray deposits particles below their melting point by accelerating them to very high velocities (600–1200 m/s) using a supersonic gas jet. Bonding occurs through plastic deformation upon impact rather than melting, preserving the original material phase and composition. Cold spray is particularly relevant for repair applications, corrosion-sensitive metals, and materials where thermal degradation must be avoided.",
    applications: [
      "Metal repair and dimensional restoration of high-value parts",
      "Conductive metallic coatings",
      "Corrosion barrier coatings on aluminum and titanium structures",
      "Copper and silver coatings for electrical applications",
      "Research and process development for sensitive materials"
    ],
    materials: [
      "Aluminum and aluminum alloy powders",
      "Copper powders for conductive applications",
      "Titanium and Ti-6Al-4V powders",
      "Nickel and stainless steel powders",
      "MCrAlY for cold spray bond coat research"
    ],
    equipmentExamples: [
      "High-pressure cold spray systems (20–50 bar)",
      "Low-pressure cold spray systems (5–10 bar)",
      "Gas heaters and supersonic nozzles",
      "High-pressure gas delivery and control systems",
      "Powder feeders adapted for high-velocity systems"
    ],
    keyParameters: [
      "Gas type (N2 or He), pressure, and temperature",
      "Particle velocity (600–1200 m/s)",
      "Deposition efficiency by material",
      "Critical velocity for adhesion",
      "Coating density and hardness"
    ],
    suppliers: "Add cold spray system manufacturers and powder suppliers here.",
    documents: "Add process notes, nozzle specifications, and application case studies here.",
    videos: "Add repair demonstrations and cold spray process clips here.",
    exhibitionNotes: "Add expo questions about gas cost, system maintenance, and market availability here.",
    relatedProductIds: ["cold-spray-aluminum"]
  },
  {
    slug: "arc-spraying-guns-and-systems",
    title: "Arc spraying",
    summary:
      "Wire arc spray systems for anti-corrosion, large-area rebuilding, and high-deposition coating work.",
    overview:
      "Arc spraying melts two conductive wires at an electric arc and atomizes the molten material toward the substrate using compressed air. It is often chosen for large-area corrosion protection, zinc and aluminum anti-corrosion coatings on steel structures, and machine part rebuilding where high deposition rates are an advantage.",
    applications: [
      "Steel structure corrosion protection (Zn, Al coatings)",
      "Machine part rebuilding and dimensional restoration",
      "Large surface anti-wear protective coatings",
      "On-site repair coating where portability is needed"
    ],
    materials: [
      "Zinc and aluminum wires for anti-corrosion",
      "Stainless steel wires",
      "Cored wires for specialty compositions",
      "Special alloy wires for wear-resistant applications"
    ],
    equipmentExamples: [
      "Arc spray guns (manual and robotic)",
      "Wire feeders",
      "Power supply units (300–500 A typical)",
      "Compressed air delivery and control"
    ],
    keyParameters: [
      "Wire diameter (standard 1.6 mm, 2.0 mm)",
      "Deposition rate (kg/h)",
      "Arc current and voltage",
      "Air pressure and consumption (m3/h)"
    ],
    suppliers: "Add arc spray gun and system manufacturer profiles here.",
    documents: "Add gun catalogs, wire compatibility charts, and application guides here.",
    videos: "Add arc spray demonstrations and maintenance procedure videos here.",
    exhibitionNotes: "Add expo observations, pricing references, and contact notes here.",
    relatedProductIds: ["arc-spray-system"]
  },
  {
    slug: "flame-spraying",
    title: "Flame spraying",
    summary:
      "Combustion-based spraying for powder or wire coatings in practical workshop and field applications.",
    overview:
      "Flame spraying is one of the earliest thermal spray processes and remains relevant for applications where equipment simplicity, low setup cost, and portability are important. Self-fluxing alloy powders that are fused after spraying are a common application of powder flame spraying.",
    applications: [
      "General anti-corrosion protective coatings",
      "Repair coatings in workshop environments",
      "Low to medium duty wear protection",
      "Self-fluxing alloy coatings with post-fusion"
    ],
    materials: [
      "Self-fluxing alloy powders (NiCrBSi grades)",
      "Metal and alloy powders",
      "Wire feedstock for zinc and aluminum coatings",
      "Ceramic rods for selected applications"
    ],
    equipmentExamples: [
      "Powder flame spray guns",
      "Wire flame spray guns",
      "Gas regulators and hose assemblies",
      "Manual spraying accessories and masking materials"
    ],
    keyParameters: [
      "Fuel gas type (acetylene, propane, hydrogen)",
      "Feedstock format: powder, wire, or rod",
      "Spray distance and angle",
      "Post-fusion requirement for self-fluxing alloys"
    ],
    suppliers: "Add flame spray gun and consumable suppliers here.",
    documents: "Add operating manuals and consumable catalogs here.",
    videos: "Add workshop demonstrations and fusion process videos here.",
    exhibitionNotes: "Add supplier notes and pricing observations here.",
    relatedProductIds: []
  },
  {
    slug: "agricultural-spraying-technologies",
    title: "Agricultural spraying",
    summary:
      "Spraying systems and components for agricultural and field application contexts.",
    overview:
      "This section is reserved for agricultural spraying technologies and may later include nozzles, pumps, boom systems, atomization quality, and supplier comparisons relevant to the project scope.",
    applications: [
      "Crop protection spraying",
      "Greenhouse and orchard spraying",
      "Drone and precision spraying",
      "Pump, nozzle, and control system selection"
    ],
    materials: [
      "Liquid formulations",
      "Nozzle wear materials",
      "Pump seals and filters",
      "Cleaning and maintenance consumables"
    ],
    equipmentExamples: [
      "Nozzles and nozzle bodies",
      "Pumps and pressure controls",
      "Spray booms",
      "Drone spraying systems"
    ],
    keyParameters: [
      "Droplet size distribution",
      "Flow rate",
      "Pressure range",
      "Coverage uniformity"
    ],
    suppliers: "Add agricultural spraying manufacturers and distributors here.",
    documents: "Add nozzle charts, pump catalogs, and test reports here.",
    videos: "Add field demonstration and equipment operation clips here.",
    exhibitionNotes: "Add exhibition notes if this category becomes relevant to the project scope.",
    relatedProductIds: []
  },
  {
    slug: "other-industrial-spraying",
    title: "Other industrial spraying",
    summary:
      "A flexible category for adjacent industrial spraying processes not yet covered in the main groups.",
    overview:
      "Use this page for emerging or adjacent spraying applications gathered during supplier research — including liquid coating, industrial atomization, surface treatment, and specialized spray equipment that does not fit the current thermal spray categories.",
    applications: [
      "Liquid coating lines",
      "Industrial atomization systems",
      "Surface treatment and cleaning",
      "Specialized spraying and dosing processes"
    ],
    materials: [
      "Liquid coatings and lacquers",
      "Binders and solvents",
      "Abrasive or treatment media",
      "Specialty consumables"
    ],
    equipmentExamples: [
      "Spray nozzles",
      "Pumps and control systems",
      "Spray booths",
      "Automation accessories"
    ],
    keyParameters: [
      "Flow rate",
      "Atomization pattern",
      "Material compatibility",
      "Maintenance requirements"
    ],
    suppliers: "Add supplier notes as categories become clearer.",
    documents: "Add catalogs and application notes here.",
    videos: "Add process demonstrations here.",
    exhibitionNotes: "Add loose expo notes before assigning them to a more precise category.",
    relatedProductIds: []
  }
];

// First 6 featured on homepage — TBC and core process/material categories first.
export const featuredCategories = categories.slice(0, 6);
