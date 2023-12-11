import React from "react";
import SecondaryButton from "../../GlobalComponents/Buttons/SecondaryButton/SecondaryButton";
import HeadingRegular from "../../GlobalComponents/Typography/HeadingRegular/HeadingRegular";
import CardHeader from "../CardComponents/CardHeader/CardHeader";
import CardWrapper from "../CardComponents/CardWrapper/CardWrapper";
import { ReactComponent as RightArrow } from "../../../Assets/Images/Svgs/rightArrow.svg";

export default function CardMaxFiveSpeakers(props: {
  time: string;
  category: string;
  heading: string;
  speakers: any;
}) {
  const { time, category, heading, speakers } = props;
  const categoryText = category.toUpperCase();

  return (
    <CardWrapper backgroundColorDark={true} gridSpanAmount={2}>
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
