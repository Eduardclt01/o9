import React, { useState } from "react";
import "./cardHighlightedSpeaker.scss";
import CardHighlightedSpeakerHover from "./CardHighlightedSpeakerHover";
import { motion } from "framer-motion";
import { SpeakerList, coverImage } from "../../../Types/AgendaTypes";
import CardHighlightedSpeakerInitial from "./CardHighlightedSpeakerInitial";
import Modal from "../CardComponents/Modal/Modal";

export default function CardHighlightedSpeaker(props: {
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

  function setModalOpen() {
    setIsModalOpen(true);
  }

  function setModalClose() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div
        className="state-container"
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
        onClick={setModalOpen}
      >
        <CardHighlightedSpeakerInitial
          time={time}
          heading={heading}
          speakers={speakers}
          coverImage={coverImage}
        />
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
    </>
  );
}
