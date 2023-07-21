import { createBrowserRouter } from "react-router-dom";
import { MainTemplate } from "../ds/Templates";
import { ProductsPage } from "@/products/ProductsPage";
import { OrdersPage } from "@/orders/OrdersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
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
