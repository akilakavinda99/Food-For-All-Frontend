import React from "react";
import { Route, Routes } from "react-router-dom";
import RequesterSignIn from "../components/requester/requesterSignIn";
import RequesterSignUp from "../components/requester/requesterSignUp";

export default function User() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<RequesterSignUp />} />
        <Route path="/signin" element={<RequesterSignIn />} />
      </Routes>
    </>
  );
}
