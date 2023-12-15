import React from "react";
import cx from "classnames";
import "./paragraph.scss";

export default function Paragraph(props: {
  text: string;
  bold?: boolean;
  testId?: string;
}) {
  const { text, bold, testId } = props;

  return (
    <p
      data-testid={testId}
      className={cx("typography-paragraph", {
        bold: bold,
      })}
    >
      {text}
    </p>
  );
}
