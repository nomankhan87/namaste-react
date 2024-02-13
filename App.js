import React from "react";
import ReactDOM from "react-dom/client";

/**
 * 
 * it is and object become html which browser understand
 * React.createElement(Object) => HTML(Browser understand)
 */
const parent = React.createElement(
    "div",
    {id: "parent"},[
        React.createElement("div", {id: "child"},[
            React.createElement("h1", {},("This is Heading")),
            React.createElement("h2", {},("i am h2"))
        ]),
        React.createElement("div", {id: "child2"},[
            React.createElement("h1", {},("i am h1")),
            React.createElement("h2", {},("i am h2"))
        ]),
    ]
)

const heading = React.createElement(
    "h1", 
    {id:"head", xyz:"abc"},
    "Hello");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(parent);
