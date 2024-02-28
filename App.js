import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
  <h1 id="heading" tabIndex="5">
    "React Course Beginner🐣"
  </h1>
);

const number = 1000;
const elem = <span>React....React....React!!!</span>;

const TitleComponent = () => (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste Varshith!
  </h1>
);

// React Component
const HeadingComponent = () => (
  <div id="container">
    <h2>{number}</h2>
    <TitleComponent/>
    {TitleComponent()}
    <h1 id="heading">React Course Beginner Functional Component🦁</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
