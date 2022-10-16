import React from "react";

export default function ContactDetails(props) {
  return (
    <>
      <div
        className=""
        style={
          {
            // width: 380,
            //   borderWidth: 1,
            //   borderColor: "black",
            //   borderStyle: "solid",
            // borderRadius: 10,
            // padding: 15,
            // boxShadow:
            // "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
          }
        }
      >
        <div
          className="title"
          style={{
            textAlign: "center",
          }}
        >
          <h5>Contact Details</h5>
        </div>
        <div
          className="cont"
          style={
            {
              // paddingLeft: 15,
            }
          }
        >
          {/* <div
            className="row"
            style={{
              marginBottom: 10,
            }}
          >
            <div className="col-2">
              <span
                style={{
                  fontWeight: 1000,
                }}
              >
                Name:
              </span>
            </div>
            <div className="col-9">
              <div>{props.name}</div>
            </div>
          </div> */}
          <div
            className="row"
            style={{
              marginBottom: 10,
            }}
          >
            <div className="col-3">
              <span
                style={{
                  fontWeight: 1000,
                }}
              >
                Email:
              </span>
            </div>
            <div className="col-9">
              <div>{props.email}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <span
                style={{
                  fontWeight: 1000,
                }}
              >
                Contact:
              </span>
            </div>
            <div className="col-9">
              <div> {props.mobile}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
