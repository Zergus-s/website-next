import React from "react";
import { experience } from "../const";

function ExperienceItem({ exp }: { exp: (typeof experience)[0] }) {
  return (
    <div className="flex flex-col gap-2 max-w-100">
      <p className="text-3xl font-bold text-white/70">{exp.title}</p>
      <p className="text-md text-white/60">
        <span className="font-bold text-white/70">Company:</span> {exp.company}
      </p>
      <p className="text-md text-white/60">
        <span className="font-bold text-white/70">Period:</span> {exp.period}
      </p>
      <pre className="text-md break-words whitespace-pre-wrap text-white/60">
        <span className="font-bold text-white/70">Description:</span>{" "}
        {exp.description}
      </pre>
    </div>
  );
}

export default ExperienceItem;
