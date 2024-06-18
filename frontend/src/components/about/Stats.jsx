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
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>Node.js</Chip>
            <Chip>Express.js</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>GitHub</Chip>
            <Chip>Netlify</Chip>
            <Chip>Vercel</Chip>
            <Chip>Tailwind CSS</Chip>
            <Chip>REST API</Chip>
            <Chip>JWT</Chip>
            <Chip>FastAPI</Chip>
            <Chip>Python</Chip>
            <Chip>React Router</Chip>
            <Chip>TypeScript</Chip>
            <Chip>Firebase</Chip>
            <Chip>AWS</Chip>
            <Chip>Postman</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
