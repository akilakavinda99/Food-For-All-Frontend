import React from "react";

export default function DonationIcon(props) {
  return (
    <>
      <div
        class="row"
        style={{
          marginBottom: 30,
          marginTop: 20,
        }}
      >
        <div class="col">
          <div
            className="row"
            style={{
              paddingLeft: 20,
            }}
          >
            <div className="col-1">
              <i
                className="material-icons opacity-10 "
                style={{
                  color: "green",
                }}
              >
                location_on
              </i>
            </div>

            <div className="col-11  ">{props.location}</div>
          </div>
        </div>
        <div class="col">
          <div
            className="row"
            style={{
              paddingLeft: 90,
            }}
          >
            <div
              className="col-1"
              style={{
                marginRight: 5,
              }}
            >
              <i
                className="material-icons opacity-10 "
                style={{
                  color: "blue",
                }}
              >
                group
              </i>
            </div>

            <div className="col">{props.requests} Requests</div>
          </div>
        </div>
        <div class="col">
          <div
            className="row"
            style={{
              paddingLeft: 100,
            }}
          >
            <div className="col-1">
              <i
                className="material-icons opacity-10"
                style={{
                  color: "red",
                }}
              >
                schedule
              </i>
            </div>

            <div className="col">{props.remaining} Remaining</div>
          </div>
        </div>
      </div>
    </>
  );
}
