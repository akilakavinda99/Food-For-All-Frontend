import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../pages/adminDashboard";
import AdminReqOrg from "../pages/admin/adminReqOrgList";
import AdminRegOrg from "../pages/admin/adminRegOrgList"
import AdminEditOrg from "../pages/admin/adminEditOrg";
import AdminLogin from "../components/admin/login/adminLogin";
import AdminReqFund from "../pages/admin/adminReqFund";
import AdminRegFund from "../pages/admin/adminRegFund";

export default function Donator() {
    return (
      <>
        <Routes>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/reqorglist" element={<AdminReqOrg/>}/>
          <Route path="/regorglist" element={<AdminRegOrg/>}/>
          <Route path="/reqfund" element={<AdminReqFund/>}/>
          <Route path="/regfund" element={<AdminRegFund/>}/>
          <Route path="/editorg/:id" element={<AdminEditOrg/>}/>
          <Route path="/login" element={<AdminLogin/>}/>
        </Routes>
      </>
    );
  }
