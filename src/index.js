import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Donator from "./routes/donator.routes";
import Requester from "./routes/requester.routes";
import Organization from "./routes/organization.routes";
import Fund from "./routes/fund.routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/donator/*" element={<Donator />} />
      <Route path="/requester/*" element={<Requester />} />
      <Route path="/organization/*" element={<Organization />} />
      <Route path="/fund/*" element={<Fund />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
