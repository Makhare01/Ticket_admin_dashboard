import React, { Component } from "react";
import NavBar from "./navbar";
import Sidebar from "./sidebar";
import Dashboard from "./dashboard";
import { Switch, Route } from "react-router-dom";

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
          <Switch>
            <Route exact path="/admin/sport">
              <Sidebar active="1" />
            </Route>
            <Route exact path="/admin/sport/:id">
              <Sidebar active="1" />
            </Route>

            <Route exact path="/admin/event">
              <Sidebar active="2" />
            </Route>

            <Route exact path="/admin/theater">
              <Sidebar active="3" />
            </Route>

            <Route exact path="/admin/film">
              <Sidebar active="4" />
            </Route>

            <Route>
              <Sidebar active="0" />
            </Route>
          </Switch>

          <Dashboard />
        </div>
      </div>
    );
  }
}

export default Admin;
