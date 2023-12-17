import React from "react";
import "./modal.scss";
import { motion } from "framer-motion";
import SecondaryButton from "../../../GlobalComponents/Buttons/SecondaryButton/SecondaryButton";
import TimeLabel from "../../../GlobalComponents/Labels/TimeLabel/TimeLabel";
import Paragraph from "../../../GlobalComponents/Typography/Paragraph/Paragraph";
import { useTranslation } from "react-i18next";
import ParagraphSmall from "../../../GlobalComponents/Typography/ParagraphSmall/ParagraphSmall";
import { ReactComponent as CloseIcon } from "../../../../Assets/Images/Svgs/close.svg";
import { ReactComponent as PlusIcon } from "../../../../Assets/Images/Svgs/plus.svg";
import { SpeakerList } from "../../../../Types/AgendaTypes";
import { getDisplayTime } from "../../../../Helpers/helpers";
import SpeakerListRow from "../SpeakerListRow/SpeakerListRow";
import HeadingLarge from "../../../GlobalComponents/Typography/HeadingLarge/HeadingLarge";

const animateModal = {
  opacity: 1,
  scale: 1,
  transition: {
    ease: "easeOut",
    duration: 0.15,
  },
};

const initialModal = {
  opacity: 0,
  scale: 0.75,
};

const animateBackdrop = {
  opacity: 1,
  transition: {
    ease: "easeOut",
    duration: 0.15,
  },
};

const initialDrop = {
  opacity: 0,
};

export default function Modal(props: {
  setModalClose: CallableFunction;
  time: string;
  duration: string;
  category: string;
  bodyText: string;
  speakers: SpeakerList[];
  heading: string;
}) {
  const {
    setModalClose,
    time,
    duration,
    category,
    bodyText,
    speakers,
    heading,
  } = props;
  const { t } = useTranslation();

  function onCloseModal() {
    setModalClose();
  }

  function getTimeLabelText() {
    return `${getDisplayTime(time)} | ${duration}`;
  }

  function addToGoogleCalendar() {
    const timeString = time.replace(/-/g, "").replace(/:/g, "");
    const link = `http://www.google.com/calendar/event?action=TEMPLATE&dates=${timeString}/${timeString}&text=${heading}`;
    window.open(link, "_blank");
  }

  function handleAddToCalendarClick() {
    addToGoogleCalendar();
  }

  return (
    <motion.div
      className="modal__backdrop"
      initial={initialDrop}
      animate={animateBackdrop}
      onClick={onCloseModal}
    >
      <motion.div
        className="modal"
        initial={initialModal}
        animate={animateModal}
        // dont fire onOutsideModalClick
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__header">
          <TimeLabel time={getTimeLabelText()} />

          <SecondaryButton
            text={t("close")}
            onButtonClick={onCloseModal}
            Icon={CloseIcon}
          />
        </div>
        <div className="modal__timezone">
          <ParagraphSmall bold={true} text={t("timeZone")} />
        </div>

        <div className="modal__keynote">
          <Paragraph bold={true} text={category.toUpperCase()} />
        </div>

        <div className="modal__title">
          <HeadingLarge text={heading} />
        </div>

        <div className="modal__body-text">
          <p
            dangerouslySetInnerHTML={{ __html: bodyText }}
            style={{ fontWeight: "bold" }}
          />
        </div>

        <div className="modal__calendary-btn">
          <SecondaryButton
            text={t("addToCalendar")}
            onButtonClick={handleAddToCalendarClick}
            Icon={PlusIcon}
          />
        </div>

        <div className="modal__speaker-label">
          <Paragraph bold={true} text={t("speakers").toUpperCase()} />
        </div>
        <SpeakerListRow speakers={speakers} showSpeakerDetails={true} />
      </motion.div>
    </motion.div>
  );
}
