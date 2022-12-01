import React, { Component } from "react";
import "./App.css";
import "./styles/style.scss";
import "./styles/override.scss";
import "./styles/story.scss";
import Main from "./views/1main";
import Benefits from "./views/2benefits";
import Didyouknow from "./views/3didyouknow";
import Hotorcold from "./views/4hotorcold";
import Contact from "./views/5contact";
import Footer from "./views/6footer";
import Copyright from "./views/7copyright";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Benefits />
        <Didyouknow />
        <Hotorcold />
        <Contact />
        <Footer />
        <Copyright />
      </div>
    );
  }
}

export default App;
