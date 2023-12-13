import React from "react";
import "./paragraphSmall.scss";
import cx from "classnames";

export default function ParagraphSmall(props: {
  text: string;
  bold?: boolean;
}) {
  const { text, bold } = props;

  return (
    <p
      className={cx("typography-paragraph-small", {
        bold: bold,
      })}
    >
      {text}
    </p>
  );
}
