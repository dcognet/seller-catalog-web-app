import { render, screen } from "@testing-library/react";
import ProductImage from "./ProductImage";

describe("Page", () => {
  it("render an image", () => {
    render(<ProductImage imageUrl="//im.png" name="Alt" />);

    expect(screen.getByAltText("Alt")).toHaveAttribute("src", "//im.png");
  });

  it.skip("renders correctly", () => {
    const { container } = render(
      <ProductImage imageUrl="//im.png" name="Alt" />
    );

    expect(container).toMatchSnapshot();
  });
});
