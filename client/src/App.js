import React from "react";
import "./App.css";
import { Router /*Link*/ } from "@reach/router";
import Home from "./Routes/Home/Home";
import Registration from "./Routes/Registration/Registration.js";
import BackOffice from "./Routes/BackOffice/BackOffice.js";
import Classes from "./Routes/Classes/Classes.js";
// import NavigationBar from './components/NavigationBar/NavigationBar.js';
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
      <div>
        {/* <nav>
        <NavigationBar logo="logo">
          <Link to="registration">Online Registration</Link>
          <Link to="admin">Back Office</Link>
        </NavigationBar>
      </nav> */}
        <div className="content">
          <Router>
            <Home path="/" />
            <Registration path="registration" />
            <BackOffice path="admin" />
            <Classes path="classes/:classId" />
          </Router>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
