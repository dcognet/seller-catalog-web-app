import Price from "./Price.jsx";

export default {
  title: "Price",
  component: Price,
  tags: ["autodocs"],
};

export const Main = {
  args: { value: 4 },
};

export const WithDollar = {
  args: { ...Main.args, currency: "USD" },
};
