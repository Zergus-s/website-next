"use client";

import HomePageButtons from "@/app/components/home-page-buttons";
import { motion } from "framer-motion";
import Image from "next/image";
import Loading from "./loading";
import { useState } from "react";

function Homepage() {
  const [loading, setLoading] = useState(true);

  return (
    <motion.div
      className="page-wrapper overflow-y-auto"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex flex-1 flex-col lg:flex-row h-full w-full ">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 min-h-[320px] md:h-full lg:w-1/2 relative  lg:mr-10 mb-4 lg:mb-0">
          <Image
            src="/home-image.png"
            alt=""
            className="object-contain"
            fill
            loading="eager"
            onLoadingComplete={() => setLoading(false)}
          />
          {loading && <Loading />}
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-full flex flex-col gap-8 items-center justify-start lg:justify-center lg:h-full lg:w-1/2">
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
          <HomePageButtons />
        </div>
      </div>
    </motion.div>
  );
}

export default Homepage;
