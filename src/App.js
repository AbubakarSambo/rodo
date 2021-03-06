import React from "react";
import "./App.scss";
import Header from "./components/header";
import Intro from "./components/intro";
import Benefits from "./components/benefits";
import Didyouknow from "./components/didyouknow";
import Howto from "./components/howto";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="section-1">
        <Header />
        <Intro />
      </div>
      <Benefits />
      <Didyouknow />
      <Howto />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
