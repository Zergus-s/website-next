"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function HomePageButtons() {
  return (
    <div className="flex gap-6">
      <Link href="/projects">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
        >
          View my work
        </motion.button>
      </Link>
      <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 rounded-lg ring-1 ring-purple-500 text-purple-300"
        >
          Contact Me
        </motion.button>
      </Link>
    </div>
  );
}

export default HomePageButtons;
