import React from "react";
import "./headingRegular.scss";

export default function HeadingRegular(props: { text: string }) {
  const { text } = props;

  return <h5 className="typography-heading-regular">{text}</h5>;
}
