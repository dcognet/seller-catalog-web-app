import { ThemeProvider } from "@mui/material";
import { mswDecorator } from "msw-storybook-addon";
// import React from "react";
// import { theme } from "@/ds/Template/theme.jsx";

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [mswDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // decorators: [
  //   (Story) => (
  //     <ThemeProvider theme="default">
  //       <Story />
  //     </ThemeProvider>
  //   ),
  // ],
};

export default preview;
