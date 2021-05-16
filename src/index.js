import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MultiStepForm from "./MultiStepForm";
import NavBar from "./NavBar";

ReactDOM.render(
  <div className="app">
    <div className="OuterWrapper">
      <NavBar />
      <MultiStepForm />
    </div>
  </div>,
  document.getElementById("root")
);
