import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import { DragCloseDrawerExample } from "./ProjectsModals";

const CardRow = () => {
  return (
    <div className="bg-transparent">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          <div className=" flex justify-center bg-gradient-to-br from-white to-gray-400 bg-clip-text  text-transparent md:text-9xl md:leading-tight sm:text-6xl min-w-screen">
            Projects
          </div>
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
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
    <section ref={targetRef} className="relative h-[200vh] bg-transparent">
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
      onClick={() => (window.location.href = card.link)}
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-gradient-to-br from-white/20 to-white/ "
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-150"
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
    link: "https://github.com/RyanMcGatha/sullys-franchise-management-system",
    url: "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/ss.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3NzLnBuZyIsImlhdCI6MTcxMjQ1MTMwMCwiZXhwIjoxNzQzOTg3MzAwfQ.gu87VASpGnNqp-y03hZX4atY3xRrRVVsXy9f3hkLXSU&t=2024-04-07T00%3A55%3A00.437Z",
    title: "Document Manager",
    id: 1,
  },
  {
    link: "https://github.com/RyanMcGatha/portfolio",
    url: "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/port-ss.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3BvcnQtc3MucG5nIiwiaWF0IjoxNzEyNDUxNjIyLCJleHAiOjE3NDM5ODc2MjJ9.LYBZ142XOXTBE_hdmFVfxEolMpygo9zrTuWLesUOEPU&t=2024-04-07T01%3A00%3A22.067Z",
    title: "Personal Portfollio",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Coming Soon",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Coming Soon",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Coming Soon",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Coming Soon",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Coming Soon",
    id: 7,
  },
];
