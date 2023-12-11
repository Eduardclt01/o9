import React from "react";
import "./labelMedium.scss";

export default function LabelMedium(props: { text: string }) {
  const { text } = props;

  return <p className="typography-label-medium">{text}</p>;
}
