import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  links: {
    url: string;
    label: string;
  }[];
  closeNavBar: () => void;
}

const listVariants = {
  closed: { left: "-100%" },
  opened: {
    left: 0,
    transition: {
      duration: 0.1,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};
const listItemVariants = {
  closed: { x: -10, opacity: 0 },
  opened: {
    x: 0,
    opacity: 1,
  },
};

function MenuList({ links, closeNavBar }: Props) {
  return (
    <motion.div
      variants={listVariants}
      initial="closed"
      animate="opened"
      className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex items-center justify-center flex-col gap-8 text-4xl z-40"
    >
      {links.map((link) => (
        <motion.div variants={listItemVariants} key={link.url}>
          <Link href={link.url} onClick={closeNavBar}>
            {link.label}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default MenuList;
