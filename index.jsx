import { createRoot } from "react-dom/client";
import App from  "./App"
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import ErrorPage from "./component/ErrorPage";
import Services from "./component/Services";
import CountryDetail from "./component/CountryDetail";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage/>,
      children: [
            {
                path: "/",
                element: <Home/>
           },

            {
                path: "/services",
                element: <Services/>
           },
            {
                path: "/contact",
                element: <Contact/>
           },
            {
                path: "/:country",
                element: <CountryDetail />
           },

           
      ],
    },
    {
      future: {
        v7_startTransition: true,  // enable the flag
      },
    }

  ],

);

const root = createRoot(document.querySelector('#root'));
root.render(
    <>
        <RouterProvider router={router} />
    </>
    );