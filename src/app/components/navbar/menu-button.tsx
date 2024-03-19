import { motion } from "framer-motion";
import React from "react";

type Props = { isOpen: boolean; toggleMenu: () => void };

const topVariants = {
  closed: { rotate: 0 },
  opened: {
    rotate: -45,
    backgroundColor: "rgb(255,255,255)",
  },
};
const bottomVariants = {
  closed: { rotate: 0 },
  opened: {
    rotate: 45,
    backgroundColor: "rgb(255,255,255)",
  },
};
const centeredVariants = {
  closed: { opacity: 1 },
  opened: {
    opacity: 0,
  },
};

function MenuButton({ isOpen, toggleMenu }: Props) {
  return (
    <button
      onClick={toggleMenu}
      className="w-10 h-8 flex flex-col justify-between z-50 relative"
    >
      <motion.div
        animate={isOpen ? "opened" : "closed"}
        variants={topVariants}
        className="w-10 h-1 bg-white rounded origin-right"
      ></motion.div>
      <motion.div
        animate={isOpen ? "opened" : "closed"}
        variants={centeredVariants}
        className="w-10 h-1 bg-white rounded"
      ></motion.div>
      <motion.div
        animate={isOpen ? "opened" : "closed"}
        variants={bottomVariants}
        className="w-10 h-1 bg-white rounded origin-right"
      ></motion.div>
    </button>
  );
}

export default MenuButton;
