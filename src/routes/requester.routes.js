import React from "react";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import DonatorCard from "../components/donator/donatorCard";
import DonatorDashboard from "../components/donator/donatorDashboard";
import RequesterCard from "../components/requester/requesterDashboard";

export default function Requester() {
  <>
    <Switch>
      <Route exact path="/requester/card">
        <RequesterCard />
      </Route>
    </Switch>
  </>;
}
