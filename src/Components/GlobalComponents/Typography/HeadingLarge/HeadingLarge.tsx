import React from "react";
import "./headingLarge.scss";

export default function HeadingLarge(props: { text: string; color: string }) {
  const { text, color } = props;

  return <h4 className={`typography-heading-large ${color}`}>{text}</h4>;
}
