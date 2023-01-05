import React, { Component } from "react";
import "./styles/App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import WorkInfo from "./components/Workinfo";
import Skills from "./components/Skills";
class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="appContainer">
        <div>Cv builder app</div>
        <GeneralInfo />
        <Education />
        <WorkInfo />
        <Skills />
      </div>
    );
  }
}

export default App;
