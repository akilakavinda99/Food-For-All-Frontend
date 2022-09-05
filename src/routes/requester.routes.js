import React from "react";
import { Route, Routes } from "react-router-dom";

import RequesterCard from "../components/requester/requesterDashboard";
import RequesterSignUp from "../components/requester/requesterSignUp";
import RequesterSignIn from "../components/requester/requesterSignIn"
import RequesterProfile from "../components/requester/requesterProfile";

export default function Requester() {
  return (
    <>
      <Routes>
        <Route path="/card" element={<RequesterCard />} />
        <Route path="/signup" element={<RequesterSignUp />} />
        <Route path="/signin" element={<RequesterSignIn />} />
        <Route path="/profile" element={<RequesterProfile />} />
      </Routes>
    </>
  )
}
