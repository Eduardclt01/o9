import React from "react";
import "./cardHighlightedSpeaker.scss";
import { ReactComponent as RightUpArrowInverse } from "../../../Assets/Images/Svgs/rightUpArrowInverse.svg";
import TimeLabel from "../../GlobalComponents/Labels/TimeLabel/TimeLabel";
import IconButton from "../../GlobalComponents/Buttons/IconButton/IconButton";
import CardWrapper from "../CardComponents/CardWrapper/CardWrapper";
import HeadingL from "../../GlobalComponents/Typography/HeadingL/HeadingL";
import { getDisplayTime } from "../../../Helpers/helpers";

export default function CardHighlightedSpeakerHover(props: {
  time: string;
  heading: string;
  speakerPos: string;
  logoUrl: string;
}) {
  const { time, heading, logoUrl, speakerPos } = props;

  return (
    <CardWrapper backgroundColor="primary">
      <div className="card-highlighted-speaker-hover">
        <div className="card-highlighted-speaker__header">
          <TimeLabel time={getDisplayTime(time)} />
          <IconButton Icon={RightUpArrowInverse} />
        </div>

        <div>
          <HeadingL text={heading} />

          <div className="card-highlighted-speaker-hover__company-details">
            <p>{speakerPos}</p>
            <img src={logoUrl} />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
