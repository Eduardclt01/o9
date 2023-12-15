import React from "react";
import "./headingJumbo.scss";

export default function HeadingJumbo(props: { text: string; testId?: string }) {
  const { text, testId } = props;

  return (
    <h1 data-testid={testId} className="typography-heading-jumbo">
      {text}
    </h1>
  );
}
