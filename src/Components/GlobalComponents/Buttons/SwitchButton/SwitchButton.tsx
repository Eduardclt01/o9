import React, { useState } from "react";
import { motion } from "framer-motion";
import "./switchButton.scss";

export default function SwitchButton(props: {
  labels: string[];
  stickyTop?: boolean;
  onButtonClick: CallableFunction;
  selectedItem: number;
  testId?: string;
}) {
  const { labels, stickyTop, onButtonClick, selectedItem, testId } = props;
  const [bubbleLeftPos, setBubbleLeftPos] = useState("0");
  const labelCount = labels.length;

  function setLabelStyle(index: number) {
    const calculatedLeft = (index / labelCount) * 100;
    setBubbleLeftPos(calculatedLeft.toString() + "%");
  }

  function onLabelClick(index: number) {
    setLabelStyle(index);
    onButtonClick(index);
  }

  return (
    <div
      data-testid={testId}
      className={`switch-button ${stickyTop ? "sticky" : ""}`}
    >
      <div className="switch-button__wrapper">
        <motion.div
          animate={{ left: bubbleLeftPos }}
          transition={spring}
          className="switch-button__selection-bubble"
        />

        {labels.map((label: string, index: number) => (
          <span
            className={`switch-button__button ${
              selectedItem === index ? "selected-label" : ""
            }`}
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
