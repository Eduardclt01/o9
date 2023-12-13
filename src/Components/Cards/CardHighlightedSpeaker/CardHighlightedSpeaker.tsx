import React, { useState } from "react";
import "./cardHighlightedSpeaker.scss";
import { ReactComponent as RightUpArrow } from "../../../Assets/Images/Svgs/rightUpArrow.svg";
import HeadingLarge from "../../GlobalComponents/Typography/HeadingLarge/HeadingLarge";
import TimeLabel from "../../GlobalComponents/Labels/TimeLabel/TimeLabel";
import IconButton from "../../GlobalComponents/Buttons/IconButton/IconButton";
import CardWrapper from "../CardComponents/CardWrapper/CardWrapper";
import CardHighlightedSpeakerHover from "./CardHighlightedSpeakerHover";
import { motion } from "framer-motion";
import { getDisplayTime } from "../../../Helpers/helpers";
import { SpeakerList, coverImage } from "../../../Types/AgendaTypes";
import HeadingXL from "../../GlobalComponents/Typography/HeadingXL/HeadingXL";

export default function CardHighlightedSpeakers(props: {
  time: string;
  heading: string;
  speakers: SpeakerList[];
  coverImage: coverImage;
}) {
  const [cardHover, setCardHover] = useState(false);
  const { time, heading, speakers, coverImage } = props;
  const firstSpeaker = speakers[0];

  function hoverEnter() {
    setCardHover(true);
  }

  function hoverLeave() {
    setCardHover(false);
  }

  return (
    <div
      className="state-container"
      onMouseEnter={hoverEnter}
      onMouseLeave={hoverLeave}
    >
      <CardWrapper backgroundImageObject={coverImage}>
        <div className="card-highlighted-speaker">
          <div className="card-highlighted-speaker__header">
            <TimeLabel time={getDisplayTime(time)} />
            <IconButton
              Icon={RightUpArrow}
              onButtonClick={() => {
                console.log();
              }}
            />
          </div>

          <div>
            <HeadingXL color={"primary-color"} text={firstSpeaker.name} />
            <HeadingLarge color={"primary-color"} text={heading} />

            <div className="card-highlighted-speaker__company-details">
              <p>{firstSpeaker.position}</p>
              <img src={firstSpeaker.company_logo[0].mediaUrl} />
            </div>
          </div>
        </div>
      </CardWrapper>
      <motion.div
        className="hover"
        animate={{
          opacity: cardHover ? 1 : 0,
        }}
      >
        <CardHighlightedSpeakerHover
          time={time}
          heading={heading}
          speakerPos={firstSpeaker.position}
          logoUrl={firstSpeaker.company_logo[0].mediaUrl}
        />
      </motion.div>
    </div>
  );
}
