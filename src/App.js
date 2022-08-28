import logo from "./logo.svg";
import "./App.css";
import Donator from "./routes/donator.routes";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
  Routes,
  Link,
} from "react-router-dom";
import Requester from "./routes/requester.routes";
import DonatorCard from "./components/donator/donatorCard";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" element={<Donator />} />
      </Switch>
    </>
  );
}

export default App;
