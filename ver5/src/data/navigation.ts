export interface NavLink { label: string; href: string; }
export interface NavGroup { groupLabel: string; links: NavLink[]; }
export interface NavItem { label: string; href?: string; dropdown?: NavGroup[]; }

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Insights", href: "/insights/" },
  { label: "Contact", href: "/contact/" }
];
