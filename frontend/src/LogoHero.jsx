import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import {
  SiNike,
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBox,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiBurton,
  SiBmw,
  SiHeroku,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";

const LogoHero = () => {
  return (
    <section className="">
      <div className="flex translate-y-[50%] rotate-[7deg] scale-110 overflow-hidden border-y-4 border-neutral-900  bg-gradient-to-br from-white to-gray-400">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex -translate-y-[50%] -rotate-[7deg] scale-110 overflow-hidden border-y-4 border-neutral-900  bg-gradient-to-br from-white to-gray-400">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon, name, link }) => {
  return (
    <a
      href={link}
      rel="nofollow"
      target="_blank"
      className="flex items-center justify-center gap-4 px-4 py-4 text-black transition-colors hover:bg-neutral-200 md:py-6"
    >
      <Icon className="text-3xl md:text-4xl" />
      <span className="whitespace-nowrap text-2xl font-semibold uppercase md:text-3xl">
        {name}
      </span>
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem
      Icon={SiLinkedin}
      name="LinkedIn"
      link={"https://www.linkedin.com/in/ryanmcgatha/"}
    />
    <LogoItem
      Icon={SiGithub}
      name="Git Hub"
      link={"https://github.com/RyanMcGatha"}
    />
    <LogoItem
      Icon={MdEmail}
      name="Email"
      link={"mailto:ryanmcgatha@gmail.com"}
    />
    <LogoItem
      Icon={SiLinkedin}
      name="LinkedIn"
      link={"https://www.linkedin.com/in/ryanmcgatha/"}
    />
    <LogoItem
      Icon={SiGithub}
      name="Git Hub"
      link={"https://github.com/RyanMcGatha"}
    />
    <LogoItem
      Icon={MdEmail}
      name="Email"
      link={"mailto:ryanmcgatha@gmail.com"}
    />
    <LogoItem
      Icon={SiLinkedin}
      name="LinkedIn"
      link={"https://www.linkedin.com/in/ryanmcgatha/"}
    />
    <LogoItem
      Icon={SiGithub}
      name="Git Hub"
      link={"https://github.com/RyanMcGatha"}
    />
    <LogoItem
      Icon={MdEmail}
      name="Email"
      link={"mailto:ryanmcgatha@gmail.com"}
    />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem
      Icon={SiLinkedin}
      name="LinkedIn"
      link={"https://www.linkedin.com/in/ryanmcgatha/"}
    />
    <LogoItem
      Icon={SiGithub}
      name="Git Hub"
      link={"https://github.com/RyanMcGatha"}
    />
    <LogoItem
      Icon={MdEmail}
      name="Email"
      link={"mailto:ryanmcgatha@gmail.com"}
    />
    <LogoItem
      Icon={SiLinkedin}
      name="LinkedIn"
      link={"https://www.linkedin.com/in/ryanmcgatha/"}
    />
    <LogoItem
      Icon={SiGithub}
      name="Git Hub"
      link={"https://github.com/RyanMcGatha"}
    />
    <LogoItem
      Icon={MdEmail}
      name="Email"
      link={"mailto:ryanmcgatha@gmail.com"}
    />
    <LogoItem
      Icon={SiLinkedin}
      name="LinkedIn"
      link={"https://www.linkedin.com/in/ryanmcgatha/"}
    />
    <LogoItem
      Icon={SiGithub}
      name="Git Hub"
      link={"https://github.com/RyanMcGatha"}
    />
    <LogoItem
      Icon={MdEmail}
      name="Email"
      link={"mailto:ryanmcgatha@gmail.com"}
    />
  </>
);

export default LogoHero;
