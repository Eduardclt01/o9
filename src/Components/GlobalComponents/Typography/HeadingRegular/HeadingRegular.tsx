import React from "react";
import "./headingRegular.scss";

export default function HeadingRegular(props: {
  text: string;
  testId?: string;
}) {
  const { text, testId } = props;

  return (
    <h5 data-testid={testId} className="typography-heading-regular">
      {text}
    </h5>
  );
}
