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
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <h1>Hello App</h1>
    </div>
  );
}

export default App;
