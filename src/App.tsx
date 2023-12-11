import React from "react";
import { useTranslation } from "react-i18next";
import CardMaxTwoSpeakers from "./Components/Cards/CardMaxTwoSpeakers/CardMaxTwoSpeakers";
import CardMaxFiveSpeakers from "./Components/Cards/CardMaxFiveSpeakers/CardMaxFiveSpeakers";
import CardHighlightedSpeakers from "./Components/Cards/CardHighlightedSpeaker/CardHighlightedSpeaker";
import HeadingJumbo from "./Components/GlobalComponents/Typography/HeadingJumbo/HeadingJumbo";
import Paragraph from "./Components/GlobalComponents/Typography/Paragraph/Paragraph";
import SwitchButton from "./Components/GlobalComponents/Buttons/SwitchButton/SwitchButton";
import "./App.scss";
import AgendaHeader from "./Components/GlobalComponents/AgendaHeader/AgendaHeader";

function App() {
  return (
    <>
      <div className="main-body">
        <AgendaHeader />

        <div className="main-body__card-layout">
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
        </div>
      </div>
    </>
  );
}

export default App;
