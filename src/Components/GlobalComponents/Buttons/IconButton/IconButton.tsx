import React from "react";
import "./iconButton.scss";

export default function IconButton(props: {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onButtonClick: CallableFunction;
}) {
  const { Icon, onButtonClick } = props;

  return (
    <div className="icon-button" onClick={onButtonClick()}>
      <Icon />
    </div>
  );
}
