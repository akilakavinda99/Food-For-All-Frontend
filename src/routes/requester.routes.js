import React from "react";
import { Route, Routes } from "react-router-dom";

import MyRequests from "../components/requester/myRequests";
import AllRequests from "../pages/requester/viewAllRequests";
import NewRequest from "../pages/requester/newRequest";
import StepContext from "../components/requester/request/stepContex";
import ViewRequest from "../components/requester/viewRequest";

export default function Requester() {
  return (
    <>
      <Routes>
        
        <Route path="/my/requests/:userId" element={<MyRequests />} />
        <Route path ="/all/requests" element={<AllRequests/>} />
        <Route path ="/new" element={<StepContext><NewRequest /></StepContext>} />
        <Route path ="/view/request/:requesterId" element={<ViewRequest/>} />
      </Routes>
    </>
  );
}
