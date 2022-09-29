import React from "react";
import RequestCard from "./requestCard";

export default function SeeRequests() {
  return (
    <>
      <h3
        style={{
          marginLeft: 50,
          marginTop: 10,
          marginBottom: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Donation Title - I woulkd like to donate
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <RequestCard />
        <RequestCard />
      </div>
    </>
  );
}
