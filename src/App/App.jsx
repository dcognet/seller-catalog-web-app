import { RouterProvider } from "react-router-dom";
import "./app.css";
import { router } from "./router.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient";

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
