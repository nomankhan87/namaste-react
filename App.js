import React from "react";
import ReactDOM from "react-dom/client";

//JSX (Transpiled before reach the JS) - Parcel - Babel

//JSX => babel transpile into  React.createElement => ReactElement-Js Object => HTMLElement(render)

//React Element
const heading = (
  <h1 className="head" tabIndex="5">
    Test react using JSX
  </h1>
);

const fn = () => true

const fn2 = () => {return true}

//React Functional Component
const HeadingComponent = () => {
    return <h1 className="head" tabIndex="5">Test react functional component</h1>
};

const HeadingComponent2 = () => ( //to write in multiple line we use reound bracket other wise use curly or no bracket
  <h1 className="head" tabIndex="5">
    Test react functional component
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
