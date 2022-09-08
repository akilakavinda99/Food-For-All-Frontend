import React from "react";
import "../css/latestRequestDisplay.css";
import LatestReqDetails from "./latestreqDetails";

export default function LatestRequestsDisplay() {
  return (
    <>
      <div className="ltreqcard">
        <h2 className="Reqtitle">Latest Requests</h2>
        <hr
          style={{
            color: "red",
            backgroundColor: "grey",
            height: 5,
          }}
        />
        <LatestReqDetails />
        <LatestReqDetails />
      </div>
    </>
  );
}
