import React from "react";
import styled, { useTheme } from "styled-components";
import SecondaryButton from "../GlobalComponents/Buttons/SecondaryButton";
import HeadingRegular from "../GlobalComponents/Typography/HeadingRegular";
import CardHeader from "./CardComponents/CardHeader";
import CardWrapper from "./CardComponents/CardWrapper";
import { ReactComponent as RightArrow } from "../../Assets/Images/Svgs/rightArrow.svg";

export default function CardMaxFiveSpeakers(props: {
  time: string;
  category: string;
  heading: string;
  speakers: any;
}) {
  const { time, category, heading, speakers } = props;
  const theme = useTheme();

  const categoryText = category.toUpperCase();

  return (
    <CardWrapper backgroundColor={theme.colors.darkGray} gridSpanAmount={2}>
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
