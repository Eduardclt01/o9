import React from "react";
import "./headingJumbo.scss";

export default function HeadingJumbo(props: { text: string }) {
  const { text } = props;

  return <h1 className="typography-heading-jumbo">{text}</h1>;
}
