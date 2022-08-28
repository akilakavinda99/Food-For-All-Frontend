import React from "react";
import {
  Route,
  Redirect,
  Routes,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import DonatorCard from "../components/donator/donatorCard";
import DonatorDashboard from "../components/donator/donatorDashboard";

export default function Donator() {
  <>
    <Switch>
      <Route exact path="/donator/createDonation">
        <DonatorDashboard />
      </Route>
      <Route exact path="/donator/card">
        <DonatorCard />
      </Route>
    </Switch>
  </>;
}
