import { Link } from "react-router-dom";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";
import { MdMail, MdPhone } from "react-icons/md";

export const Header = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md">
      <MyLinks />
      <OutlineButton onClick={() => window.open("/resume.pdf")}>
        My Resume
      </OutlineButton>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center text-lg gap-4">
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      to="https://www.linkedin.com/in/ryanmcgatha"
      target="_blank"
      rel="nofollow"
    >
      <SiLinkedin />
    </Link>
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      to="https://github.com/RyanMcGatha"
      target="_blank"
      rel="nofollow"
    >
      <SiGithub />
    </Link>
    <a
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="mailto:ryanmcgatha@gmail.com"
    >
      <MdMail />
    </a>
    <a
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="tel:+18644346547"
    >
      <MdPhone />
    </a>
  </div>
);
