import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";

import {
  SiAtlassian,
  SiDribbble,
  SiGrubhub,
  SiKaggle,
  SiSlack,
  SiNike,
} from "react-icons/si";

const Projects = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-24 px-4 mb-10 md:mb-20 lg:px-16 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden">
      <div className="p-4">
        <h3 className="my-3 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          Projects
        </h3>
        <p className="text-slate-white  text-sm md:text-md lg:text-lg xl:text-xl">
          Showcasing a portfolio of dynamic projects that reflect my journey
          from idea to execution, each creation underscores my skills in
          full-stack development and problem-solving. Explore the innovative
          solutions I've crafted across various platforms, demonstrating my
          ability to drive efficiency and creativity in the tech landscape.
        </p>
        <SelectBtns
          numTracks={testimonials.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <Cards
        testimonials={testimonials}
        setSelected={setSelected}
        selected={selected}
      />
    </section>
  );
};

const SelectBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className="flex gap-1 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-slate-300 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-slate-600"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-slate-700"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

const Cards = ({ testimonials, selected, setSelected }) => {
  return (
    <div className="p-4 relative h-[550px] lg:h-[700px]">
      {testimonials.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  img,
  description,
  name,
  link,
  position,
  selected,
  setSelected,
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
        background: "rgba(15, 23, 42, 1)",
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className="absolute top-0 left-0 cursor-pointer flex flex-col overflow-hidden rounded-xl items-center text-center max-w-4xl h-full p-4 justify-around "
    >
      <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 pb-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <img src={img} alt={name} className=" w-full h-auto max-h-96" />
      <div>
        <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          {name}
        </span>
      </div>
      <p className="text-slate-white  text-sm md:text-md lg:text-lg xl:text-xl">
        {description}
      </p>
      <a
        href={link}
        className="text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold underline"
      >
        View code
      </a>
    </motion.div>
  );
};

export default Projects;

const testimonials = [
  {
    img: "../pushitV2.png",
    description:
      "Push It! is a cutting-edge real-time messaging app designed to enhance communication through instant messaging and dynamic interactions. Developed in just five days using Neurelo's platform, this app features secure user authentication and real-time updates, proving my swift adaptability and commitment to high-quality software solutions.",
    name: "Push It!",
    title: "Real Time Messaging",
    link: "https://github.com/RyanMcGatha/Push-It---Messaging-App/tree/production",
  },
  {
    img: "../three.png",
    description:
      "Steamy Files is an internal document management system created for Sully's Steamers that drastically improved their business operations. By automating document storage and retrieval, this system facilitated a 30% boost in operational efficiency, supporting rapid franchise expansion and streamlining management tasks.",
    name: "Steamy Files",
    title: "Document Management System for Sully's Steamers",
    link: "https://github.com/RyanMcGatha/sullys-franchise-management-system/tree/production",
  },
  {
    img: "../port.png",
    description:
      "Welcome to Ryan M Info, my personal portfolio site where you can dive into my professional world. This site not only showcases my projects and skills but also serves as a platform for potential collaborations and connections. It’s designed to be a reflection of my professional journey and capabilities in software development.",
    name: "Ryan M Info",
    title: "My Personal Portfolio, You're Here!",
    link: "https://github.com/RyanMcGatha/portfolio",
  },
];
