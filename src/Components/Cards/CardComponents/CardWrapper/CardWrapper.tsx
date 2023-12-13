import React, { useEffect } from "react";
import "./cardWrapper.scss";
import { motion } from "framer-motion";
import cx from "classnames";
import { coverImage } from "../../../../Types/AgendaTypes";

export default function CardWrapper(props: {
  children: React.ReactNode;
  backgroundColor?: string;
  gridSpanAmount?: number;
  setModalClose?: CallableFunction;
  backgroundImageObject?: coverImage;
}) {
  const {
    children,
    backgroundColor,
    gridSpanAmount,
    setModalClose,
    backgroundImageObject,
  } = props;

  function escFunction(event: { key: string }) {
    if (event.key === "Escape" && setModalClose) {
      setModalClose();
    }
  }

  useEffect(() => {
    if (setModalClose) {
      document.addEventListener("keydown", escFunction, false);
    }
    return () => {
      if (setModalClose) {
        document.removeEventListener("keydown", escFunction, false);
      }
    };
  }, []);

  console.log(backgroundImageObject?.url);
  return (
    <motion.div
      className={cx("card-wrapper", {
        "grid-span-1": gridSpanAmount == 1,
        "grid-span-2": gridSpanAmount == 2,
        "dark-gray-bg-color": backgroundColor === "dark-gray",
        "primary-bg-color": backgroundColor === "primary",
      })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      style={{ backgroundImage: `url(${backgroundImageObject?.url})` }}
    >
      {children}
    </motion.div>
  );
}
