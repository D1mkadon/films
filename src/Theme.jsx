import { green, grey, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material";
export const theme = createTheme({
  components: {
    // CTRL + SPACE to find the component you would like to override.
    // For most of them you will need to adjust just the root...
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            // color: "#3E68A8",
          },
          "& label.Mui-focused": {
            color: "white",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#3E68A8",
          },
          "& .MuiOutlinedInput-root": {
            maxWidth: "100px",
            "& fieldset": {
              borderColor: green[500],
              maxWidth: "100px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },

          "& .MuiSelect-select": {
            "& fieldset": { borderColor: "white" },
          },
          // "& .MuiOutlinedInput-notchedOutline": {
          //   borderColor: green[500],
          // },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          fontSize: "1rem",
        },
      },
    },
  },
  palette: {
    background: {
      default: "#fff",
      paper: "#fff",
    },
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
      contrastText: "#fff",
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
      secondary: green[500],
    },
    common: {
      black: "#1D1D1D",
      white: "#fff",
    },
    divider: "rgba(194, 224, 255, 0.08)",
    // secondary: yellow,
  },
  unstable_sxConfig: {
    borderColor: {
      themeKey: "palette.secondary",
    },
  },
});
