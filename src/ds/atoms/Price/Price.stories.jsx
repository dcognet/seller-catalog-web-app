import Price from "./Price.jsx";

export default {
  title: "Price",
  component: Price,
  tags: ["autodocs"],
  argTypes: {
    currency: {
      options: ["EUR", "USD"],
      control: { type: "radio" },
    },
  },
};

export const Main = {
  args: { value: 4 },
};

export const WithDollar = {
  args: { ...Main.args, currency: "USD" },
};
