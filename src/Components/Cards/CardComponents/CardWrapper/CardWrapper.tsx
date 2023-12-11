import React, { useEffect } from "react";
import "./cardWrapper.scss";
import { motion } from "framer-motion";
import cx from "classnames";

export default function CardWrapper(props: {
  children: React.ReactNode;
  backgroundColorDark?: boolean;
  gridSpanAmount?: number;
}) {
  const { children, backgroundColorDark, gridSpanAmount } = props;

  return (
    <motion.div
      className={cx("card-wrapper", {
        "grid-span-1": gridSpanAmount == 1,
        "grid-span-2": gridSpanAmount == 2,
        "dark-gray": backgroundColorDark === true,
      })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
