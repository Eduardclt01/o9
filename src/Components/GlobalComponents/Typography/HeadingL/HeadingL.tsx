import React from "react";
import "./headingL.scss";

export default function HeadingL(props: { text: string; color?: string }) {
  const { text, color } = props;

  return (
    <h3 className={`typography-heading-L ${color ? color : ""}`}>{text}</h3>
  );
}
