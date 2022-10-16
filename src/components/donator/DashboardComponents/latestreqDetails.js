import React from "react";
import "../css/latestRequestDetails.css";

export default function LatestReqDetails() {
  return (
    <>
      <div className="detailsDiv">
        <h3 className="dTitle">Food donation for children</h3>
        <h5 className="dFrom">Req From - Thushal shaminda</h5>
        <h6>I know a orphanage which needs help, contact me for more info.</h6>
        <hr
          style={{
            color: "red",
            backgroundColor: "grey",
            height: 3,
          }}
        />
      </div>
    </>
  );
}
