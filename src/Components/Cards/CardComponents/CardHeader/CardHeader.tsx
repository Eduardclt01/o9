import React from "react";
import TimeLabel from "../../../GlobalComponents/Labels/TimeLabel/TimeLabel";
import LabelMedium from "../../../GlobalComponents/Typography/LabelMedium/LabelMedium";
import "./cardHeader.scss";
import IconButton from "../../../GlobalComponents/Buttons/IconButton/IconButton";
import { ReactComponent as RightUpArrow } from "../../../../Assets/Images/Svgs/rightUpArrow.svg";

export default function CardHeader(props: {
  time: string;
  labelText: string;
  testId?: string;
}) {
  const { time, labelText, testId } = props;

  return (
    <div className="card-header" data-testid={testId}>
      <div className="card-header__textSection">
        <TimeLabel time={time} />
        <LabelMedium text={labelText} />
      </div>
      <div className="show-desktop-only hoverIcon">
        <IconButton Icon={RightUpArrow} />
      </div>
    </div>
  );
}
