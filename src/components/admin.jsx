import React, { Component } from "react";
import NavBar from "./navbar";
import Sidebar from "./sidebar";
import Dashboard from "./dashboard";

class Admin extends Component {
  state = {
    currentPage: 0,
  };
  render() {
    return (
      <div>
        <NavBar />
        <div
          style={{ marginTop: "50px" }}
          className="container admin-main-container"
        >
          <Sidebar />

          <Dashboard />
        </div>
      </div>
    );
  }
}

export default Admin;
