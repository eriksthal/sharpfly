import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Registration from "./Routes/Registration/Registration.js";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#bc9b6a"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#ddd",
      main: "#000",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    }
    // error: will use the default color
  }
});

function App(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="content">
        <Router>
          <Registration path="registration" />
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
