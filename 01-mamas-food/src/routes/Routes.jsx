import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../components/Body";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    ],
    errorElement: <Error />,
  },
]);

export default Routes;
