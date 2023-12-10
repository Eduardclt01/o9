const size = {
  mobileS: "320px",
  mobileM: "390px",
  mobileL: "425px",
  tablet: "600px",
  tabletL: "768px",
  desktopS: "1280px",
  desktopM: "1440px",
  desktopL: "1680px",
  desktopXL: "1920px",
};

export const device = {
  mobileSUp: `(min-width: ${size.mobileS})`,
  mobileMUp: `(min-width: ${size.mobileM})`,
  mobileLUp: `(min-width: ${size.mobileL})`,
  tabletUp: `(min-width: ${size.tablet})`,
  tabletLUp: `(min-width: ${size.tabletL})`,
  desktopUpS: `(min-width: ${size.desktopS})`,
  desktopUpM: `(min-width: ${size.desktopM})`,
  desktopUpL: `(min-width: ${size.desktopL})`,
  desktopUPXL: `(min-width: ${size.desktopXL})`,
};
