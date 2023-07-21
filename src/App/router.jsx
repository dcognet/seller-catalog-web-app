import { createBrowserRouter } from "react-router-dom";
import { Template } from "@/Template";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        index: true,
        element: <div>Hello world!</div>,
      },
      {
        path: "/orders",
        element: <div>Hello world!</div>,
      },
      {
        path: "financial",
        element: <div>Hello world!</div>,
      },
      {
        path: "reports",
        element: <div>Hello world!</div>,
      },
      {
        path: "marketplaces",
        element: <div>Hello world!</div>,
      },
      {
        path: "messages",
        element: <div>Hello world!</div>,
      },
    ],
  },
]);
