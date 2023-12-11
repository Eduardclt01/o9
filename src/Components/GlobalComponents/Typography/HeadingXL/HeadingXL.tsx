import React from "react";
import "./headingXl.scss";

export default function HeadingXL(props: { text: string; color: string }) {
  const { text, color } = props;

  return <h3 className={`typography-heading-Xl ${color}`}>{text}</h3>;
}
