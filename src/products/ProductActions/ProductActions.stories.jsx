import { withRouter } from "storybook-addon-react-router-v6";
import CustomFavouritesContext from "../../contexts/";
import ProductActions from "./ProductActions.jsx";
import { initialize } from "msw-storybook-addon";

/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize();

export default {
  component: ProductActions,
  tags: ["autodocs"],
  decorators: [
    withRouter,
    (Story) => (
      <CustomFavouritesContext.Provider>
        <Story />
      </CustomFavouritesContext.Provider>
    ),
  ],
  parameters: {
    reactRouter: {
      routePath: "/",
      outlet: <main>Main Content</main>,
    },
  },
};

export const Example = {
  args: {
    id: 123,
  },
};
