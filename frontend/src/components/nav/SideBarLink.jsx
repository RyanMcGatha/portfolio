import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

export const SideBarLink = ({
  setSelected,
  selected,
  children,
  href,
  value,
  offset = 0,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition - offset,
        behavior: "smooth",
      });
      setSelected(value);
    }
  };

  return (
    <MotionLink
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      to={href}
      onClick={handleClick}
      className={`writing-vertical h-24 shrink-0 flex items-center justify-center border-r-2 text-sm transition-all w-full ${
        selected === value
          ? "bg-zinc-800 border-indigo-500 opacity-100"
          : "border-transparent hover:border-r-zinc-50 opacity-50 hover:bg-zinc-900"
      }`}
    >
      {children}
    </MotionLink>
  );
};
