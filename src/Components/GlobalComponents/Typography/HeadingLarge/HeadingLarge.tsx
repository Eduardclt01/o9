import React from "react";
import "./headingLarge.scss";

export default function HeadingLarge(props: {
  text: string;
  color: string;
  testId?: string;
}) {
  const { text, color, testId } = props;

  return (
    <h4 data-testid={testId} className={`typography-heading-large ${color}`}>
      {text}
    </h4>
  );
}
