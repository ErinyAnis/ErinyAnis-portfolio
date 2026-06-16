import {
  TbLayoutGrid,
  TbDatabase,
  TbForms,
  TbBrush,
  TbTool,
} from "react-icons/tb";
import "./skills.css";

const skillGroups = [
  {
    title: "Frameworks",
    icon: <TbLayoutGrid />,
    skills: ["React.js", "Next.js", "Vue.js", "Nuxt", "TypeScript"],
  },
  {
    title: "State Management",
    icon: <TbDatabase />,
    skills: ["Pinia", "Redux Toolkit", "Zustand", "React Query", "Axios"],
  },
  {
    title: "Forms & Validation",
    icon: <TbForms />,
    skills: ["React Hook Form", "Vee-Validate", "Zod", "Yup"],
  },
  {
    title: "Styling & UI",
    icon: <TbBrush />,
    skills: ["Tailwind CSS", "Material UI", "Bootstrap"],
  },
  {
    title: "Tools",
    icon: <TbTool />,
    skills: ["Git", "GitHub", "Postman", "Swagger"],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="main-title text-center">
          <h5>What I Work With</h5>
          <h2>Skills</h2>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <div className="skills__group" key={index}>
              <div className="skills__head">
                {group.icon}
                <span>{group.title}</span>
              </div>
              <div className="skills__tags">
                {group.skills.map((skill, i) => (
                  <span className="skills__tag" key={i}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
