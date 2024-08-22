import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/********Starting from scratch*************/

//JSX (transpiled before it reaches the JS engine) which is done by Parcel with the help of Babel library

//React Functional Component
// const Title = () => (
//   <h1 className="head" tabIndex="5">
//     Namaste React Title Component
//   </h1>
// );

//Component Composition
// const HeadingComponent = () => (
//   <div id="container">
//     {Title()}
//     <Title />
//     <Title></Title>
//     <h1 className="heading">Namaste React Functional Component 🚀</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

//REstaurant Card Compponent

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

//creating routing configuration for us
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
