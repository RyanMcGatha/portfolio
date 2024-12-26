import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6 text-3xl">
            <AiFillCode className="text-indigo-500 text-4xl" />
            <span className="font-bold ml-2">Technologies I Work With</span>
          </h4>
          <div className="flex flex-wrap gap-4 mb-12 text-lg">
            <Chip>JavaScript</Chip>
            <Chip>React</Chip>
            <Chip>Next.js</Chip>
            <Chip>Tailwind CSS</Chip>
            <Chip>Node.js</Chip>
            <Chip>Express.js</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>MySQL</Chip>
            <Chip>Prisma</Chip>
            <Chip>Docker</Chip>
            <Chip>NGINX</Chip>
            <Chip>CI/CD</Chip>
            <Chip>Git/GitHub</Chip>
            <Chip>REST API</Chip>
            <Chip>JWT</Chip>
            <Chip>FastAPI</Chip>
            <Chip>Zod</Chip>
            <Chip>Linux</Chip>
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>Radix UI</Chip>
            <Chip>Python</Chip>
            <Chip>FastAPI</Chip>
            <Chip>SQLAlchemy</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>MySQL</Chip>
            <Chip>Docker</Chip>
            <Chip>NGINX</Chip>
            <Chip>CI/CD</Chip>
            <Chip>Git/GitHub</Chip>
            <Chip>REST API</Chip>
            <Chip>JWT</Chip>
            <Chip>React Query</Chip>
            <Chip>React Router</Chip>
            <Chip>React Hook Form</Chip>
            <Chip>React Testing Library</Chip>
            <Chip>React Query</Chip>
            <Chip>React Router</Chip>
            <Chip>React Hook Form</Chip>
            <Chip>React Testing Library</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
