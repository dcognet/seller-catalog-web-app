import { withRouter } from "storybook-addon-react-router-v6";
import MainTemplate from "./MainTemplate.jsx";

export default {
  component: MainTemplate,
  tags: ["autodocs"],
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
      outlet: <main>Main Content</main>,
    },
  },
};

export const Example = {};
