import React from "react";

export default function DonationDescription(props) {
  return (
    <>
      <div
        className="mainDiv"
        style={{
          marginRight: 80,
        }}
      >
        <h4>Description</h4>
        <p>{props.description}</p>
      </div>
    </>
  );
}
