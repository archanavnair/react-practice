import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

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

//Lazy Loading

const Grocery = lazy(() => import("./components/Grocery")); //path to Grocery component will be gven inside

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

//creating routing configuration for us
const appRouter = createBrowserRouter([
  //important - routing - child routes
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        //wrap inside Suspense component to handle the delay in fetching the bundle
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId", // this is how you create Dynamic Routing
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
