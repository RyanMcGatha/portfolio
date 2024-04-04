import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

import LogoHero from "./LogoHero";

import "./index.css";

import Example from "./Scroll";
import CardRow from "./CardRow";

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
  const textShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
        backgroundAttachment: "fixed",
      }}
      className="relative sm:pt-5 overflow-visible flex flex-col align-center bg-gray-950  text-gray-200"
    >
      <LogoHero />

      <div className="relative z-10 flex flex-col items-center sm:mb-0 ">
        <span className="mb-1.5 mt-16 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm sm:mt-8">
          Actively Seeking Employment!
        </span>
        <h1 className="mb-20 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center  text-transparent md:text-8xl md:leading-tight sm:text-6xl sm:pt-4 sm:mb-6">
          Ryan McGatha <br /> Software Developer
        </h1>
        <motion.button
          style={{
            textShadow,
            backgroundClip: "text",
            color: "white",
            fillter: "drop-shadow(0px 4px 24px #13FFAA)",
          }}
          whileHover={{
            scale: 1.1,
          }}
          className="group md:mb-40 relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 md:scale-150 md:px-6 md:py-3 md:text-4xl md:gap-2 md:rounded-8xl md:shadow-lg sm:text-xl sm:mt-3"
          onClick={() => {
            window.scrollTo({
              top: window.scrollTo(1000, 1000),
              behavior: "smooth",
            });
          }}
        >
          Scroll To Start
        </motion.button>
        <div className="pt-10 z-0 overflow-hidden max-h-0 max-w-0 sm:max-h-full sm:mb-8 sm:mt-7">
          <LogoHero />
        </div>
      </div>
      <div className=" z-10 scrollbar-hidden bg-transparentx max-w-screen h-full ">
        <Example />
      </div>
      <div>
        <CardRow />
      </div>

      <div className="absolute inset-0 z-0 overflow-visible">
        <Canvas>
          <Stars radius={60} count={99999} factor={3} fade speed={1} />
        </Canvas>
      </div>
    </motion.section>
  );
};
