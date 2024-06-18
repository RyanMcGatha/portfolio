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
              ey! I&apos;m Ryan, if you haven&apos;t already gathered that by
              now. I specialize in frontend development, primarily React.js, but
              I also have experience with backend technologies like Node.js and
              Express.js. I live in Greenville, SC.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I&apos;m currently working on several projects, including a chat
              application called Push It. I enjoy taking on new challenges and
              learning new technologies to build efficient and scalable
              applications.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Outside of coding, I have a passion for fishing and often spend my
              weekends on the water. I also enjoy tinkering with my vehicle’s
              sound system and exploring the latest tech gadgets.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I&apos;m actively looking for new opportunities where I can
              leverage my skills in web development. If you have an opening that
              you think I&apos;d be a good fit for, let&apos;s connect 🔗
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
