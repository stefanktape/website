export const site = {
  name: "SV Solutions",
  url: "https://svsolutions.pro",
  founder: { name: "Stepan Kalashnikov", chineseName: "思凡" },
  location: "Shanghai, China",
  email: "kalashnikov.stepan996@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/stepankalashnikov/"
  },
  portrait: "",
  // Supplied raster extractions; light/dark describe the surrounding surface.
  logo: {
    light: "/brand/logos/logo-primary-raster-transparent.png",
    dark: "/brand/logos/logo-white-raster-transparent.png",
    width: 548,
    height: 224
  },
  favicon: "/brand/icons/favicon-48.png",
  icons: {
    small: "/brand/icons/favicon-32.png",
    apple: "/brand/icons/favicon-180.png",
    medium: "/brand/icons/favicon-256.png",
    large: "/brand/icons/favicon-512.png"
  },
  socialImage: "/brand/social-card.png"
} as const;
