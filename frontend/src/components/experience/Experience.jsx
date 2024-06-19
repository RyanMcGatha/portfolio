import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Sully's Steamers",
    position: "Software Developer",
    time: "2022 - 2023",
    location: "Greenville, SC",
    description:
      "Contracted to develop an Internal Franchise Document Management System to streamline operations and support franchise expansion.",
    tech: ["React.js", "PostgreSQL", "Tailwind CSS", "Supabase", "GitHub"],
  },

  {
    title: "Carolina Code School",
    position: "Full Stack Web Development Student",
    time: "January 2024 - March 2024",
    location: "Greenville, SC",
    description:
      "Completed a rigorous full-stack web development program, gaining proficiency in technologies such as React.js, PostgreSQL, and Tailwind CSS. Engaged in hands-on projects simulating real-world software development challenges.",
    tech: [
      "React.js",
      "PostgreSQL",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
];
