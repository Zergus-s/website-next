"use client";

import HomePageButtons from "@/components/home-page-buttons";
import { motion } from "framer-motion";
import Image from "next/image";

function Homepage() {
  return (
    <motion.div
      className="page-wrapper"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex flex-1 flex-col lg:flex-row h-full w-full">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 min-h-200  lg:h-full lg:w-1/2  relative">
          <Image
            src="/home-image.png"
            alt=""
            className="object-contain "
            fill
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2 ml-10 ">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold text-white/80">
            Crafting Digital Experience, Designing Tomorrow
          </h1>
          {/* DESC */}
          <p className="md:text-xl text-white/70 ">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence
          </p>
          {/* BUTTONS */}
          <HomePageButtons />
        </div>
      </div>
    </motion.div>
  );
}

export default Homepage;
