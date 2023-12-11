import React from "react";
import "./timeLabel.scss";

export default function TimeLabel(props: { time: string; heightPx?: number }) {
  const { time, heightPx } = props;
  const elementHeight = heightPx ? props.heightPx + "px" : "100%";

  return (
    <span className="time-label" style={{ height: elementHeight }}>
      {time}
    </span>
  );
}
