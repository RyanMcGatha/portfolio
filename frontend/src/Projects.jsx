import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";

import {
  SiAtlassian,
  SiDribbble,
  SiGrubhub,
  SiKaggle,
  SiSlack,
  SiNike,
} from "react-icons/si";

const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex justify-center min-w-screen max-w-screen">
      <section
        className=" py-24 px-10 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden h-full"
        style={{ maxWidth: "90vw" }}
      >
        <div className="">
          <span className="rounded-full bg-indigo-600 px-4 py-2 text-4xl font-medium text-white">
            Projects
          </span>
          <h3 className="text-5xl font-semibold mt-5">
            Crafting Innovative Solutions
          </h3>
          <p className=" my-4">
            Each project below represents a unique challenge I've tackled,
            showcasing my skills in full-stack development. From enhancing
            operational efficiency with custom-built document management systems
            to engaging web applications, explore the breadth and depth of my
            work.
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
      </section>
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
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
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
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
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
    <div className="p-4 relative h-[450px] lg:h-[500px]">
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
  code,
  Icon,
  link,
  name,
  title,
  position,
  selected,
  setSelected,
  img,
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
  const background = position % 2 ? "" : "";
  const color = position % 2 ? "white" : "";

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
        background,
        color,
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
      className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between"
    >
      <img
        src={img}
        alt="Project screenshot"
        className="max-w-full h-auto object-cover"
      />
      <div className=" bg-slate-900 rounded-md">
        <span className="flex justify-center font-semibold text-2xl">
          {name}
        </span>

        <span
          onClick={() => {
            window.location.href = code;
          }}
          className="flex justify-center text-2xl underline hover:text-violet-600"
        >
          View Code
        </span>
      </div>
    </motion.div>
  );
};

export default StackedCardTestimonials;

const testimonials = [
  {
    img: "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/port-ss.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3BvcnQtc3MucG5nIiwiaWF0IjoxNzEyNDU5NTQ5LCJleHAiOjE3NDM5OTU1NDl9.OwMqYWRglVYAekG_qtIm-9bS-n_6MLkOR_SdyqKDlM8&t=2024-04-07T03%3A12%3A29.130Z",
    name: "Personal Portfollio Website",
    code: "https://github.com/RyanMcGatha/portfolio",
  },
  {
    img: "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/ss.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3NzLnBuZyIsImlhdCI6MTcxMjQ1OTYwMSwiZXhwIjoxNzQzOTk1NjAxfQ.VeB3ETrP_ShN_TvMEfWpnyxDR6wFDtWhkGCcGmAS7SU&t=2024-04-07T03%3A13%3A21.989Z",
    name: "Sullys Steamers Document Manager",
    code: "https://github.com/RyanMcGatha/sullys-franchise-management-system",
  },
  {
    img: "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/port-ss.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3BvcnQtc3MucG5nIiwiaWF0IjoxNzEyNDU5NTQ5LCJleHAiOjE3NDM5OTU1NDl9.OwMqYWRglVYAekG_qtIm-9bS-n_6MLkOR_SdyqKDlM8&t=2024-04-07T03%3A12%3A29.130Z",
    name: "Personal Portfollio Website",
    code: "https://github.com/RyanMcGatha/portfolio",
  },
  {
    img: "https://yhxzzowpqrerphvfdlkj.supabase.co/storage/v1/object/sign/imgs/ss.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3NzLnBuZyIsImlhdCI6MTcxMjQ1OTYwMSwiZXhwIjoxNzQzOTk1NjAxfQ.VeB3ETrP_ShN_TvMEfWpnyxDR6wFDtWhkGCcGmAS7SU&t=2024-04-07T03%3A13%3A21.989Z",
    name: "Sullys Steamers Document Manager",
    code: "https://github.com/RyanMcGatha/sullys-franchise-management-system",
  },
];
