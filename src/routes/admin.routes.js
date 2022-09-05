import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../pages/adminDashboard";

export default function Donator() {
    return (
      <>
        <Routes>
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
      </>
    );
  }
