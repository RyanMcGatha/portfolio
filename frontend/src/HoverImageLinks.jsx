import React from "react";
import {
  FiCreditCard,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiUser,
  FiUsers,
} from "react-icons/fi";

const HoverDevCards = () => {
  return (
    <div className=" px-10 grid gap-8 lg:gap-4 overflow-hidden my-5">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <Card
          title="LinkedIn"
          subtitle="Click Me"
          href="https://www.linkedin.com/in/ryanmcgatha/"
          Icon={FiLinkedin}
        />
        <Card
          title="GitHub"
          subtitle="Click Me"
          href="https://github.com/RyanMcGatha"
          Icon={FiGithub}
        />
        <Card
          title="E-mail"
          subtitle="Click Me"
          href="mailto:ryanmcgatha@gmail.com"
          Icon={FiMail}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="  p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-slate-900"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-900 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;
