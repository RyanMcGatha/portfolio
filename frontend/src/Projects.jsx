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
    <div className="flex max-w-screen overflow-hidden justify-center ">
      <section className=" px-4 grid grid-cols-1 gap-8 overflow-hidden max-w-7xl">
        <div className="">
          <span className="rounded-full bg-indigo-600 px-2 px py-1.5 text-xs font-medium text-white">
            Projects
          </span>
          <h3 className="my-3 text-5xl font-bold">
            Crafting Innovative Solutions
          </h3>
          <p className="">
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
            className="h-1.5 w-full bg-slate-900 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-violet-600"
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
    <div className=" relative h-[70vh] md:h-[100vh]">
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
      className="absolute top-0 left-0 cursor-pointer flex flex-col"
    >
      <div className="relative h-fit w-full rounded-xl  md:px-10">
        <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <img src={img} alt="Project screenshot" className="" />
        <div className="w-full pt-3 flex flex-col bg-slate-900 rounded-md text-center text-nowrap items-center min-w-max">
          <span className=" min-h-fit md:text-xl justify-center md:px-5">
            {name}
          </span>

          <span
            onClick={() => {
              window.location.href = code;
            }}
            className="flex justify-center min-h-fit text-xl underline hover:text-violet-600 mb-2"
          >
            View Code
          </span>
        </div>

        <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700"></span>
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
