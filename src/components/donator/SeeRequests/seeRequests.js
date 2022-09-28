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
        }}
      >
        Donation Title - I woulkd like to doante
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <RequestCard />
      </div>
    </>
  );
}
