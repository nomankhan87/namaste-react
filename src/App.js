import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./../index.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Test from "./component/Test";
import RestrauntCard from "./component/RestrauntCard";
import RestrauntMenu from "./component/RestrauntMenu";
import Shimmer from "./component/Shimmer";
import UserContext from "../utils/UserContext";

const styleCard = {
  backgroundColor: "f0f0f0",
};

const Grocery = lazy(() => import("./component/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Akshay Saini",
    };
    setUserName(data.name);
  }, []);
  
  return (
    <>
      <Header />
      <UserContext.Provider value={{loggedInUser : userName, setUserName}}  >
      <Outlet />
      </UserContext.Provider>
      <Footer />
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children : [
      {
        path : "/",
        element : <Body />,
      },
      {
        path: "/about",
        element: <About />
      }, 
      {
        path: "/contact",
        element: <Contact />
      }, 
      {
        path: "/restraunt/:resId",
        element: <RestrauntMenu />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />
  },
  {
    path: "/test",
    element: <Test />
  }, 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
