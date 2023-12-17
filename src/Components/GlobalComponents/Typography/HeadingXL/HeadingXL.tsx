import React from "react";
import "./headingXL.scss";

export default function HeadingXL(props: {
  text: string;
  color?: string;
  testId?: string;
}) {
  const { text, color, testId } = props;

  return (
    <h3
      data-testid={testId}
      className={`typography-heading-Xl ${color ? color : ""}`}
    >
      {text}
    </h3>
  );
}
