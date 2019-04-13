import React, { Component } from "react";
import "./App.css";
import routes from "./routes";

import { HashRouter } from "react-router-dom";

// import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
// import Wizard from "./components/Wizard/Wizard";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
