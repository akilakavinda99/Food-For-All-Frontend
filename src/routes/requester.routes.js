import React from "react";
import {
  Route, Routes,
} from "react-router-dom";
import RequesterCard from "../components/requester/requesterDashboard";

export default function Requester() {
  return (
    <>
      <Routes>
        <Route path="/card" element={<RequesterCard />} />
      </Routes>
    </>
  )
}
