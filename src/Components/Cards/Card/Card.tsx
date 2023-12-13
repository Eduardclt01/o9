import React, { useState } from "react";
import SecondaryButton from "../../GlobalComponents/Buttons/SecondaryButton/SecondaryButton";
import HeadingRegular from "../../GlobalComponents/Typography/HeadingRegular/HeadingRegular";
import CardHeader from "../CardComponents/CardHeader/CardHeader";
import CardWrapper from "../CardComponents/CardWrapper/CardWrapper";
import { ReactComponent as RightArrow } from "../../../Assets/Images/Svgs/rightArrow.svg";
import Modal from "../CardComponents/CardPopUp/Modal";
import { SpeakerList } from "../../../Types/AgendaTypes";
import "./card.scss";
import { getDisplayTime } from "../../../Helpers/helpers";
import SpeakerListRow from "../CardComponents/SpeakerListRow/SpeakerListRow";

export default function Card(props: {
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

  function onIconHeaderClick() {
    setIsModalOpen(true);
  }

  function setModalClose() {
    setIsModalOpen(false);
  }

  return (
    <CardWrapper
      setModalClose={setModalClose}
      backgroundColor={maxTwoVariant ? "" : "dark-gray"}
      gridSpanAmount={maxTwoVariant ? 1 : 2}
    >
      <div className="card-row">
        <div>
          <CardHeader
            time={getDisplayTime(time)}
            labelText={categoryText}
            onIconClick={onIconHeaderClick}
          />

          <div>
            <HeadingRegular text={heading} />
            <div className="show-mobile-only">
              <SecondaryButton
                text="learn more"
                onButtonClick={onLearnMoreClick}
                Icon={RightArrow}
              />
            </div>
          </div>
        </div>

        <SpeakerListRow speakers={speakers} />
      </div>
      {isModalOpen && (
        <Modal
          time={time}
          duration={duration.toString()}
          category={category}
          bodyText={bodyText}
          speakers={speakers}
          setModal={setIsModalOpen}
          heading={heading}
        />
      )}
    </CardWrapper>
  );
}
