import React from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import primary from "@material-ui/core/colors/blue";
import secondary from "@material-ui/core/colors/pink";

const THEME = createMuiTheme({
  palette: {
    primary,
    secondary
  }
});

export default function ThemeWrapper({ children }) {
  return <MuiThemeProvider theme={THEME}>{children}</MuiThemeProvider>;
}
