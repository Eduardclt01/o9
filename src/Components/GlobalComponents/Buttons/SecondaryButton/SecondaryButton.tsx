import React from "react";
import "./secondaryButton.scss";

export default function SecondaryButton(props: {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const { text, onButtonClick, Icon } = props;

  return (
    <button className="secondary-button" onClick={onButtonClick}>
      <span>{text.toUpperCase()}</span>
      {Icon && <Icon />}
    </button>
  );
}
