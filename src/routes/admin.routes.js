import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../pages/adminDashboard";
import AdminReqOrg from "../pages/admin/adminReqOrgList";
import AdminRegOrg from "../pages/admin/adminRegOrgList"
import AdminEditOrg from "../pages/admin/adminEditOrg";
import AdminLogin from "../components/admin/login/adminLogin";
import AdminReqFund from "../pages/admin/adminReqFund";
import AdminRegFund from "../pages/admin/adminRegFund";
import ViewSelectedFund from "../components/admin/Fund/fundview";
import GetUserList from "../components/admin/user/userlist";
import GetAllUserList from "../pages/admin/adminUserList";
import RequestedDonation from "../pages/admin/adminReqDonList";
import AcceptedDonation from "../pages/admin/adminAcceptedDonList";
import ReviewOrganization from "../pages/admin/adminReviewOrg";

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
          <Route path="/viewreqfund/:fundID" element={<ViewSelectedFund/>}/>
          <Route path="/getusers" element={<GetAllUserList/>}/>
          <Route path="/reqdon" element={<RequestedDonation/>}/>
          <Route path="/accepteddon" element={<AcceptedDonation/>}/>
          <Route path="/revieworg/:id" element={<ReviewOrganization/>}/>
        </Routes>
      </>
    );
  }
