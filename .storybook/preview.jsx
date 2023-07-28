import { ThemeProvider } from "@mui/material";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  argTypes: {
    currency: {
      options: ["EUR", "USD"],
      control: { type: "radio" },
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
