import { skills } from "@/data/skills";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  return (
    <div id="skills" className="wrapper">
      <SectionTitle title="Skills" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index + skill.name}
            className="flex flex-col items-center gap-2 border p-5 rounded-lg cursor-pointer hover:bg-accent hover:border-accent"
          >
            <span>
              <skill.icon size={50} />
            </span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
