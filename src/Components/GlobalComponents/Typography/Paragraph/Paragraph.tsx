import React from "react";
import "./paragraph.scss";

export default function Paragraph(props: { text: string }) {
  const { text } = props;

  return <p className="typography-paragraph">{text}</p>;
}
