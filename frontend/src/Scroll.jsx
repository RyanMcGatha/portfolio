import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";

const Example = () => {
  return (
    <>
      <div className="flex h-0 flex-col items-center justify-center ">
        <span className="font-semibold uppercase text-white"></span>
        <span className="mt-2 block rounded-full px-4 py-1 text-center font-medium text-white md:hidden"></span>
      </div>
      <SwapColumnFeatures />
      <div className="flex h-5 items-center justify-center ">
        <span className="font-semibold uppercase text-white"></span>
      </div>
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState(features[0]);

  return (
    <section className="relative mx-auto" style={{ maxWidth: "80vw" }}>
      <SlidingFeatureDisplay featureInView={featureInView} />

      <div className="-mt-[75vh] hidden md:block" />

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
      className="relative z-0 flex h-screen overflow-hidden"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-fit w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold">{featureInView.title}</p>
          <p className="">{featureInView.description}</p>
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
    <div className="relative max-h-96 w-full rounded-xl shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <img
        src={featureInView.img}
        alt=""
        style={{ height: featureInView.height, width: featureInView.width }}
      />
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
    img: "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/sashaqphotography-116.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3Nhc2hhcXBob3RvZ3JhcGh5LTExNi5qcGciLCJpYXQiOjE3MTI1Mjc1NDIsImV4cCI6MTc0NDA2MzU0Mn0.pzbirmzZk0_wDDrryKGR_4fcrSYX3vZEhAqqdnG4Wu4&t=2024-04-07T22%3A05%3A42.594Z",
  },
  {
    id: 2,
    callout: "Stack",
    title: "Engineered to Innovate",
    description:
      "My toolkit is powered by React, PostgreSQL, Tailwind CSS, and Supabase, enabling me to deliver full-stack solutions from concept to deployment. Whether it's front-end design or back-end architecture, my projects, like the Internal Franchise Document Management System for Sully's Steamers, showcase my ability to navigate and unite various technologies for comprehensive solutions.",
    contentPosition: "l",
    img: "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/sashaqphotography-84.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3Nhc2hhcXBob3RvZ3JhcGh5LTg0LmpwZyIsImlhdCI6MTcxMjQzNjk2NCwiZXhwIjoxNzQzOTcyOTY0fQ.nDInK2dVSj9ZlkNNdIH8wQOu2Sy7CETdG8Uvt23S2EI&t=2024-04-06T20%3A56%3A04.194Z",
  },
  {
    id: 3,
    callout: "Project Spotlight",
    title: "Transforming Operations: Sully's Steamers",
    description:
      "A standout project in my budding career is the internal document management system developed for Sully's Steamers. My role spanned database design with PostgreSQL and Supabase to front-end development using React.js and Tailwind CSS, significantly enhancing operational efficiency and aiding the franchise's expansion.",
    contentPosition: "r",
    img: "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/ss.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3NzLnBuZyIsImlhdCI6MTcxMjQ0MTEyMywiZXhwIjoxNzQzOTc3MTIzfQ.lAVdYe517nAjsuKcRKm8S7MywKtJl1NKzPIjIWIPgbA&t=2024-04-06T22%3A05%3A23.621Z",
  },

  {
    id: 4,
    callout: "Journey & Aspirations",
    title: "Beyond Code: A Vision Forward",
    description:
      "From leadership roles in retail to software development, my professional journey is a testament to growth and adaptability. The intensive Full Stack Web Development course at Carolina Code School has been a crucial milestone, sharpening my skills and fueling my ambition to tackle real-world challenges through innovative technology solutions.",
    contentPosition: "l",
    img: "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/sashaqphotography-75.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3Nhc2hhcXBob3RvZ3JhcGh5LTc1LmpwZyIsImlhdCI6MTcxMjQ0MjQ5MiwiZXhwIjoxNzQzOTc4NDkyfQ.J8EkpY7baiNAI4RMOZVHkxjJaafGqQS-QueaA9VlDLw&t=2024-04-06T22%3A28%3A12.124Z",
  },
];
