import React, { Component } from "react";
import "./App.css";
import Admin from "./components/admin";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "#F8F9FA" }}>
          <Admin className="bg-success" />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
