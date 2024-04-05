import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const CardRow = () => {
  return (
    <div className="">
      <div className="flex h-0 items-center justify-center">
        <h1 className=" bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center  text-transparent md:text-8xl md:leading-tight sm:text-6xl sm:pt-4 sm:mb-6">
          Projects
        </h1>
        <span className="font-semibold uppercase text-neutral-500"></span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-0 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500"></span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minWidth: "100%",
          backgroundColor: "black",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default CardRow;

const cards = [
  {
    url: "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/ss.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3NzLnBuZyIsImlhdCI6MTcxMjMyMjc2MSwiZXhwIjoxNzQzODU4NzYxfQ.Vlv95t5VWVbrUpeZ9Umphwrgk4jvMNWjzG2wFXo6mtg&t=2024-04-05T13%3A12%3A41.146Z",
    title: "Sullys Steamers Document Manager",
    id: 1,
  },
  {
    url: "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/port-ss.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3BvcnQtc3MucG5nIiwiaWF0IjoxNzEyMzI1NTk4LCJleHAiOjE3NDM4NjE1OTh9.60rQNLfBqn8MxSm-mFfW2KTChQzUumPxTI7Bl8OkHWA&t=2024-04-05T13%3A59%3A58.780Z",
    title: "Personal Portfollio Website",
    id: 2,
  },
  {
    url: "",
    title: "Coming Soon!",
    id: 3,
  },
  {
    url: "",
    title: "Coming Soon!",
    id: 4,
  },
  {
    url: "",
    title: "Coming Soon!",
    id: 5,
  },
  {
    url: "",
    title: "Coming Soon!",
    id: 6,
  },
  {
    url: "",
    title: "Coming Soon!",
    id: 7,
  },
];
