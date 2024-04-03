import { motion } from "framer-motion";
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
  SiLinkedin,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiSupabase,
  SiJavascript,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJenkinsx,
  SiGithub,
  SiFramer,
  SiFastapi,
} from "react-icons/si";

const LogoHero = () => {
  return (
    <section className="bg-transparent py-4">
      <div className="flex  overflow-hidden">
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
      <div className="flex overflow-hidden mt-4">
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
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 bg-gradient-to-br from-white to-gray-400 bg-clip-text transition-colors"
    >
      <Icon className="text-4xl md:text-5xl" />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={SiReact} />
    <LogoItem Icon={SiPython} />
    <LogoItem Icon={SiJavascript} />
    <LogoItem Icon={SiPostgresql} />
    <LogoItem Icon={SiHtml5} />
    <LogoItem Icon={SiCss3} />
    <LogoItem Icon={SiTailwindcss} />
    <LogoItem Icon={SiGithub} />
    <LogoItem Icon={SiFramer} />
    <LogoItem Icon={SiFastapi} />
    <LogoItem Icon={SiReact} />
    <LogoItem Icon={SiPython} />
    <LogoItem Icon={SiJavascript} />
    <LogoItem Icon={SiPostgresql} />
    <LogoItem Icon={SiHtml5} />
    <LogoItem Icon={SiCss3} />
    <LogoItem Icon={SiTailwindcss} />
    <LogoItem Icon={SiGithub} />
    <LogoItem Icon={SiFramer} />
    <LogoItem Icon={SiFastapi} />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={SiReact} />
    <LogoItem Icon={SiPython} />
    <LogoItem Icon={SiJavascript} />
    <LogoItem Icon={SiPostgresql} />
    <LogoItem Icon={SiHtml5} />
    <LogoItem Icon={SiCss3} />
    <LogoItem Icon={SiTailwindcss} />
    <LogoItem Icon={SiGithub} />
    <LogoItem Icon={SiFramer} />
    <LogoItem Icon={SiFastapi} />
    <LogoItem Icon={SiReact} />
    <LogoItem Icon={SiPython} />
    <LogoItem Icon={SiJavascript} />
    <LogoItem Icon={SiPostgresql} />
    <LogoItem Icon={SiHtml5} />
    <LogoItem Icon={SiCss3} />
    <LogoItem Icon={SiTailwindcss} />
    <LogoItem Icon={SiGithub} />
    <LogoItem Icon={SiFramer} />
    <LogoItem Icon={SiFastapi} />
  </>
);

export default LogoHero;
