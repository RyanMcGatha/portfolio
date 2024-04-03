import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

import { HoverImageLinks } from "./HoverImageLinks";
import LogoHero from "./LogoHero";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative flex flex-col items-center min-h-screen  min-w-screen max-w-screen overflow-hidden bg-gray-950 px-4 pt-20 text-gray-200"
    >
      <div className="relative z-10 flex flex-col gap-5 items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-2.5 text-2xl">
          Actively Seeking Employment!
        </span>
        <h1 className="max-w-6xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center  font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-9xl md:leading-tight">
          Ryan McGatha <br /> Full Stack Developer
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-5xl md:leading-relaxed"></p>

        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          onClick={() => {
            window.location.href = "https://github.com/RyanMcGatha";
          }}
          className="group relative text-4xl flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          View Projects
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
        <div className=" pt-14">
          <LogoHero />
        </div>
      </div>
      {/* <HoverImageLinks /> */}

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={40} count={19500} factor={2} fade speed={1} />
        </Canvas>
      </div>
    </motion.section>
  );
};
