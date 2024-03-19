import React from "react";
import { experience } from "../const";

function ExperienceItem({ exp }: { exp: (typeof experience)[0] }) {
  return (
    <div className="flex flex-col gap-2 max-w-100">
      <p className="text-3xl font-bold text-white/70">{exp.title}</p>
      <p className="text-md text-white/60">
        <strong className="text-white/70">Company:</strong> {exp.company}
      </p>
      <p className="text-md text-white/60">
        <strong className="text-white/70">Period:</strong> {exp.period}
      </p>
      <pre className="text-md break-words whitespace-pre-wrap text-white/60 font-inter">
        <strong>Description:</strong>
        {exp.description}
      </pre>
    </div>
  );
}

export default ExperienceItem;
