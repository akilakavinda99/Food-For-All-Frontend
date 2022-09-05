import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Donator from "./routes/donator.routes";
import Requester from "./routes/requester.routes";
import Organization from "./routes/organization.routes";
<<<<<<< HEAD
import Admin from "./routes/admin.routes";
=======
import Fund from "./routes/fund.routes";
>>>>>>> 1efcb636e45987e0765785766392881bce653f52

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/donator/*" element={<Donator />} />
      <Route path="/requester/*" element={<Requester />} />
      <Route path="/organization/*" element={<Organization />} />
<<<<<<< HEAD
      <Route path="/admin/*" element={<Admin />}/>
=======
      <Route path="/fund/*" element={<Fund />} />
>>>>>>> 1efcb636e45987e0765785766392881bce653f52
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
