import React from "react";

export default function RequestCard(props) {
  const acceptRequest = () => {};
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
            <h6>Name - {props.name}</h6>
            <h6>Email - {props.email}</h6>
            <h6>Contact - {props.contact}</h6>
            <h6>Description - {props.description}</h6>
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
