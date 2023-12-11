import React, { useState } from "react";
import { motion } from "framer-motion";
import "./switchButton.scss";

// TODO type
export default function SwitchButton(props: {
  labels: any;
  stickyTop?: boolean;
}) {
  const { labels, stickyTop } = props;
  const [bubbleLeftPos, setBubbleLeftPos] = useState("0");
  const labelCount = labels.length;

  function onLabelClick(index: number) {
    const calculatedLeft = (index / labelCount) * 100;
    setBubbleLeftPos(calculatedLeft.toString() + "%");
  }

  return (
    <div className={`switch-button ${stickyTop ? "sticky" : ""}`}>
      <div className="switch-button__wrapper">
        <motion.div
          layout
          transition={spring}
          style={{ left: bubbleLeftPos }}
          className="switch-button__selection-bubble"
        />

        {labels.map((label: string, index: number) => (
          <span
            className="switch-button__button"
            key={index}
            onClick={() => {
              onLabelClick(index);
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
