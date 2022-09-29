import React from "react";

export default function RequestCard() {
  return (
    <>
      <div
        class="card z-index-0 fadeIn3 fadeInBottom"
        style={{
          width: 500,
          height: 330,
          marginBottom: 20,
        }}
      >
        <div class="card-body">
          <h4
            style={{
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            Request Details
          </h4>
          <div
            style={{
              marginLeft: 40,
            }}
          >
            <h6>Name - Akila Kavinda</h6>
            <h6>Email - akilakavinda@gmail.com</h6>
            <h6>Contact - 0716287765</h6>
            <h6>
              Description - Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vel quia error sequi,
            </h6>
          </div>
          <div
            class="d-flex justify-content-around"
            style={{
              marginTop: 20,
            }}
          >
            <button type="button" class="btn btn-success">
              Accept Request
            </button>
            <button type="button" class="btn btn-danger">
              Reject Request
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
