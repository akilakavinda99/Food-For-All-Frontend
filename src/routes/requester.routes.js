import React from "react";
import { Route, Routes } from "react-router-dom";

import RequesterCard from "../components/requester/requesterDashboard";
import RequesterSignUp from "../components/requester/requesterSignUp";
import RequesterSignIn from "../components/requester/requesterSignIn"
import RequesterProfile from "../components/requester/requesterProfile";
import RequestStepOne from "../components/requester/request/requestStepOne";
import RequestStepTwo from "../components/requester/request/requestStepTwo";
import AboutUs from "../components/requester/aboutus";

export default function Requester() {
  return (
    <>
      <Routes>
        <Route path="/card" element={<RequesterCard />} />
        <Route path="/signup" element={<RequesterSignUp />} />
        <Route path="/signin" element={<RequesterSignIn />} />
        <Route path="/profile" element={<RequesterProfile />} />
        <Route path="request/step1" element={<RequestStepOne />} />
        <Route path="request/step2" element={<RequestStepTwo />} />
        <Route path="/us" element={<AboutUs />} />
      </Routes>
    </>
  )
}
