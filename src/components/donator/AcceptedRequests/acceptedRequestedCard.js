import React from "react";
import { Link } from "react-router-dom";

export default function AcceptedRequestsCard(props) {
  // const state = {
  //   fromAccepted: true,
  // };
  return (
    <div>
      <div>
        <div class="courses-container">
          <div class="course">
            <div class="course-info">
              <div class="progress-container">
                {/* <div class="progress"></div> */}

                {/* <span class="progress-text">6/9 Challenges</span> */}
              </div>
              <h2>{props.donationTitle}</h2> <br></br>
              <div class="d-flex justify-content-around">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="blue"
                    class="bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path
                      fill-rule="evenodd"
                      d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                    />
                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                  </svg>
                  <Link
                    to={"/donator/viewRequest/" + props._id}
                    state={{
                      fromAccepted: true,
                    }}
                  >
                    <span className="seereq"> See requests</span>
                  </Link>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
