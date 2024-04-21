import React from "react";
import ReactDOM from "react-dom/client";
import "./../index.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

const styleCard = {
  backgroundColor: "f0f0f0",
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
