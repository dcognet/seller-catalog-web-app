import { render } from "@testing-library/react";
import TestContext from "./TestContext.jsx";

const customRender = (ui, options) => {
  const { initialEntries, path, ...renderOptions } = options;
  render(
    <TestContext initialEntries={initialEntries} path={path}>
      {ui}
    </TestContext>,
    renderOptions
  );
};

export * from "@testing-library/react";
export { customRender as render };
