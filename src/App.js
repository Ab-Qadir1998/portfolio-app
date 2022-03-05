import React from "react";
import "./App.css";
import { Banner, About, Portfolio, Contact } from "./components";
const App = () => {
  return (
    <div>
      <Banner />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
