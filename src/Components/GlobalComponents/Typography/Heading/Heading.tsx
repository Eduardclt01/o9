import React from "react";
import "./heading.scss";

export default function Heading(props: { text: string; testId?: string }) {
  const { text, testId } = props;

  return (
    <h5 data-testid={testId} className="typography-heading">
      {text}
    </h5>
  );
}
