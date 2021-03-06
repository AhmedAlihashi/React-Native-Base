import React from "react";
import AppState from "./src/core/context/AppState";
import Screens from "./src/core/Screens";

const App = () => (
  <AppState>
    <Screens />
  </AppState>
);

export default App;
