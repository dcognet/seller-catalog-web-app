import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Price from "./Price.jsx";

describe("Price", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("is US and dollar", () => {
    render(<Price value={100} currency="USD" />);

    expect(screen.getByText("$100.00")).toBeInTheDocument();
  });

  test.skip("is FR  and euros", () => {
    vi.stubGlobal("navigator", { language: "fr-FR" });

    render(<Price value={110} />);

    expect(screen.getByText("110,00€")).toBeInTheDocument();
  });

  test("currency not valid", () => {
    render(<Price value={110} currency="ddd" />);

    expect(screen.getByText("$110.00")).toBeInTheDocument();
  });
});
