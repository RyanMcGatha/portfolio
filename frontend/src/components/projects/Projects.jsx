import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Push It! Real-Time Messaging App",
    imgSrc: "/pushit.dev.png",
    code: "https://github.com/RyanMcGatha/Push-It",
    projectLink: "https://push-it.netlify.app",
    tech: ["React.js", "PostgreSQL", "Node.js", "Express.js", "JWT"],
    description:
      "Developed and launched 'Push It!', a real-time messaging app featuring secure registrations and dynamic messaging.",
    modalContent: (
      <>
        <p>
          "Push It!" is a real-time messaging app developed and launched using
          React.js, PostgreSQL, Node.js, Express.js, and JWT. It features secure
          registrations and dynamic messaging.
        </p>
        <p>
          This project highlighted my ability to rapidly learn and implement new
          technologies, showcasing my skills in full-stack development.
        </p>
      </>
    ),
  },
  {
    title: "Internal Franchise Document Management System",
    imgSrc: "/steamyfiles.png",
    code: "https://github.com/RyanMcGatha/Document-Management-System",
    projectLink: "https://document-management-system.example.com",
    tech: ["React.js", "PostgreSQL", "Tailwind CSS", "Supabase"],
    description:
      "Developed a robust document management system that enhanced operational efficiency and supported franchise expansion.",
    modalContent: (
      <>
        <p>
          The Internal Franchise Document Management System is designed to
          streamline operations and support franchise expansion.
        </p>
        <p>
          The tech stack includes React.js for the frontend, PostgreSQL for
          database management, Tailwind CSS for styling, and Supabase for
          backend services.
        </p>
        <p>
          This project was a significant contribution to the operational
          efficiency of the company.
        </p>
      </>
    ),
  },
  {
    title: "FastAPI Tutorial",
    imgSrc: "/fastapi.png",
    code: "https://github.com/RyanMcGatha/fast-api-tutorial",
    projectLink: "https://fastapi-tutorial.netlify.app/",
    tech: ["Python", "FastAPI", "PostgreSQL"],
    description:
      "A tutorial project demonstrating the use of FastAPI with PostgreSQL. This project includes a preset API route with drop-down menus to change different parts of the API request.",
    modalContent: (
      <>
        <p>
          The FastAPI Tutorial project demonstrates the use of FastAPI with
          PostgreSQL. It includes a preset API route with drop-down menus to
          change different parts of the API request.
        </p>
        <p>
          This project is designed to teach students how to build efficient and
          scalable backend services using FastAPI.
        </p>
      </>
    ),
  },
];
