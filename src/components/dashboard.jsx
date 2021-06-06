import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Sport from "./sportDashboard";
import Event from "./eventDashboard";
import Theater from "./theaterDashboard";
import Films from "./filmDashboard";
import AddSport from "./addSport";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="admin-dashboard">
        <Switch>
          <Route exact path="/admin/sport/add" component={AddSport} />
          <Route path="/admin/sport" component={Sport} />
          <Route path="/admin/event" component={Event} />
          <Route path="/admin/theater" component={Theater} />
          <Route path="/admin/film" component={Films} />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
