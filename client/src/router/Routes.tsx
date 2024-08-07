import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Menu from "../pages/menu/Menu";
import Error404 from "../pages/error/Error404";
import Header from "../components/header/Header";
import Summary from "../pages/summary/Summary";
import CheckoutWrapper from "../pages/checkout/CheckoutWrapper";
import CheckoutSucess from "../pages/checkout/CheckoutSucess";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: ":tableNumber",
    element: <Header />,
    children: [
      { path: "menu", element: <Menu /> },
      { path: "summary", element: <Summary /> },
      { path: "checkout", element: <CheckoutWrapper /> },
      { path: "success", element: <CheckoutSucess /> },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
