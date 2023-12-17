import React from "react";
import "./headingLarge.scss";

export default function HeadingLarge(props: { text: string; color?: string }) {
  const { text, color } = props;

  return (
    <h3 className={`typography-heading-Large ${color ? color : ""}`}>{text}</h3>
  );
}
