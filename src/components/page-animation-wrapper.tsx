"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = { children: React.ReactNode };

const PageAnimationWrapper = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <motion.div
      className="h-full w-full"
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, type: "spring" } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimationWrapper;
