const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileSUp: `(min-width: ${size.mobileS})`,
  mobileMUp: `(min-width: ${size.mobileM})`,
  mobileLUp: `(min-width: ${size.mobileL})`,
  tabletUp: `(min-width: ${size.tablet})`,
  laptopUp: `(min-width: ${size.laptop})`,
  laptopLUp: `(min-width: ${size.laptopL})`,
  desktopUp: `(min-width: ${size.desktop})`,
  desktopLUp: `(min-width: ${size.desktop})`,
};
