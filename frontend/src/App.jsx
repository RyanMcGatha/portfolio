import "./App.css";
import React from "react";
import { AuroraHero } from "./AuroraHero";
import { AuroraBottom } from "./AuroraBottom";

function App() {
  return (
    <div className="App">
      <div>
        <AuroraHero />
      </div>
      <div className="bottom">
        <AuroraBottom />
      </div>
    </div>
  );
}

export default App;
