import React from "react";
import ReactDOM from "react-dom/client";

//JSX (Transpiled before reach the JS) - Parcel - Babel

//JSX => babel transpile into  React.createElement => ReactElement-Js Object => HTMLElement(render)

/**
 *
 * it is and object become html which browser understand
 * React.createElement(Object) => HTML(Browser understand)
 */

//Composing component

const elem = <span>React Element </span>;

const Title = () => (
  <h1 className="head" tabIndex="5">
  {elem}  <br></br>
    Test react using JSX
  </h1>
);

const value = 1000;

const HeadingComponent = () => (
  <div id="container" tabIndex="5">
    {console.log('test value', value)}
    {value+22}
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="head" tabIndex="5">
        Test react functional component
    </h1>
  </div>
);

const des = (
  <div>Description
    <HeadingComponent/>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(des);
