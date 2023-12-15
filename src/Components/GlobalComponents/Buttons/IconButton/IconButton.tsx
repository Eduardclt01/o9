import React from "react";
import "./iconButton.scss";
import { motion } from "framer-motion";

export default function IconButton(props: {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onButtonClick?: CallableFunction;
}) {
  const { Icon, onButtonClick } = props;

  function onIconButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className="icon-button"
      onClick={onIconButtonClick}
    >
      <Icon />
    </motion.div>
  );
}
