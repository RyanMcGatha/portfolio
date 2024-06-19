import { AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import Reveal from "../util/Reveal";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="max-w-xl mx-auto bg-zinc-800 px-8 py-12 rounded-xl">
        <Reveal width="w-full">
          <h4 className="text-4xl md:text-5xl text-center font-black">
            Contact<span className="text-indigo-500">.</span>
          </h4>
        </Reveal>
        <Reveal width="w-full">
          <p className="text-center my-8 text-zinc-300 leading-relaxed">
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              to="https://www.linkedin.com/in/ryanmcgatha"
              target="_blank"
              className="text-indigo-300 hover:underline"
            >
              LinkedIn
            </Link>{" "}
            or{" "}
            <Link
              to="https://github.com/RyanMcGatha"
              target="_blank"
              className="text-indigo-300 hover:underline"
            >
              GitHub
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="w-full">
          <Link to="mailto:ryanmcgatha@gmail.com">
            <div className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal mx-auto hover:text-indigo-300 transition-colors">
              <AiFillMail />
              <span>ryanmcgatha@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
