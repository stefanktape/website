export interface NavLink { label: string; href: string; }
export interface NavGroup { groupLabel: string; links: NavLink[]; }
export interface NavItem { label: string; href?: string; dropdown?: NavGroup[]; }

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Knowledge Base", href: "/knowledge-base/", dropdown: [
    { groupLabel: "Engineering knowledge", links: [
      { label: "Materials", href: "/knowledge-base/#materials" },
      { label: "Feedstocks", href: "/knowledge-base/#feedstocks" },
      { label: "Processes", href: "/knowledge-base/#processes" },
      { label: "Coating Systems", href: "/knowledge-base/#coating-systems" },
      { label: "Applications", href: "/knowledge-base/#applications" },
      { label: "Testing & Standards", href: "/knowledge-base/#testing-standards" }
    ] }
  ] },
  { label: "Technical Studies", href: "/technical-studies/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" }
];
