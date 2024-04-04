import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";

const Example = () => {
  return (
    <>
      <SwapColumnFeatures />
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
          <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium ">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text">
            {featureInView.title}
          </p>
          <p className="bg-gradient-to-br from-white to-gray-400 bg-clip-text">
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
    <div
      className="relative h-full  rounded-xl shadow-xl"
      style={featureInView.style}
    >
      <div className="flex max-w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <span className="z-10">
        <img
          src={featureInView.imgSrc}
          className="z-10 max-h-full rounded-xl"
          style={{
            objectFit: "cover",
          }}
        />
      </span>
      <div className="relative top-0 left-0 right-0 bottom-0">
        <p className="font-mono text-sm bg-gradient-to-br from-white to-gray-400 bg-clip-text">
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
    style: { minHeight: "100vh" },
    contentPosition: "r",
    imgSrc:
      "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/sashaqphotography-84.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3Nhc2hhcXBob3RvZ3JhcGh5LTg0LmpwZyIsImlhdCI6MTcxMjIzOTUzMywiZXhwIjoxNzQzNzc1NTMzfQ.aQ8USaCVpsEsUEpsGsa7n38opKxXkk8UEYu7Tt3oS1Q&t=2024-04-04T14%3A05%3A33.981Z",
  },
  {
    id: 2,
    callout: "My Work",
    title: "The repo of repos",
    description:
      "I have a variety of projects on my GitHub that showcase my skills and interests. I am always looking for new projects to work on and new technologies to learn.",
    contentPosition: "l",
    imgSrc:
      "https://beecrowd.io/wp-content/uploads/2022/08/Beecrowd-Agosto-6-02-larger.png",
  },
  // {
  //   id: 3,
  //   callout: "Lets connect",
  //   title: "My socials",
  //   description:
  //     "I am always looking to connect with other developers and learn from them. Feel free to reach out to me on LinkedIn or E-mail.",
  //   contentPosition: "r",
  // },
  // {
  //   id: 4,
  //   callout: "idk yet ",
  //   title: "Cha-ching!",
  //   description:
  //     "I am currently seeking employment as a Full Stack Developer. If you are interested in hiring me, please reach out to me via LinkedIn or E-mail.",
  //   contentPosition: "l",
  // },
];
