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
    title: "Chipp AI",
    position: "Software Engineering Intern",
    time: "Aug 2024 - Present",
    location: "Remote",
    description:
      "Developing features including dynamic URL crawlers, third-party API integrations (Fireflies, Notion, Calendly), and enhanced user management systems. Implemented real-time RESTful calls, streamlined assistant setup, and delivered polished creator profiles.",
    tech: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Express.js",
      "RESTful APIs",
      "Tailwind CSS",
    ],
  },
  {
    title: "Sully's Steamers",
    position: "Contract Software Developer",
    time: "Mar 2024",
    location: "Greenville, SC",
    description:
      "Developed a comprehensive Franchise Document Management System for uploading, managing, and sharing documents to streamline franchise operations. Implemented real-time data handling and intuitive UI using modern technologies.",
    tech: ["React.js", "PostgreSQL", "Tailwind CSS", "Supabase", "GitHub"],
  },
  {
    title: "Carolina Code School",
    position: "Full Stack Web Development",
    time: "2024",
    location: "Greenville, SC",
    description:
      "Completed a rigorous full-stack web development program, gaining proficiency in modern web technologies and best practices. Engaged in hands-on projects simulating real-world software development challenges.",
    tech: [
      "React.js",
      "PostgreSQL",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "JavaScript",
    ],
  },
];
