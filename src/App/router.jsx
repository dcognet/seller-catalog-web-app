import { createBrowserRouter } from "react-router-dom";
import { MainTemplate } from "../ds/Templates";
import { ProductsRoute } from "@/products/ProductsRoute";
import ProductRoute from "./../products/ProductRoute";
import { OrdersRoute } from "@/orders/OrdersPage";
import Page from "./../ds/Pages/";
import FavouritesRoute from "../favourites/";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <ProductsRoute />,
      },
      {
        path: "products",
        element: <ProductsRoute />,
      },
      {
        path: "products/:id",
        element: <ProductRoute />,
      },
      {
        path: "orders",
        element: <OrdersRoute />,
      },
      {
        path: "favourites",
        element: <FavouritesRoute />,
      },
      {
        path: "reports",
        element: <Page title="reports"></Page>,
      },
      {
        path: "marketplaces",
        element: <Page title="marketplaces"></Page>,
      },
      {
        path: "messages",
        element: <Page title="messages"></Page>,
      },
    ],
  },
]);
