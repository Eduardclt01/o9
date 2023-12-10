import React from "react";
import { useTranslation } from "react-i18next";
import CardMaxTwoSpeakers from "./Components/Cards/CardMaxTwoSpeakers";
import Theme from "./Assets/Theme/ThemeProvider";
import GlobalFonts from "./Assets/Fonts/fonts";
import CardMaxFiveSpeakers from "./Components/Cards/CardMaxFiveSpeakers";
import CardHighlightedSpeakers from "./Components/Cards/CardHighlightedSpeaker";
import styled from "styled-components";
import { device } from "./Assets/Theme/breakpoints";
import HeadingJumbo from "./Components/GlobalComponents/Typography/HeadingJumbo";
import Paragraph from "./Components/GlobalComponents/Typography/Paragraph";

const MainBodyContainer = styled.div`
  padding-left: ${(props) => props.theme.spacing.s7};
  padding-right: ${(props) => props.theme.spacing.s7};

  @media ${device.tabletUp} {
    padding-left: ${(props) => props.theme.spacing.s9};
    padding-right: ${(props) => props.theme.spacing.s9};
  }

  @media ${device.desktopUpS} {
    padding-left: ${(props) => props.theme.spacing.s7};
    padding-right: ${(props) => props.theme.spacing.s7};
  }

  @media ${device.desktopUpM} {
    padding-left: ${(props) => props.theme.spacing.s10};
    padding-right: ${(props) => props.theme.spacing.s10};
  }

  @media ${device.desktopUpL} {
    max-width: 1248px;
    margin: auto;
  }
`;

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-auto-flow: dense;
`;

function App() {
  const { t } = useTranslation();
  console.log();

  return (
    <Theme>
      <MainBodyContainer>
        <Paragraph text={t("subTitle")} />
        <HeadingJumbo text={t("title")} />
        <GlobalFonts />
        <CardLayout>
          <CardMaxTwoSpeakers
            time={"15:00PM"}
            category={"panel discussion"}
            heading={
              "This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. "
            }
            speakers={{}}
          />
          <CardMaxFiveSpeakers
            time={"15:00PM"}
            category={"panel discussion"}
            heading={
              "This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. "
            }
            speakers={{}}
          />
          <CardHighlightedSpeakers
            time={"15:00PM"}
            heading={
              "This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. "
            }
            speaker={{}}
          />
          <CardMaxTwoSpeakers
            time={"15:00PM"}
            category={"panel discussion"}
            heading={
              "This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. "
            }
            speakers={{}}
          />
          <CardMaxFiveSpeakers
            time={"15:00PM"}
            category={"panel discussion"}
            heading={
              "This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. "
            }
            speakers={{}}
          />
          <CardHighlightedSpeakers
            time={"15:00PM"}
            heading={
              "This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. "
            }
            speaker={{}}
          />
          <CardMaxTwoSpeakers
            time={"15:00PM"}
            category={"panel discussion"}
            heading={
              "This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. "
            }
            speakers={{}}
          />
          <CardMaxFiveSpeakers
            time={"15:00PM"}
            category={"panel discussion"}
            heading={
              "This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. "
            }
            speakers={{}}
          />
          <CardHighlightedSpeakers
            time={"15:00PM"}
            heading={
              "This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. "
            }
            speaker={{}}
          />
          <CardMaxTwoSpeakers
            time={"15:00PM"}
            category={"panel discussion"}
            heading={
              "This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. "
            }
            speakers={{}}
          />
          <CardMaxFiveSpeakers
            time={"15:00PM"}
            category={"panel discussion"}
            heading={
              "This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. "
            }
            speakers={{}}
          />
          <CardHighlightedSpeakers
            time={"15:00PM"}
            heading={
              "This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. "
            }
            speaker={{}}
          />
        </CardLayout>
      </MainBodyContainer>
    </Theme>
  );
}

export default App;
