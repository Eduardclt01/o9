import React from "react";
import styled from "styled-components";
import SecondaryButton from "../GlobalComponents/Buttons/SecondaryButton";
import HeadingRegular from "../GlobalComponents/Typography/HeadingRegular";
import CardHeader from "./CardComponents/CardHeader";
import CardWrapper from "./CardComponents/CardWrapper";
import { ReactComponent as RightArrow } from "../../Assets/Images/Svgs/rightArrow.svg";

export default function CardMaxTwoSpeakers(props: {
  time: string;
  category: string;
  heading: string;
  speakers: any;
}) {
  const { time, category, heading, speakers } = props;
  const categoryText = category.toUpperCase();

  return (
    <CardWrapper>
      <CardHeader time={time} labelText={categoryText} />

      <div>
        <HeadingRegular text={heading} />
        <SecondaryButton
          text="learn more"
          onButtonClick={() => {}}
          Icon={RightArrow}
        />
      </div>
    </CardWrapper>
  );
}
