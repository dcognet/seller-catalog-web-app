import { render, screen } from "@testing-library/react";
import ProductRoute from "./ProductRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CustomFavouritesContext from "../../contexts/FavouritesContext";
import { RouterProvider, createMemoryRouter } from "react-router";

describe("Page", () => {
  it("render correctly", () => {
    const routes = [
      {
        path: "/product/:id",
        element: (
          <QueryClientProvider client={new QueryClient()}>
            <CustomFavouritesContext.Provider>
              <ProductRoute />
            </CustomFavouritesContext.Provider>
          </QueryClientProvider>
        ),
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/product/productId"],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole("heading", { name: "productId" })
    ).toBeInTheDocument();
  });
});
