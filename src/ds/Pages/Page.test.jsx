import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Page from "./Page";
import { expect } from "chai";

const EmptyComponent = () => <span data-testid="empty-component" />;

describe("Page", () => {
  it("render the title", () => {
    render(
      <Page title={"test title"}>
        <EmptyComponent />
      </Page>
    );

    expect(screen.getByRole("heading"), {
      name: "test title",
    }).toBeInTheDocument();
  });

  it("render the children", () => {
    render(
      <Page title={"test title"}>
        <EmptyComponent />
      </Page>
    );

    expect(screen.getByTestId("empty-component")).toBeInTheDocument();
  });
});
