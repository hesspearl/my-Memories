import { createMuiTheme } from "@material-ui/core/styles";
import { lightBlue, red, grey } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: { main: lightBlue[400], dark: lightBlue[900] },
    secondary: { light: red[300], main: red[900] },
    text: { primary: grey[900], secondary: grey[50] },
  },
  typography: {

    fontFamily: "Hachi Maru Pop",
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
