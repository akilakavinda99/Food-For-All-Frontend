import React from "react";
import { Route, Routes } from "react-router-dom";

import RequesterProfile from "../components/requester/requesterProfile";
import RequesterProfileUpdate from "../components/requester/updateProfileDetails";
import MyRequests from "../components/requester/myRequests";
import AllRequests from "../pages/requester/viewAllRequests";

import NewRequest from "../pages/requester/newRequest";
import StepContext from "../components/requester/request/stepContex";
import ViewRequest from "../components/requester/viewRequest";

export default function Requester() {
  return (
    <>
      <Routes>
        <Route path="/profile/:userId" element={<RequesterProfile />} />
        <Route path="/profile/update/:userId" element={<RequesterProfileUpdate/>} />
        <Route path="/my/requests/:userId" element={<MyRequests />} />
        <Route path ="/all/requests" element={<AllRequests/>} />

        <Route path ="/new" element={<StepContext><NewRequest /></StepContext>} />
        <Route path ="/view/request/:requesterId" element={<ViewRequest/>} />
      </Routes>
    </>
  );
}
