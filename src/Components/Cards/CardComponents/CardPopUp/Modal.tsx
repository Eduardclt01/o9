import React, { useEffect } from "react";
import "./modal.scss";
import { motion } from "framer-motion";
import SecondaryButton from "../../../GlobalComponents/Buttons/SecondaryButton/SecondaryButton";
import TimeLabel from "../../../GlobalComponents/Labels/TimeLabel/TimeLabel";
import Paragraph from "../../../GlobalComponents/Typography/Paragraph/Paragraph";
import { useTranslation } from "react-i18next";
import ParagraphSmall from "../../../GlobalComponents/Typography/ParagraphSmall/ParagraphSmall";
import HeadingL from "../../../GlobalComponents/Typography/HeadingL/HeadingL";
import { ReactComponent as CloseIcon } from "../../../../Assets/Images/Svgs/close.svg";
import { ReactComponent as PlusIcon } from "../../../../Assets/Images/Svgs/plus.svg";

const animate = {
  opacity: 1,
  scale: 1,
  transition: {
    ease: "easeOut",
    duration: 0.15,
  },
};

const initial = {
  opacity: 0,
  scale: 0.75,
};

export default function Modal(props: { setModal: CallableFunction }) {
  const { setModal } = props;
  const { t } = useTranslation();

  function onCloseModal() {
    setModal(false);
  }

  useEffect(() => {
    // prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div className={`modal`} initial={initial} animate={animate}>
      <div className="modal__header">
        <TimeLabel time="12:30" />

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
        <Paragraph bold={true} text={t("keynote").toUpperCase()} />
      </div>

      <div className="modal__title">
        <HeadingL text="How Generative AI will Transform Planning and Decision-Making" />
      </div>

      <div className="modal__body-text">
        <Paragraph text="Join this keynote session to learn why Adidas decided to embark on this. the challenges and lessons learned, and the quantifiable business value it’s expecting to unlock. Join this keynote session to learn why Adidas decided to embark on this transformation journey, the challenges and lessons learned, and the quantifiable." />
      </div>

      <div className="modal__calendary-btn">
        <SecondaryButton
          text={t("addToCalendar")}
          onButtonClick={onCloseModal}
          Icon={PlusIcon}
        />
      </div>

      <Paragraph bold={true} text={t("speakers").toUpperCase()} />
    </motion.div>
  );
}
