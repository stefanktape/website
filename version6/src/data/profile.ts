import type { Locale } from "../i18n/config";

export const profile = {
  en: {
    education: [
      { period: "2024–2027", place: "Shanghai Jiao Tong University", role: "Master's in Materials Science and Engineering", detail: "Shanghai Key Laboratory of Advanced High-temperature Materials and Precision Forming" },
      { period: "2019–2024", place: "Novosibirsk State University", role: "Fundamental and Applied Chemistry / Organic Chemistry", detail: "State scholarship; best graduation defence" }
    ],
    experience: [
      { period: "2024.07–2024.08", place: "Novosibirsk Semiconductor Devices Plant “Vostok”", role: "Process Engineer", detail: "Process control and optimization work in semiconductor-device manufacturing." },
      { period: "2021.01–2024.07", place: "N. N. Vorozhtzov Institute of Organic Chemistry SB RAS", role: "Laboratory Assistant", detail: "Organic synthesis and characterization work." },
      { period: "2022", place: "Voevodsky Institute of Chemical Kinetics and Combustion", role: "Research Intern", detail: "" },
      { period: "2021", place: "Boreskov Institute of Catalysis SB RAS", role: "Research Intern", detail: "" }
    ],
    publication: "Stepan B. Kalashnikov, Andrey S. Vinogradov, et al. “Synthesis of 5-methyl-4-polyfluoroaryl-1,3-thiazol-2-amines.” Mendeleev Communications 34(2), 2024, 277–278.",
    tools: ["LAMMPS", "VASP", "Gaussian", "CATIA V5", "SolidWorks", "Python", "NumPy", "Matplotlib"],
    languages: ["Russian", "English", "Chinese"]
  },
  zh: {
    education: [
      { period: "2024–2027", place: "上海交通大学", role: "材料科学与工程硕士", detail: "上海市先进高温材料及其精密成形重点实验室" },
      { period: "2019–2024", place: "新西伯利亚国立大学", role: "基础与应用化学 / 有机化学", detail: "国家奖学金；优秀毕业答辩" }
    ],
    experience: [
      { period: "2024.07–2024.08", place: "新西伯利亚半导体器件厂 “Vostok”", role: "工艺工程师", detail: "参与半导体器件制造中的工艺控制与优化。" },
      { period: "2021.01–2024.07", place: "俄罗斯科学院西伯利亚分院 N. N. Vorozhtzov 有机化学研究所", role: "实验室助理", detail: "有机合成与表征工作。" },
      { period: "2022", place: "Voevodsky 化学动力学与燃烧研究所", role: "研究实习生", detail: "" },
      { period: "2021", place: "Boreskov 催化研究所", role: "研究实习生", detail: "" }
    ],
    publication: "Stepan B. Kalashnikov、Andrey S. Vinogradov 等，《Synthesis of 5-methyl-4-polyfluoroaryl-1,3-thiazol-2-amines》，Mendeleev Communications 34(2)，2024，277–278。",
    tools: ["LAMMPS", "VASP", "Gaussian", "CATIA V5", "SolidWorks", "Python", "NumPy", "Matplotlib"],
    languages: ["俄语", "英语", "中文"]
  }
} satisfies Record<Locale, object>;
