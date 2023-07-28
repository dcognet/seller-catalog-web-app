import ProductRoute from "./ProductRoute.jsx";
import { withRouter } from "storybook-addon-react-router-v6";
import CustomFavouritesContext from "../../contexts/";
import { QueryClientProvider } from "@tanstack/react-query";

export default {
  component: ProductRoute,
  tags: ["autodocs"],
  decorators: [
    withRouter,
    (Story) => (
      <CustomFavouritesContext.Provider>
        <Story />
      </CustomFavouritesContext.Provider>
    ),
    (Story) => (
      <QueryClientProvider>
        <Story />
      </QueryClientProvider>
    ),
  ],
  parameters: {
    reactRouter: {
      routePath: "/products/:id",
      routeParams: { id: "123" },
      outlet: <main>Main Content</main>,
    },
  },
};

export const Example = {};
