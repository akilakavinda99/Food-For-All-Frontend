import React from "react";
import swal from "sweetalert";
import {
  acceptDonationRequest,
  rejectDonationRequest,
} from "../../../api/donator.api";

export default function RequestCard(props) {
  var reqdata = {
    email: props.email,
    title: props.title,
  };
  const acceptRequest = (id) => {
    swal({
      title: "Are you sure?",
      text: "Request Will Be Accepted",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        acceptDonationRequest(id, reqdata)
          .then((res) => {
            if (willDelete) {
              swal("Request accepted!!", {
                icon: "success",
              });
              setTimeout(function () {
                window.location.reload();
              }, 1000);
              console.log(res);
            }
            // } else {
            //               swal("File Is Not Deleted");
            //             }
          })
          .catch((e) => {
            swal("File Is Not Deleted");
          });
      }
    });
  };

  const rejectedRequest = (id) => {
    var reqdata = {
      email: props.email,
      title: props.title,
    };
    swal({
      title: "Are you sure?",
      text: "Request Will Be Rejected",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        rejectDonationRequest(id, reqdata)
          .then((res) => {
            if (willDelete) {
              swal("Request rejected!!", {
                icon: "success",
              });
              setTimeout(function () {
                window.location.reload();
              }, 1000);
              console.log(res);
            }
            // } else {
            //               swal("File Is Not Deleted");
            //             }
          })
          .catch((e) => {
            swal("File Is Not Deleted");
          });
      }
    });
  };
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
          {props.accepted ? (
            <></>
          ) : (
            <div
              class="d-flex justify-content-around"
              style={{
                marginTop: 20,
              }}
            >
              <button
                type="button"
                class="btn btn-success"
                onClick={() => {
                  acceptRequest(props.id, props.email, props.title);
                }}
              >
                Accept Request
              </button>
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => {
                  rejectedRequest(props.id, props.email);
                }}
              >
                Reject Request
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
