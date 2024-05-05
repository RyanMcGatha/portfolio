import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { DragCloseDrawerExample } from "./ProjectsModals";

export const DisappearingFeatures = () => {
  return (
    <>
      <div className="relative h-fit">
        <Features />
      </div>

      <div className="h-[10vh]" />
    </>
  );
};

const Features = () => {
  return (
    <div
      className="relative mx-auto grid h-full w-full grid-cols-1 gap-8 px-4 md:grid-cols-2"
      style={{ maxWidth: "80vw" }}
    >
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy = () => {
  return (
    <div className="flex h-fit w-full flex-col justify-center py-12 md:sticky md:top-0 md:h-screen">
      <span className="w-fit rounded-full bg-indigo-500 px-4 py-2 text-sm uppercase text-indigo-100">
        My Projects
      </span>
      <h2 className="mb-4 mt-2 text-5xl font-medium leading-tight">
        Crafting Innovative Solutions
      </h2>
      <p className="text-lg">
        Each project below represents a unique challenge I've tackled,
        showcasing my skills in full-stack development. From enhancing
        operational efficiency with custom-built document management systems to
        engaging web applications, explore the breadth and depth of my work.
      </p>
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageUrls = [
    "./three.png",
    "./three.png",
    "./three.png",
    "./three.png",
  ];

  const projectUrls = [
    "https://github.com/RyanMcGatha/portfolio",
    "https://github.com/RyanMcGatha/sullys-franchise-management-system",
    "https://github.com/RyanMcGatha/portfolio",
    "https://github.com/RyanMcGatha/sullys-franchise-management-system",
  ];

  return (
    <div className="relative w-full">
      <Gradient />
      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        {imageUrls.map((img, index) => (
          <CarouselItem
            key={index}
            scrollYProgress={scrollYProgress}
            position={index + 1}
            numItems={imageUrls.length}
            img="./three.png"
            // url={projectUrls[index]}
          />
        ))}
      </div>
      <Buffer />
    </div>
  );
};

const CarouselItem = ({ img, url, scrollYProgress, position, numItems }) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <motion.div
        style={{ opacity, scale }}
        className="grid aspect-video w-full shrink-0 place-content-center rounded-2xl bg-neutral-900 p-4"
      >
        <div className="flex w-full justify-center my-1 mb-3">
          <DragCloseDrawerExample />
        </div>
        <img
          src="./three.png"
          alt="Project screenshot"
          className="max-w-full h-auto rounded-2xl object-cover"
        />
      </motion.div>
    </a>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full md:block" />
);
const Buffer = () => <div className="h-24 w-full md:h-48" />;
