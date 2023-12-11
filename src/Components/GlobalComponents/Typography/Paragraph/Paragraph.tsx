import React from "react";
import cx from "classnames";
import "./paragraph.scss";

export default function Paragraph(props: { text: string; bold?: boolean }) {
  const { text, bold } = props;

  return (
    <p
      className={cx("typography-paragraph", {
        bold: bold,
      })}
    >
      {text}
    </p>
  );
}
