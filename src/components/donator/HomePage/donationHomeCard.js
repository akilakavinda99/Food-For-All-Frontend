import React from "react";

export default function DonationHomeCard(props) {
  return (
    <div class="col">
      <div
        class="card"
        style={{
          maxHeight: 280,
          minHeight: 280,
          marginBottom: 20,
        }}
      >
        <img
          src={props.donationImage}
          class="card-img-top"
          alt="image"
          style={{
            maxHeight: 180,
            minHeight: 140,
          }}
        />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
