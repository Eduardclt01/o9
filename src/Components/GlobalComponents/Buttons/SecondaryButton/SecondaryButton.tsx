import React from "react";
import "./secondaryButton.scss";
import { motion } from "framer-motion";

export default function SecondaryButton(props: {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const { text, onButtonClick, Icon } = props;

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="secondary-button"
      onClick={onButtonClick}
    >
      <span>{text.toUpperCase()}</span>
      {Icon && <Icon />}
    </motion.button>
  );
}
