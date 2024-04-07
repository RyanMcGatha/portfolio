import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const DisappearingFeatures = () => {
  return (
    <>
      <div className="relative h-fit">
        <Features />
      </div>

      <div className="h-[50vh]" />
    </>
  );
};

const Features = () => {
  return (
    <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
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
    "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/port-ss.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3BvcnQtc3MucG5nIiwiaWF0IjoxNzEyNDU5NTQ5LCJleHAiOjE3NDM5OTU1NDl9.OwMqYWRglVYAekG_qtIm-9bS-n_6MLkOR_SdyqKDlM8&t=2024-04-07T03%3A12%3A29.130Z",
    "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/ss.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3NzLnBuZyIsImlhdCI6MTcxMjQ1OTYwMSwiZXhwIjoxNzQzOTk1NjAxfQ.VeB3ETrP_ShN_TvMEfWpnyxDR6wFDtWhkGCcGmAS7SU&t=2024-04-07T03%3A13%3A21.989Z",
    "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/port-ss.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3BvcnQtc3MucG5nIiwiaWF0IjoxNzEyNDU5NTQ5LCJleHAiOjE3NDM5OTU1NDl9.OwMqYWRglVYAekG_qtIm-9bS-n_6MLkOR_SdyqKDlM8&t=2024-04-07T03%3A12%3A29.130Z",
    "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/ss.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3NzLnBuZyIsImlhdCI6MTcxMjQ1OTYwMSwiZXhwIjoxNzQzOTk1NjAxfQ.VeB3ETrP_ShN_TvMEfWpnyxDR6wFDtWhkGCcGmAS7SU&t=2024-04-07T03%3A13%3A21.989Z",
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
            img={img}
            url={projectUrls[index]}
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
        <img
          src={img}
          alt="Project screenshot"
          className="max-w-full h-auto rounded-2xl"
        />
      </motion.div>
    </a>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full md:block" />
);
const Buffer = () => <div className="h-24 w-full md:h-48" />;
