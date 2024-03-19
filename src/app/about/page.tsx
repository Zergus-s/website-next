"use client";
import React, { useRef } from "react";
import { experience, summaryText } from "./const";
import Brain from "@/app/components/brain";
import { useInView, useScroll, motion } from "framer-motion";

import ExperienceItem from "./components/experience-item";
import SkillsList from "./components/skills-list";

const Title = ({ title }: { title: string }) => (
  <span className="font-bold text-lg md:text-xl lg:text-2xl mb-2 capitalize text-white/80 tracking-widest">
    {title}
  </span>
);

const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isRefInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLDivElement> | null}
      initial={{ x: -300 }}
      animate={isRefInView ? { x: 0 } : { x: -300 }}
      className="flex flex-col justify-center"
    >
      <div className="text-md md:text-xl lg:text-2xl text-white/50">
        {children}
      </div>
    </motion.section>
  );
};

function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <div className="page-wrapper font-inter" ref={containerRef}>
      <div className="h-full lg:flex lg:w-screen">
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-14 md:gap-26 lg:gap-36 lg:w-2/3 lg:pr-0 xl:w-1/2 bg-red">
          {/* SUMMARY */}
          <SectionContainer>
            <Title title="Summary" />
            <p className="text-md md:text-xl mt-5 lg:text-2xl text-white/50">
              {summaryText}
            </p>
          </SectionContainer>
          <SectionContainer>
            <Title title="Skills" />
            <div className="mt-5">
              <SkillsList />
            </div>
          </SectionContainer>
          <div className="flex flex-col gap-6 mt-4 w-full">
            <Title title="Experience" />
            {experience.map((exp) => (
              <SectionContainer key={exp.period}>
                <ExperienceItem exp={exp} />
              </SectionContainer>
            ))}
          </div>
        </div>
        <div className="none lg:block h-full w-1/3 fixed -right-52 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
