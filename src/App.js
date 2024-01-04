import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; //root page
import Body from "./components/Body"; //body page
import About from "./components/About"; //about page
import Contact from "./components/Contact"; //contact us page
import Error from "./components/Error"; //error page
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // react router dom used for routing calls
import { useEffect, useState } from "react";
//gives us many inbuilt features to make call using routes
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState();
  //authentication

  useEffect(() => {
    const data = {
      name: "Amit Yadav",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
          {/* this outlet will be filled with the child according the path (this will not be seen int the html) */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      // to make routes under app layout make children such that the page loads as per the url written
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
