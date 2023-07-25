import { createBrowserRouter } from "react-router-dom";
import { MainTemplate } from "../ds/Templates";
import { ProductsRoute } from "@/products/ProductsRoute";
import ProductRoute from "./../products/ProductRoute";
import { OrdersRoute } from "@/orders/OrdersPage";

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
        path: "/orders",
        element: <OrdersRoute />,
      },
      {
        path: "financial",
        element: <div>financial</div>,
      },
      {
        path: "reports",
        element: <div>reports</div>,
      },
      {
        path: "marketplaces",
        element: <div>marketplaces</div>,
      },
      {
        path: "messages",
        element: <div>Messages</div>,
      },
    ],
  },
]);
