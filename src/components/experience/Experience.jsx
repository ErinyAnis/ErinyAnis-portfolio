import "./experience.css";

const experiences = [
  {
    role: "Front-End Developer",
    company: "Mechatronics",
    period: "Oct 2025 – Present",
    stack: ["Vue.js", "Pinia", "Vee-Validate", "Yup"],
    bullets: [
      "Built and maintained a responsive admin dashboard for Kosoor, a multi-branch car wash management platform.",
      "Designed reusable components for service orders, customer tracking, subscriptions, and branch operations.",
      "Integrated RESTful APIs with real-time state management using Pinia.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Echoes Travel",
    period: "Apr 2025 – Sep 2025",
    stack: ["React.js", "Material UI", "React Hook Form", "Zod", "React Query"],
    bullets: [
      "Developed the Shift System — a reservation platform for travel agencies, individuals, and corporates.",
      "Managed server state with React Query and handled form validation with React Hook Form and Zod.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Freelance",
    period: "Aug 2024 – Jun 2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
    bullets: [
      "Delivered Tamayoz, a corporate website for a Saudi consulting and training company.",
      "Built Yaseer, a responsive website for a Saudi tax and accounting firm.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Innovation Scope",
    period: "Jun 2023 – Jul 2024",
    stack: ["jQuery", "HTML", "CSS"],
    bullets: [
      "Developed and maintained responsive websites ensuring optimal UX across all devices.",
      "Collaborated with cross-functional teams to deliver projects on schedule.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="main-title text-center">
          <h5>Where I&apos;ve Worked</h5>
          <h2>Work Experience</h2>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div className="experience__card" key={index}>
              <div className="experience__header">
                <div>
                  <h3 className="experience__role">{exp.role}</h3>
                  <span className="experience__company">{exp.company}</span>
                </div>
                <span className="experience__period">{exp.period}</span>
              </div>

              <div className="experience__stack">
                {exp.stack.map((tech, i) => (
                  <span className="experience__tag" key={i}>
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="experience__bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
