import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../pages/adminDashboard";
import AdminReqOrg from "../pages/admin/adminReqOrgList";

export default function Donator() {
    return (
      <>
        <Routes>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/reqorglist" element={<AdminReqOrg/>}/>
        </Routes>
      </>
    );
  }
