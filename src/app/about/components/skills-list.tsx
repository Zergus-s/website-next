import React from "react";
import { technicalSkills, otherSkills, languages } from "../const";

const Skill = ({ skill }: { skill: string }) => {
  return (
    <div
      className="transition duration-0 hover:duration-300 ease-in-out cursor-pointer bg-black text-white/80 hover:bg-white hover:text-black rounded-lg px-2 py-1"
      key={skill}
    >
      <p>{skill}</p>
    </div>
  );
};

function SkillsList() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <p className="text-lg text-white/50">Technical:</p>
        {technicalSkills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <p className="text-lg text-white/50">Other:</p>
        {otherSkills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-2 items-center">
        <p className="text-lg text-white/50">Languages:</p>
        {languages.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsList;
