import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Price from "./Price";

describe("Price", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("is US and dollar", () => {
    render(<Price value={100} currency="USD" />);

    expect(screen.getByText("$100.00")).toBeInTheDocument();
  });

  // test("is FR  and euros", () => {
  //   vi.stubEnv("navigator ", { language: "fr-FR" });

  //   render(<Price value={110} />);

  //   expect(screen.getByText("110,00€")).toBeInTheDocument();
  // });
});
