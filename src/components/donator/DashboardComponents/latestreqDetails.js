import React from "react";
import "../css/latestRequestDetails.css";

export default function LatestReqDetails() {
  return (
    <>
      <div className="detailsDiv">
        <h3 className="dTitle">Donation For 100 School Kids</h3>
        <h5 className="dFrom">Req From - Akila Kavinda</h5>
        <h6>
          Hi, I know some children who will be benifited from your donation
        </h6>
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
