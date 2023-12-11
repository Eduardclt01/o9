import React from "react";
import "./timeLabel.scss";

export default function TimeLabel(props: { time: string }) {
  const { time } = props;

  return <span className="time-label">{time}</span>;
}
