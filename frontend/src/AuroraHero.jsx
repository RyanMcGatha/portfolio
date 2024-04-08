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

import StackedCardTestimonials from "./Projects";

import HoverDevCards from "./HoverImageLinks";

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
      className="relative sm:pt-5 flex flex-col align-center bg-gray-950  text-gray-200  "
    >
      <div className="relative z-10 flex flex-col items-center sm:mb-0 pt-10">
        <span className="mb-1.5 mt-16 inline-block rounded-full bg-gray-600/50 px-3 py-2 text-sm sm:mt-8 md:text-2xl">
          Actively Seeking Employment!
        </span>
        <h1 className="mb-20 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center  text-transparent md:text-9xl md:leading-tight text-6xl sm:pt-4 sm:mb-6">
          Ryan McGatha <br /> Software Developer
        </h1>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          className="group mt-5 mb-10 relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 md:px-6 md:py-3 md:text-4xl md:gap-2 md:rounded-8xl md:shadow-lg sm:text-xl sm:mt-3"
          onClick={() => {
            window.location.href = "https://www.linkedin.com/in/ryanmcgatha/";
          }}
        >
          Click For Greatness!
        </motion.button>
      </div>
      <LogoHero />
      <div className="z-10">
        <Example />
        <StackedCardTestimonials />
        <TerminalContact />
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
