import { colors, createTheme } from "@mui/material";

const { common } = colors;

const designToken = {
  skyBlue: "#3778B3",
  greyBlue: "#8BABC4",
  skyBlueDark: "#012941",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: designToken.skyBlue,
    },
    secondary: {
      main: designToken.greyBlue,
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
          // Some CSS
          textTransform: "none",
        },
      },
      variants: [
        {
          props: {
            variant: "navigation",
          },
          style: {
            color: common.white,
            "&:hover": {
              backgroundColor: designToken.skyBlueDark,
            },
          },
        },

        {
          props: {
            variant: "navigation",
            color: "active",
          },
          style: {
            backgroundColor: "#012941",
          },
        },
      ],
    }, // Name of the slot
  },
});
