import { screen } from "@testing-library/react";

import ProductRoute from "./ProductRoute.jsx";
import CustomFavouritesContext from "../../contexts/FavouritesContext.jsx";
import { render } from "../../test-utils/index.jsx";
import { vi } from "vitest";

describe("Page", () => {
  it("render correctly", async () => {
    vi.stubGlobal("navigator", { language: "fr-FR" });
    render(<ProductRoute />, {
      initialEntries: ["/products/productId"],
      path: "/products/:id",
      wrapper: CustomFavouritesContext.Provider,
    });

    expect(screen.getByRole("progressbar")).toBeInTheDocument();

    expect(
      await screen.findByRole("heading", { name: "Product: product name" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Ajouter aux favoris" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("row", { name: /Prix 10,00.€/i })
    ).toBeInTheDocument();
  });
});
