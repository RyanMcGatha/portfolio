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

import { DisappearingFeatures } from "./CardRow";

import TerminalContact from "./Email";

import HoverDevCards from "./HoverImageLinks";

import Projects from "./Projects";

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
        backgroundAttachment: "fixed",
      }}
      className="relative flex flex-col align-center bg-gray-950  text-gray-200 p-2 pt-24"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-2 text-lg md:text-xl">
          Actively Seeking Employment!
        </span>
        <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-transparent leading-tight text-6xl md:text-7xl lg:text-8xl xl:text-9xl pt-5 mb-10 md:mb-16 lg:mb-20 xl:mb-24">
          Ryan McGatha <br /> Software Developer
        </h1>
      </div>
      <div className="z-10">
        <LogoHero />
        <Example />
        <Projects />
        {/* <TerminalContact /> */}
        <HoverDevCards />

        {/* <DisappearingFeatures /> */}
      </div>

      <div className="absolute inset-0 overflow-visible z-0">
        <Canvas>
          <Stars radius={50} count={99999} factor={8} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
