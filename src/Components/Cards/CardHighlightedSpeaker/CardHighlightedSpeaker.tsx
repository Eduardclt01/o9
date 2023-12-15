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
import Modal from "../CardComponents/Modal/Modal";

export default function CardHighlightedSpeakers(props: {
  time: string;
  heading: string;
  speakers: SpeakerList[];
  coverImage: coverImage;
  duration: string;
  category: string;
  bodyText: string;
}) {
  const [cardHover, setCardHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { time, heading, speakers, coverImage, duration, category, bodyText } =
    props;
  const firstSpeaker = speakers[0];

  function hoverEnter() {
    setCardHover(true);
  }

  function hoverLeave() {
    setCardHover(false);
  }

  function setModalClose() {
    setIsModalOpen(false);
  }

  function setModalOpen() {
    setIsModalOpen(true);
  }

  return (
    <div
      className="state-container"
      onMouseEnter={hoverEnter}
      onMouseLeave={hoverLeave}
      onClick={setModalOpen}
    >
      <CardWrapper
        backgroundImageObject={coverImage}
        testId="cardHighligted-wrapper"
      >
        <div className="card-highlighted-speaker" onClick={setModalOpen}>
          <div className="card-highlighted-speaker__header">
            <TimeLabel time={getDisplayTime(time)} />
            <IconButton Icon={RightUpArrow} />
          </div>

          <div>
            <HeadingXL
              testId="cardHighligted-speakerName"
              color={"primary-color"}
              text={firstSpeaker.name}
            />
            <HeadingLarge
              testId="cardHighligted-heading"
              color={"primary-color"}
              text={heading}
            />

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
        {isModalOpen && (
          <Modal
            time={time}
            duration={duration.toString()}
            category={category}
            bodyText={bodyText}
            speakers={speakers}
            setModalClose={setModalClose}
            heading={heading}
          />
        )}
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
