import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b3a696",
      light: "#c4beb9",
      dark: "#b4a697",
      contrastText: "#fff",
    },
    secondary: {
      main: "#eeeff3",
      dark: "#57696d",
      contrastText: "#c4beb9",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
      primary: "#faf9f7",
      secondary: "#869fae4a",
      tertiary: "#2d4558",
    },
    text: {
      default: "#fff",
      primary: "#444",
      secondary: "#57696d",
      primaryDark: "#a05d25",
    },
  },
  // typography: {
  //   fontFamily: [
  //     'Roboto',
  //     'cursive',
  //     '-apple-system',
  //     'BlinkMacSystemFont',
  //     '"Segoe UI"',
  //     '"Helvetica Neue"',
  //     'Arial',
  //     'sans-serif',
  //     '"Apple Color Emoji"',
  //     '"Segoe UI Emoji"',
  //     '"Segoe UI Symbol"',
  //   ].join(','),
  // },
});

export default theme;
