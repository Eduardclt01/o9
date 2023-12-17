import React from "react";
import "./ParagraphXS.scss";

export default function ParagraphXS(props: { text: string }) {
  const { text } = props;

  return <p className="typography-paragraph-xs">{text}</p>;
}
