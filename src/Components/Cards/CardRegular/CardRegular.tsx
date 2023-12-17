import React, { useState } from "react";
import SecondaryButton from "../../GlobalComponents/Buttons/SecondaryButton/SecondaryButton";
import CardHeader from "../CardComponents/CardHeader/CardHeader";
import CardWrapper from "../CardComponents/CardWrapper/CardWrapper";
import { ReactComponent as RightArrow } from "../../../Assets/Images/Svgs/rightArrow.svg";
import Modal from "../CardComponents/Modal/Modal";
import { SpeakerList } from "../../../Types/AgendaTypes";
import "./cardRegular.scss";
import { getDisplayTime } from "../../../Helpers/helpers";
import SpeakerListRow from "../CardComponents/SpeakerListRow/SpeakerListRow";
import Heading from "../../GlobalComponents/Typography/Heading/Heading";

export default function CardRegular(props: {
  time: string;
  category: string;
  heading: string;
  speakers: SpeakerList[];
  duration: string;
  bodyText: string;
}) {
  const { time, category, heading, speakers, duration, bodyText } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categoryText = category.toUpperCase();

  const maxTwoVariant = speakers.length <= 2;

  function onLearnMoreClick() {
    setIsModalOpen(true);
  }

  function setModalClose() {
    setIsModalOpen(false);
  }

  function setModalOpen() {
    setIsModalOpen(true);
  }

  return (
    <>
      <CardWrapper
        backgroundColor={maxTwoVariant ? "" : "dark-gray"}
        gridSpanAmount={maxTwoVariant ? 1 : 2}
        testId="card-wrapper"
      >
        <div className="card-row" onClick={setModalOpen}>
          <div>
            <CardHeader
              testId="card-header"
              time={getDisplayTime(time)}
              labelText={categoryText}
            />

            <div>
              <Heading testId="card-heading" text={heading} />
            </div>
          </div>
          <div>
            <div className="card-row__learn-more show-mobile-only">
              <SecondaryButton
                text="learn more"
                onButtonClick={onLearnMoreClick}
                Icon={RightArrow}
              />
            </div>
            <SpeakerListRow testId="card-speakerrow" speakers={speakers} />
          </div>
        </div>
      </CardWrapper>
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
