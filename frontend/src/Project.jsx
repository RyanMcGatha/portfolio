import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";

const Project = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [selected, setSelected] = useState(0);

  return (
    <>
      <Nav scrollYProgress={scrollYProgress} />
      <section ref={targetRef} className="bg-white h-[350vh]">
        <div className="h-screen sticky top-0 z-0 grid grid-cols-3 grid-rows-3 gap-4 p-4 overflow-hidden">
          <Copy scrollYProgress={scrollYProgress} />
          <ProjectCards selected={selected} setSelected={setSelected} />
          <Circles />
        </div>
      </section>

      <div className="h-screen bg-violet-600 text-white flex items-center justify-center">
        <span>Other content here {":)"}</span>
      </div>
    </>
  );
};

const Nav = ({ scrollYProgress }) => {
  const background = useTransform(scrollYProgress, (i) =>
    i === 1 ? "rgb(13,10,9)" : "transparent"
  );

  return (
    <motion.nav
      style={{ background }}
      className="px-4 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-40 transition-colors"
    >
      <div className="flex items-center gap-2 text-lg text-white">
        <span className="font-bold">My Projects</span>
      </div>
    </motion.nav>
  );
};

const Copy = ({ scrollYProgress }) => {
  const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

  return (
    <motion.div
      style={{
        scale: copyScale,
        opacity: copyOpacity,
        y: copyY,
      }}
      className="absolute px-8 w-full h-screen z-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-stone-950 text-5xl md:text-7xl font-bold text-center max-w-xl">
        Showcasing My Work
      </h1>
      <p className="text-stone-600 text-sm md:text-base text-center max-w-xl my-6">
        Here are some of the projects I've worked on recently. Each project
        showcases my skills and passion for building cool stuff.
      </p>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-violet-600 hover:bg-violet-600 transition-colors text-white font-medium">
          View More
        </button>
        <button className="px-4 py-2 bg-transparent hover:bg-stone-200 transition-colors text-stone-950 font-medium">
          Contact Me
        </button>
      </div>
    </motion.div>
  );
};

const ProjectCards = ({ selected, setSelected }) => {
  return (
    <div className="py-24 px-4 mb-10 md:mb-20 lg:px-16 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden">
      <div className="p-4">
        <h3 className="my-3 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          Projects
        </h3>
        <p className="text-slate-white text-sm md:text-md lg:text-lg xl:text-xl">
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
    </div>
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
      <img src={img} alt={name} className="w-full h-auto max-h-96" />
      <div>
        <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          {name}
        </span>
      </div>
      <p className="text-slate-white text-sm md:text-md lg:text-lg xl:text-xl">
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

const Circles = () => (
  <>
    <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 left-0 top-0 -translate-x-[50%] -translate-y-[50%]" />
    <div className="w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
  </>
);

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

export default Project;

const testimonials = [
  {
    img: "../pushIt.png",
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
