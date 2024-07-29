import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Menu from "../pages/menu/Menu";
import Error404 from "../pages/error/Error404";
import Header from "../components/header/Header";
import Summary from "../pages/summary/Summary";

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
    path: ":tableNumber",
    element: <Header />,
    children: [
      { path: "menu", element: <Menu /> },
      { path: "summary", element: <Summary /> },
    ],
  },
]);
