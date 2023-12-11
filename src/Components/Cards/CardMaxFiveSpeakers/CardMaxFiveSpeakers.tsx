import React, { useState } from "react";
import SecondaryButton from "../../GlobalComponents/Buttons/SecondaryButton/SecondaryButton";
import HeadingRegular from "../../GlobalComponents/Typography/HeadingRegular/HeadingRegular";
import CardHeader from "../CardComponents/CardHeader/CardHeader";
import CardWrapper from "../CardComponents/CardWrapper/CardWrapper";
import { ReactComponent as RightArrow } from "../../../Assets/Images/Svgs/rightArrow.svg";
import Modal from "../CardComponents/CardPopUp/Modal";

export default function CardMaxFiveSpeakers(props: {
  time: string;
  category: string;
  heading: string;
  speakers: any;
}) {
  const { time, category, heading, speakers } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categoryText = category.toUpperCase();

  function onLearnMoreClick() {
    setIsModalOpen(true);
  }

  return (
    <CardWrapper backgroundColorDark={true} gridSpanAmount={2}>
      <CardHeader time={time} labelText={categoryText} />

      <div>
        <HeadingRegular text={heading} />
        <SecondaryButton
          text="learn more"
          onButtonClick={onLearnMoreClick}
          Icon={RightArrow}
        />
      </div>
      {isModalOpen && <Modal setModal={setIsModalOpen} />}
    </CardWrapper>
  );
}
