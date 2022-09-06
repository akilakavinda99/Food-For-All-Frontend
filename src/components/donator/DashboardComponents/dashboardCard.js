import React, { useState } from "react";
import "../css/dashboardCard.css";

export default function DashboardCard(props) {
  let Background = "https://i.postimg.cc/523fVDtk/ds.png";
  return (
    <>
      <div
        style={{
          width: 380,
          height: 180,
          borderRadius: 20,
          backgroundImage: `url(${props.image})`,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <h3
          className="cardH3"
          style={{ paddingLeft: 10, paddingTop: 20, fontWeight: 800 }}
        >
          {props.title}
        </h3>
        <div
          style={{
            // borderRadius: 50,
            // backgroundColor: "blue",
            // width: 35,
            // height: 35,
            marginLeft: 90,
            marginTop: 20,
          }}
        >
          <h3>{props.count}</h3>
        </div>
      </div>
      {/* <div class="container" style={{ width: 400, height: 200 }}>
        <div class="card img-fluid">
          <img
            class="card-img-top"
            src={props.image}
            alt="Card image"
            style={{ width: "100%" }}
          />
          <div class="card-img-overlay">
            <h4 class="card-title" style={{ paddingTop: 20 }}>
              {props.title}
            </h4>
            <p class="card-text">{props.count}</p>
          </div>
        </div>
      </div> */}
    </>
  );
}
