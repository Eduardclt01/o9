import React from "react";
import "./headingMedium.scss";

export default function HeadingMedium(props: {
  text: string;
  color: string;
  testId?: string;
}) {
  const { text, color, testId } = props;

  return (
    <h4 data-testid={testId} className={`typography-heading-medium ${color}`}>
      {text}
    </h4>
  );
}
