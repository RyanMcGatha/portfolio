import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";

const Example = () => {
  return (
    <>
      <div className="flex h-16 md:h-0 flex-col items-center justify-center bg-transparent"></div>
      <SwapColumnFeatures />
      <div className="flex h-5 md:h-0 items-center justify-center"></div>
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({ featureInView }) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({ setFeatureInView, featureInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-md font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-3  text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            {featureInView.title}
          </p>
          <p className="text-slate-white  text-sm md:text-md lg:text-lg xl:text-xl">
            {featureInView.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }) => {
  return (
    <div className="relative h-fit w-full rounded-xl bg-slate-800 shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <img src={featureInView.img} className=" rounded-sm" />

      <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700"></span>
    </div>
  );
};

export default Example;

const features = [
  {
    id: 1,
    callout: "About Me",
    title: "From Concept To Code",
    description:
      "Meet Ryan McGatha, a dynamic software developer whose journey from the bustling kitchens of Sully's Steamers to the sharp world of coding illustrates a commitment to growth and efficiency. With a firm grasp on technologies like React, PostgreSQL, and Tailwind CSS, I craft software solutions that streamline operations and push business boundaries. Ready to tackle complex problems, I'm driven by the thrill of turning ideas into impactful, real-world applications.",
    contentPosition: "r",
    img: "./one.jpg",
  },
  {
    id: 2,
    callout: "Stack",
    title: "Crafting with Precision",
    description:
      "My technical arsenal is curated to build scalable and responsive applications. Mastery in React and PostgreSQL pairs with the innovative capabilities of Tailwind CSS and Supabase to form a full-stack proficiency. My approach is methodical and creative, ensuring that each line of code not only functions effectively but integrates seamlessly across all aspects of development.",

    contentPosition: "l",
    img: "./two.jpg",
  },
  {
    id: 3,
    callout: "Project Spotlight",
    title: "Streamlined Success at Sully's Steamers",
    description:
      "In my standout project at Sully's Steamers, I engineered an internal document management system that revolutionized their operational framework. My design improved system interactions and data processing, enabling faster decision-making and supporting expansive business strategies. This project is a testament to my ability to blend technical skills with strategic vision.",

    contentPosition: "r",
    img: "./three.png",
  },

  {
    id: 4,
    callout: "Journey & Aspirations",
    title: "Beyond Code: A Vision Forward",
    description:
      "Transitioning from leadership roles in retail to the forefront of software development, my career path is marked by relentless pursuit of knowledge and skill. The rigorous Full Stack Web Development course at Carolina Code School fortified my technical toolkit, preparing me to address and solve technological challenges. I am enthusiastic about future opportunities to innovate and drive change through coding.",

    contentPosition: "l",
    img: "./four.jpg",
  },
];
