import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Menu from "../pages/menu/Menu";
import Error404 from "../pages/error/Error404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "menu/:tableNumber",
    element: <Menu />,
  },
]);
