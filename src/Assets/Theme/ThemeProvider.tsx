import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    lightGray: "#DADADA",
    darkGray: "#CACACA",
    primary: "#D7FE51",
    black: "#000",
    offBlack: "#010101",
    white: "#FFFFFF",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  borderRadius: {
    small: "27.71px",
  },
  spacing: {
    s1: "2px",
    s2: "4px",
    s3: "6px",
    s4: "8px",
    s5: "10px",
    s6: "14px",
    s7: "16px",
    s8: "17px",
    s9: "56px",
    s10: "96px",
  },
  fontSize: {
    f1: "9px",
    f2: "12px",
    f3: "14px",
    f4: "17px",
    f5: "20px",
    f6: "24px",
    f7: "32px",
    f8: "48px",
    f9: "56px",
  },
};

const Theme = (props: { children: ReactNode }) => {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
