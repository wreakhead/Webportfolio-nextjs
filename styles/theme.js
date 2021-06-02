import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#b2ff59",
      main: "#76ff03",
      dark: "#64dd17",
      contrastText: "#212121",
    },
    secondary: {
      light: "#b2ff59",
      main: "#76ff03",
      dark: "#64dd17",
      contrastText: "#212121",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#424242",
    },
  },
});

export default theme;
