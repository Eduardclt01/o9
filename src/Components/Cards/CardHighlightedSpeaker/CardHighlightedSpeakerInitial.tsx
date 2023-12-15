import React from "react";
import "./cardHighlightedSpeaker.scss";
import { ReactComponent as RightUpArrow } from "../../../Assets/Images/Svgs/rightUpArrow.svg";
import HeadingLarge from "../../GlobalComponents/Typography/HeadingLarge/HeadingLarge";
import TimeLabel from "../../GlobalComponents/Labels/TimeLabel/TimeLabel";
import IconButton from "../../GlobalComponents/Buttons/IconButton/IconButton";
import CardWrapper from "../CardComponents/CardWrapper/CardWrapper";
import { getDisplayTime } from "../../../Helpers/helpers";
import { SpeakerList, coverImage } from "../../../Types/AgendaTypes";
import HeadingXL from "../../GlobalComponents/Typography/HeadingXL/HeadingXL";

export default function CardHighlightedSpeakerInitial(props: {
  time: string;
  heading: string;
  speakers: SpeakerList[];
  coverImage: coverImage;
}) {
  const { time, heading, speakers, coverImage } = props;
  const firstSpeaker = speakers[0];

  return (
    <CardWrapper
      backgroundImageObject={coverImage}
      testId="cardHighligted-wrapper"
    >
      <div className="card-highlighted-speaker">
        <div className="card-highlighted-speaker__header">
          <TimeLabel time={getDisplayTime(time)} />
          <IconButton Icon={RightUpArrow} />
        </div>

        <div>
          <div className="card-highlighted-speaker__name">
            <HeadingXL
              testId="cardHighligted-speakerName"
              color={"primary-color"}
              text={firstSpeaker.name}
            />
          </div>

          <div className="card-highlighted-speaker__heading show-mobile-only">
            <HeadingLarge
              testId="cardHighligted-heading"
              color={"primary-color"}
              text={heading}
            />
          </div>

          <div className="card-highlighted-speaker__company-details">
            <p data-testid="cardHighligted-speakerpos">
              {firstSpeaker.position}
            </p>
            <img
              data-testid="cardHighligted-speakerimg"
              src={firstSpeaker.company_logo[0].mediaUrl}
            />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
