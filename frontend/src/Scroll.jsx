import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Example = () => {
  return (
    <>
      <div className="flex h-48 flex-col items-center justify-center bg-transparent">
        <span className="font-semibold uppercase text-white"></span>
        <span className="mt-12 block rounded-full bg-transparent px-4 py-1 text-center font-medium text-white md:hidden">
          Note: This is much cooler on desktop 😊
        </span>
      </div>
      <SwapColumnFeatures />
      {/* <div className="flex h-48 items-center justify-center bg-transparent">
        <span className="font-semibold uppercase text-white">Scroll up</span>
      </div> */}
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
          <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold">{featureInView.title}</p>
          <p className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
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
      className="relative rounded-xl shadow-xl"
      style={{
        ...featureInView.style,
        backgroundImage: `url(${featureInView.backgroundImage})`,
        backgroundSize: featureInView.size,
        minHeight: featureInView.minH,
        maxHeight: featureInView.maxH,
        minWidth: featureInView.minW,
        scale: featureInView.scale,
      }}
    >
      <div className="flex w-full gap-1.5 rounded-t-xl bg-transparent p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="p-2">
        <p className="font-mono text-sm text-slate-200"></p>
      </div>

      <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700"></span>
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
      "I'm Ryan McGatha, a recent Carolina Code School graduate, where I sharpened my development skills amidst a hands-on project that marked my transition from the culinary service of steaming bagels at Sully's Steamers to impacting its corporate strategies through software. Specializing in React, PostgreSQL, Tailwind CSS, and Supabase, my journey intertwined with developing a pivotal document management system for Sully's while I was immersed in coding education. This endeavor not only propelled operational efficiencies within Sully's but also underscored my ability to apply learning in real-time to support expansive business objectives. Now, as I step forward into my professional career, I'm enthusiastic about embracing new challenges and crafting innovative solutions.",
    contentPosition: "r",
    minH: "85vh",
    scale: ".8",
    size: "100%",
    backgroundImage:
      "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/IMG_0947.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL0lNR18wOTQ3LkpQRyIsImlhdCI6MTcxMjQ0MDEwMiwiZXhwIjoxNzQzOTc2MTAyfQ.LEmMyS8KVEkoeIw0tapivs-eoMLUQWPj1NdeQzr7PdY&t=2024-04-06T21%3A48%3A22.192Z",
  },
  {
    id: 2,
    callout: "Stack",
    title: "Engineered to Innovate",
    description:
      "My toolkit is powered by React, PostgreSQL, Tailwind CSS, and Supabase, enabling me to deliver full-stack solutions from concept to deployment. Whether it's front-end design or back-end architecture, my projects, like the Internal Franchise Document Management System for Sully's Steamers, showcase my ability to navigate and unite various technologies for comprehensive solutions.",

    contentPosition: "l",
    minH: "48vh",
    size: "100%",
    backgroundImage:
      "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/sashaqphotography-84.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3Nhc2hhcXBob3RvZ3JhcGh5LTg0LmpwZyIsImlhdCI6MTcxMjQzNjk2NCwiZXhwIjoxNzQzOTcyOTY0fQ.nDInK2dVSj9ZlkNNdIH8wQOu2Sy7CETdG8Uvt23S2EI&t=2024-04-06T20%3A56%3A04.194Z",
  },
  {
    id: 3,
    callout: "Project Spotlight",
    title: "Transforming Operations: Sully's Steamers",
    description:
      "A standout project in my budding career is the internal document management system developed for Sully's Steamers. My role spanned database design with PostgreSQL and Supabase to front-end development using React.js and Tailwind CSS, significantly enhancing operational efficiency and aiding the franchise's expansion.",
    contentPosition: "r",
    size: "100%",
    scale: "1.1",
    minH: "42vh",

    backgroundImage:
      "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/ss.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3NzLnBuZyIsImlhdCI6MTcxMjQ0MTEyMywiZXhwIjoxNzQzOTc3MTIzfQ.lAVdYe517nAjsuKcRKm8S7MywKtJl1NKzPIjIWIPgbA&t=2024-04-06T22%3A05%3A23.621Z",
  },
  {
    id: 4,
    callout: "Journey & Aspirations",
    title: "Beyond Code: A Vision Forward",
    description:
      "From leadership roles in retail to software development, my professional journey is a testament to growth and adaptability. The intensive Full Stack Web Development course at Carolina Code School has been a crucial milestone, sharpening my skills and fueling my ambition to tackle real-world challenges through innovative technology solutions.",
    contentPosition: "l",
    minH: "48vh",
    size: "100%",
    backgroundImage:
      "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/sashaqphotography-75.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3Nhc2hhcXBob3RvZ3JhcGh5LTc1LmpwZyIsImlhdCI6MTcxMjQ0MjQ5MiwiZXhwIjoxNzQzOTc4NDkyfQ.J8EkpY7baiNAI4RMOZVHkxjJaafGqQS-QueaA9VlDLw&t=2024-04-06T22%3A28%3A12.124Z",
  },
];
