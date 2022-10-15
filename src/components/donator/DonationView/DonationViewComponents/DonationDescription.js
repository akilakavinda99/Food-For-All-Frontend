import React from "react";

export default function DonationDescription(props) {
  return (
    <>
      <div
        className="mainDiv"
        style={{
          
        }}
      >
        <h5><center>Description</center></h5>
        <p>{props.description}</p>
      </div>
    </>
  );
}
