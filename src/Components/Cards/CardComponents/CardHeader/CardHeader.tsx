import React from "react";
import TimeLabel from "../../../GlobalComponents/Labels/TimeLabel/TimeLabel";
import LabelMedium from "../../../GlobalComponents/Typography/LabelMedium/LabelMedium";
import "./cardHeader.scss";

export default function CardHeader(props: { time: string; labelText: string }) {
  const { time, labelText } = props;

  return (
    <div className="card-header">
      <TimeLabel time={time} />
      <LabelMedium text={labelText} />
    </div>
  );
}
