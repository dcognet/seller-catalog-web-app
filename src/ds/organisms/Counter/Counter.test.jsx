import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import Counter from "./Counter.jsx";
import userEvent from "@testing-library/user-event";

const counter = (name) => screen.getByRole("heading", { level: 4, name: name });
const button = (name) => screen.getByRole("button", { name });

describe("Counter with default value", () => {
  it("renders the counter with the value 0", () => {
    render(<Counter />);

    expect(counter("0")).toBeInTheDocument();
  });

  test("with default values displays 2 buttons", () => {
    render(<Counter />);

    expect(button("+1")).toBeInTheDocument();
    expect(button("-1")).toBeInTheDocument();
  });

  test("with default values while clicking on the inc button", async () => {
    render(<Counter />);

    await userEvent.click(button("+1"));

    expect(counter("1")).toBeInTheDocument();
  });

  test("with default values while clicking on the dec button", async () => {
    render(<Counter />);

    await userEvent.click(button("-1"));

    expect(counter("-1")).toBeInTheDocument();
  });
});

describe("Counter with a step = 12", () => {
  test("renders the counter with the value", () => {
    render(<Counter step={12} />);

    expect(counter("0")).toBeInTheDocument();
  });

  test("with default values while clicking on the inc button", async () => {
    render(<Counter step={12} />);

    await userEvent.click(button("+12"));

    expect(counter("12")).toBeInTheDocument();
  });

  test("with default values while clicking on the dec button", async () => {
    render(<Counter step={12} />);

    await userEvent.click(button("-12"));

    expect(counter("-12")).toBeInTheDocument();
  });
});
