import React from "react";
import "./styles/App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import WorkInfo from "./components/Workinfo";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="appContainer">
      <div className="projectTitle">Cv builder app</div>
      <GeneralInfo />
      <Education />
      <WorkInfo />
      <Skills />
    </div>
  );
}

export default App;
