import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className=" bg-indigo-500  text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I'm Ryan McGatha, a Full-stack Software Engineer focused on
              building scalable applications and optimizing user experiences. I
              specialize in integrating third-party APIs, managing data
              pipelines, and enhancing both front-end and back-end performance.
              I'm passionate about writing clean code, streamlining workflows,
              and collaborating to deliver high-quality products.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Currently working as a Software Engineering Intern at Chipp AI,
              I've been instrumental in developing features like dynamic URL
              crawlers, third-party API integrations, and enhanced user
              management systems. My experience includes building scalable
              solutions using modern technologies like React.js, Node.js, and
              PostgreSQL.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I've also worked as a Contract Software Developer for Sully's
              Steamers, where I developed a comprehensive Franchise Document
              Management System that streamlined their operations. My background
              in full-stack development, combined with my recent training at
              Carolina Code School, has equipped me with a strong foundation in
              modern web technologies.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Outside of coding, I enjoy fishing and exploring new technologies.
              I believe in continuous learning and am always on the lookout for
              opportunities to grow and refine my skills. Whether it's
              collaborating on a new project or diving into a challenging
              problem, I thrive on creating solutions that make a difference.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
