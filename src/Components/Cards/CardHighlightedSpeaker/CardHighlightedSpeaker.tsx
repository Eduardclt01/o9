import React from "react";
import "./cardHighlightedSpeaker.scss";
import { ReactComponent as RightUpArrow } from "../../../Assets/Images/Svgs/rightUpArrow.svg";
import HeadingXL from "../../GlobalComponents/Typography/HeadingXL/HeadingXL";
import HeadingLarge from "../../GlobalComponents/Typography/HeadingLarge/HeadingLarge";
import TimeLabel from "../../GlobalComponents/Labels/TimeLabel/TimeLabel";
import IconButton from "../../GlobalComponents/Buttons/IconButton/IconButton";
import CardWrapper from "../CardComponents/CardWrapper/CardWrapper";

export default function CardHighlightedSpeakers(props: {
  time: string;
  heading: string;
  speaker: any;
}) {
  const { time, heading } = props;

  return (
    <CardWrapper>
      <div className="card-highlighted-speaker">
        <div className="card-highlighted-speaker__header">
          <TimeLabel time={time} heightPx={29} />
          <IconButton Icon={RightUpArrow} onButtonClick={() => {}} />
        </div>

        <div>
          <HeadingXL color={"primary-color"} text="Haegoo Song" />
          <HeadingLarge color={"primary-color"} text={heading} />

          <div className="card-highlighted-speaker__company-details">
            <p>hello</p>
            <p>LOGO</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
