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
              ey! I'm Ryan McGatha, a passionate software developer with a knack
              for creating efficient and innovative web applications. My journey
              in web development began at Carolina Code School, where I
              completed a comprehensive Full Stack Web Development course,
              equipping me with a solid foundation in technologies like
              React.js, Python, and PostgreSQL.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I specialize in building dynamic and responsive web applications,
              leveraging my skills in React, Express.js, Node.js, and
              PostgreSQL. One of my notable projects is the Push It chat
              application, which showcases my ability to develop complex
              messaging systems with real-time updates and secure,
              user-protected chats.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              In addition to my technical expertise, I've worked on various
              projects that demonstrate my ability to learn and adapt quickly
              under pressure. For instance, I was contracted to build an
              Internal Franchise Document Management System app for Sully's
              Steamers, where I played a pivotal role in its development and
              deployment.
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
