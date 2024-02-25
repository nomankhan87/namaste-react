import React from "react";
import ReactDOM from "react-dom/client";

//JSX (Transpiled before reach the JS) - Parcel - Babel

//JSX => babel transpile into  React.createElement => ReactElement-Js Object => HTMLElement(render)
/**
 * 
 * it is and object become html which browser understand
 * React.createElement(Object) => HTML(Browser understand)
 */

//Rendering React element with JSX

const jsxHHeading = (<h1 className="head" tabIndex="5">Test react using JSX</h1>);

console.log(jsxHHeading);

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(jsxHHeading);
