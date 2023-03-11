import { green, grey, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    action: {
      activatedOpacity: 0.24,
      active: green[200],
      disabled: green[500],
      disabledBackground: green[200],
      disabledOpacity: 0.38,
      focus: green[200],
      focusOpacity: 0.12,
      hover: green[200],
      hoverOpacity: 0.08,
      selected: green[200],
      selectedOpacity: 0.16,
    },
    primary: {
      light: grey[700],
      main: green[500],
      dark: pink[500],
      contrastText: grey[500],
    },
    secondary: {
      light: grey[700],
      main: grey[800],
      dark: grey[900],
      contrastText: grey[100],
    },
    text: {
      disabled: "#000000",
      icon: green[400],
      primary: green[500],
      secondary: "#fff",
    },
    // secondary: yellow,
  },
});
