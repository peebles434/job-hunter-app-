import React from "react";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import "./App.css";
import JobHunterApp from "./Components/JobHunterApp";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <JobHunterApp />
    </ThemeProvider>
  );
}

export default App;
