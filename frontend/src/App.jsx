import React from "react";
import { SideBar } from "./components/nav/SideBar";
import { Header } from "./components/nav/Header";
import { About } from "./components/about/About";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";
import { Experience } from "./components/experience/Experience";
import { Contact } from "./components/contact/Contact";
import ChippChatWidget from "./components/Widget";
function App() {
  return (
    <div className="grid grid-cols-[54px_1fr]">
      <SideBar />
      <main>
        <Header />
        <div className="mx-auto overflow-visible space-y-32 pb-24">
          <Hero />
        </div>
        <div className="mx-auto max-w-5xl overflow-visible px-4 md:px-8 space-y-32 pb-24">
          <About />
          <Projects />
          <Experience />

          <Contact />
        </div>
        <div className="max-w-1 mx-auto">
          <ChippChatWidget />
        </div>
      </main>
    </div>
  );
}

export default App;
