import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";

const Example = () => {
  return (
    <>
      <div className="flex h-0 flex-col items-center justify-center "></div>
      <SwapColumnFeatures />
      <div className="flex h-0 items-center justify-center "></div>
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState(features[0]);

  return (
    <section className="relative mx-auto max-w-screem">
      <SlidingFeatureDisplay featureInView={featureInView} />

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
          <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold">{featureInView.title}</p>
          <p className="text-slate-600">{featureInView.description}</p>
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
    <div className="relative h-96 w-full rounded-xl shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <span className="">
        <img
          src="./src/assets/aboutMe.jpg"
          alt=""
          className=" min-h-80 rounded-xl"
          style={{ objectFit: "cover", minWidth: "100%", maxHeight: "80vh" }}
        />
      </span>
      <div className="relative top-0 left-0 right-0 bottom-0">
        <p className="font-mono text-sm text-slate-200">
          <span className="inline-block rounded bg-indigo-600 px-1 font-semibold">
            "{featureInView.title}"
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Example;

const features = [
  {
    id: 1,
    callout: "About Me",
    title: "It's simple",
    description:
      "I am a Full Stack Developer with a passion for creating and learning. I have experience with a variety of technologies and am always looking to expand my knowledge.",

    contentPosition: "r",
  },
  {
    id: 2,
    callout: "My Work",
    title: "The repo of repos",
    description:
      "I have a variety of projects on my GitHub that showcase my skills and interests. I am always looking for new projects to work on and new technologies to learn.",
    contentPosition: "l",
  },
  {
    id: 3,
    callout: "Lets connect",
    title: "My socials",
    description:
      "I am always looking to connect with other developers and learn from them. Feel free to reach out to me on LinkedIn or E-mail.",
    contentPosition: "r",
  },
  {
    id: 4,
    callout: "idk yet ",
    title: "Cha-ching!",
    description:
      "I am currently seeking employment as a Full Stack Developer. If you are interested in hiring me, please reach out to me via LinkedIn or E-mail.",
    contentPosition: "l",
  },
];
