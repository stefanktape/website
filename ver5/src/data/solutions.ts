// Solution routes: structured examples connecting materials, processes, equipment, and outcomes.
// These are educational/planning routes, not finalized commercial proposals.
// Expand with real verified data from suppliers and exhibitions.

export interface SolutionStep {
  label: string;
  description: string;
}

export interface SolutionRoute {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  focusArea: string;
  steps: SolutionStep[];
  materials: string[];
  processes: string[];
  note: string;
  categorySlug: string;
}

export const solutions: SolutionRoute[] = [
  {
    id: "tbc-system",
    title: "Thermal Barrier Coating System",
    subtitle: "Bond coat → TGO → Ceramic top coat",
    summary:
      "A TBC system combines a metallic bond coat for oxidation resistance and adhesion, a thermally grown oxide (TGO) interface that develops during high-temperature service, and a ceramic top coat — typically YSZ — for thermal insulation. This route outlines the material and process logic for a standard APS TBC system.",
    focusArea: "Ceramic coatings / TBC",
    steps: [
      {
        label: "Substrate preparation",
        description:
          "Grit blast the metallic substrate (typically nickel superalloy or steel) to the required surface roughness (Ra 4–8 μm). Degrease and inspect before spraying."
      },
      {
        label: "Bond coat — HVOF or APS",
        description:
          "Spray MCrAlY alloy (CoNiCrAlY or NiCoCrAlY) by HVOF or APS to 100–150 μm. The bond coat provides oxidation protection and mechanical adhesion for the ceramic layer."
      },
      {
        label: "Ceramic top coat — APS",
        description:
          "Spray YSZ (7–8 wt% Y2O3) by atmospheric plasma spray to 200–400 μm. Process parameters control porosity (typically 5–15%), which influences thermal conductivity and strain tolerance."
      },
      {
        label: "Quality control",
        description:
          "Measure coating thickness (eddy current or cross-section), porosity (image analysis), bond strength (tensile adhesion test), and verify phase composition by XRD."
      },
      {
        label: "Service evaluation",
        description:
          "TGO layer thickness and TBC spallation life depend on operating temperature, thermal cycling frequency, and coating microstructure. Performance data is collected during furnace cycling or engine testing."
      }
    ],
    materials: ["YSZ powder (7–8 wt% Y2O3)", "CoNiCrAlY or NiCoCrAlY bond coat alloy"],
    processes: ["HVOF or APS for bond coat", "APS for ceramic top coat"],
    note:
      "This represents a standard APS TBC route. SPS and EB-PVD are alternatives for columnar microstructures. Actual parameters should be confirmed from supplier datasheets and process qualification data.",
    categorySlug: "thermal-barrier-coatings"
  },
  {
    id: "wear-protection",
    title: "Carbide Wear Protection",
    subtitle: "Substrate prep → HVOF carbide → Finishing",
    summary:
      "Dense WC-Co or WC-CoCr coatings deposited by HVOF or HVAF provide excellent wear resistance for industrial components such as pump plungers, rolls, shafts, and valves. This route outlines the logic for a standard carbide wear protection system.",
    focusArea: "Industrial wear protection",
    steps: [
      {
        label: "Substrate preparation",
        description:
          "Grit blast the substrate to the required cleanliness and roughness (Ra 4–6 μm). Pre-machining may be needed to allow for coating build-up."
      },
      {
        label: "Carbide coating — HVOF or HVAF",
        description:
          "Spray WC-CoCr or WC-Co powder by HVOF or HVAF to the required thickness (typically 150–400 μm). Particle velocity and temperature determine coating density and phase preservation."
      },
      {
        label: "Grinding and finishing",
        description:
          "Diamond or CBN grinding to achieve final dimension and surface finish. Carbide coatings are hard (typically 1000–1200 HV0.3) and require diamond tooling."
      },
      {
        label: "Quality verification",
        description:
          "Check hardness (Vickers), coating thickness, porosity (cross-section metallography), and surface roughness after finishing."
      }
    ],
    materials: ["WC-CoCr or WC-Co carbide powder", "Grit blast media (alumina or steel grit)"],
    processes: ["HVOF or HVAF"],
    note:
      "HVAF can offer lower particle temperature than HVOF, which may reduce WC decomposition and improve coating toughness. Material and process selection should be confirmed against the specific service environment and wear mechanism.",
    categorySlug: "hvof-hvaf-solutions"
  },
  {
    id: "feedstock-qualification",
    title: "Feedstock Powder Qualification",
    subtitle: "Specification → Testing → Supplier comparison",
    summary:
      "Selecting and qualifying a feedstock powder involves defining the coating requirements, specifying powder characteristics, evaluating candidate powders from suppliers, and comparing coating properties. This route outlines a structured qualification workflow for TBC and wear protection powders.",
    focusArea: "Feedstock materials",
    steps: [
      {
        label: "Define coating requirements",
        description:
          "Specify the target coating properties: porosity, density, phase composition, thickness, bond strength, and service conditions. These drive the powder specification."
      },
      {
        label: "Set powder specification",
        description:
          "Define particle size distribution (D10/D50/D90), morphology (spherical, HOSP, agglomerated), chemical purity, and flowability requirements for the target spray process."
      },
      {
        label: "Request samples from suppliers",
        description:
          "Contact powder producers and distributors with the specification. Request samples with full characterization data: SEM images, particle size analysis, chemistry certificate."
      },
      {
        label: "Test spray and characterize",
        description:
          "Spray test samples under defined conditions. Prepare cross-sections for porosity, hardness, and microstructure analysis. Compare results across candidate powders."
      },
      {
        label: "Supplier and cost evaluation",
        description:
          "Evaluate suppliers on technical fit, batch consistency, availability, packaging, lead time, and total delivered cost. Establish an approved supplier list for production."
      }
    ],
    materials: ["Candidate powders from qualified suppliers"],
    processes: ["APS, HVOF, or HVAF — depending on target coating"],
    note:
      "Powder qualification should be documented with full characterization data and process conditions. This is a preparatory framework — actual test data should be gathered through real trials with specific supplier powders.",
    categorySlug: "feedstock-materials"
  }
];
