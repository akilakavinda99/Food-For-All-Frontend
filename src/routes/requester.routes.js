import React from "react";
import { Route, Routes } from "react-router-dom";

import RequesterCard from "../components/requester/requesterDashboard";
import RequesterSignUp from "../components/requester/requesterSignUp";
import RequesterSignIn from "../components/requester/requesterSignIn";
import RequesterProfile from "../components/requester/requesterProfile";
import RequesterProfileUpdate from "../components/requester/updateProfileDetails";
import MyRequests from "../components/requester/myRequests";
import AllRequests from "../components/requester/allRequests";

import NewRequest from "../pages/requester/newRequest";
import StepContext from "../components/requester/request/stepContex";

export default function Requester() {
  return (
    <>
      <Routes>
        <Route path="/card" element={<RequesterCard />} />
        {/* <Route path="/signup" element={<RequesterSignUp />} />
        <Route path="/signin" element={<RequesterSignIn />} /> */}
        <Route
          path="/profile/631aa3f99d2dc36d4c12a8f0"
          element={<RequesterProfile />}
        />
        <Route
          path="/profile/update/631aa3f99d2dc36d4c12a8f0"
          element={<RequesterProfileUpdate />}
        />
        <Route path="/my/requests" element={<MyRequests />} />
        <Route path="/all/requets" element={<AllRequests />} />

        <Route
          path="/new"
          element={
            <StepContext>
              <NewRequest />
            </StepContext>
          }
        />
      </Routes>
    </>
  );
}
