import React, { useState, useEffect } from "react";
import "./css/donatorCard.css";
import axios from "axios";
import jspdf from "jspdf";
import "jspdf-autotable";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
  Routes,
  Link,
} from "react-router-dom";
import img from "./banner.png";
import swal from "sweetalert";
import Footer from "../Footer";
import NavBar from "../NavBar";

import NoItems from "./noItems";
import NavButton from "../NavButton";
import SideNav from "./sideNav";
import { markDonationAsCompleted } from "../../api/donator.api";
import LoadingSpinner from "../common/LoadingSpinner";
import { getCookie } from "../common/getCookie";
import { getRemainingTime } from "../common/getRemainingTime";

export default function DonatorDashboard() {
  const [userID, setUserId] = useState("");

  useEffect(() => {
    setUserId(getCookie("uId"));
    // setLoading(true);
    //fetching all inbound item data from the database
  }, [userID]);
  // const userId = userID;
  const [donations, setDonations] = useState([]);
  const [ongoingDonations, setOngoingDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setsearchTerm] = useState("");
  const toggleSidenav = (e) => {
    e.preventDefault();
    document.body.classList.remove("g-sidenav-pinned");
  };
  const deleteDonation = (id) => {
    swal({
      title: "Are you sure?",
      text: "Item Is Not Available Once Deleted...",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8070/donator/deleteDonation/${id}`)
          .then((res) => {
            if (willDelete) {
              swal("Item Succesfully Deleted!!", {
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

  const markAsCompleted = (id) => {
    console.log(id);
    swal({
      title: "Are you sure?",
      text: "Donation will be moved to completed",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        markDonationAsCompleted(id)
          .then((res) => {
            if (willDelete) {
              swal("Item Succesfully Deleted!!", {
                icon: "success",
              });
              setTimeout(function () {
                window.location.reload();
              }, 1000);
              console.log(res);
            }
          })
          .catch((e) => {
            swal("File Is Not Deleted");
          });
      }
    });
  };

  const generateCompletedReport = (tickets) => {
    const doc = new jspdf();
    const tableColumn = [
      "Donation ID",
      "Donation Title",
      "Email",
      "Contact Number",
      "Number of req",
    ];
    const tableRows = [];

    tickets.map((ticket) => {
      const ticketData = [
        ticket._id,
        ticket.donationTitle,
        ticket.email,
        ticket.contactNumber,
        ticket.numberOfRequests,
      ];
      tableRows.push(ticketData);
    });

    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    // right down width height
    doc.addImage(img, "PNG", 0, 0, 250, 30);

    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 8 },
      startY: 35,
    });

    // doc.text(, 14, 23).setFontSize(9);
    doc.save(`Donations_Report_${dateStr}.pdf`);
  };

  useEffect(() => {
    setLoading(true);
    //fetching all inbound item data from the database
    axios
      .get(`http://localhost:8070/donator/getOngoingDonations/${userID}`)
      .then((res) => {
        setLoading(false);

        if (res.data.length > 0) {
          setDonations(res.data);
          console.log(res.data);
          console.log(donations);
        }
      })
      .catch((e) => {
        console.log(e);
        console.log(donations);
      });
  }, [userID]);

  useEffect(() => {
    setLoading(true);

    //fetching all inbound item data from the database
    axios
      .get(`http://localhost:8070/donator/getCompletedDonations/${userID}`)
      .then((res) => {
        setLoading(false);

        if (res.data.length > 0) {
          // setLoading(true);

          setOngoingDonations(res.data);
          console.log(res.data);
          console.log(donations);
        }
      })
      .catch((e) => {
        console.log(e);
        console.log(donations);
      });
  }, [userID]);

  return (
    <>
      <SideNav myDonations="true" />
      <main
        className="main-content position-relative max-height-vh-100 h-100 border-radius-lg "
        style={{ overflow: "hidden" }}
      >
        <NavButton />
        <div className="container-fluid py-4" onClick={toggleSidenav}>
          <div className="row align-items-center">
            <>
              <div
                class="kgcard"
                style={{
                  marginLeft: 150,
                  overflow: "hidden",
                }}
              >
                <div class="card-body">
                  <ul
                    class="nav nav-tabs"
                    id="myTab"
                    role="tablist"
                    style={{ width: 500, alignItems: "center" }}
                  >
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Completed
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Ongoing
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane active "
                      id="home"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      {" "}
                      <div
                        class="d-flex justify-content-between"
                        style={{ marginTop: 10 }}
                      >
                        {loading ? (
                          <div
                            style={{
                              marginLeft: 100,
                              marginTop: 100,
                            }}
                          >
                            <LoadingSpinner />
                          </div>
                        ) : ongoingDonations.length == 0 ? (
                          <>
                            <NoItems />
                          </>
                        ) : (
                          <>
                            <button
                              class="btn btn-danger"
                              onClick={() =>
                                generateCompletedReport(ongoingDonations)
                              }
                            >
                              Generate Report
                            </button>
                            <div
                              class="head1"
                              style={{ marginRight: "555px", width: 400 }}
                            >
                              <div class="input-group mb-3 input-group input-group-outline mb-3">
                                <input
                                  class="form-control form-control-sm ml-3 w-75"
                                  type="text"
                                  placeholder="Search Items  "
                                  aria-label="Search"
                                  onChange={(e) => {
                                    setsearchTerm(e.target.value);
                                  }}
                                />{" "}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      {ongoingDonations
                        .filter((val) => {
                          if (searchTerm === "") {
                            return val;
                          } else if (
                            val.donationTitle
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            val.donationDescription
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return (
                              <>
                                <h2>Nooasa</h2>
                              </>
                            );
                          }
                        })
                        .map(function (f) {
                          return f == null ? (
                            <h1>No items</h1>
                          ) : (
                            <div class="courses-container">
                              <div class="course">
                                <div class="course-info">
                                  <div class="progress-container">
                                    {/* <div class="progress"></div> */}

                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="red"
                                      class="bi bi-trash-fill"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                    </svg>

                                    <span
                                      onClick={() => deleteDonation(f._id)}
                                      style={{
                                        cursor: "pointer",
                                      }}
                                    >
                                      {" "}
                                      Delete
                                    </span>

                                    <br />
                                    {/* <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-pencil-square"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                      <path
                                        fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                      />
                                    </svg> */}
                                    {/* <Link
                                      to={`/donator/dashboard/donator/editDonation/${f._id}`}
                                    >
                                      <span
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        {" "}
                                        Edit
                                      </span>
                                    </Link> */}
                                    {/* <span class="progress-text">6/9 Challenges</span> */}
                                  </div>
                                  <Link
                                    to={"/donator/view/" + f._id}
                                    style={{
                                      color: "black",
                                    }}
                                  >
                                    {" "}
                                    <h2>{f.donationTitle}</h2>{" "}
                                  </Link>
                                  <div
                                    style={{
                                      textOverflow: "ellipsis",
                                    }}
                                  >
                                    <h6>{f.donationDescription}</h6>
                                  </div>

                                  <br></br>
                                  <div class="d-flex justify-content-around">
                                    {/* <div>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="red"
                                        class="bi bi-alarm-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                      </svg>
                                      <span className="timeleft">
                                        {" "}
                                        Time left
                                      </span>
                                    </div> */}
                                    {/* <div>
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
                                        to={"/donator/viewRequest/" + f._id}
                                      >
                                        <span className="seereq">
                                          {" "}
                                          See requests
                                        </span>
                                      </Link>
                                    </div> */}
                                    {/* <div>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="green"
                                        class="bi bi-check-circle"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                      </svg>
                                      <span
                                        className="completed"
                                        onClick={() => {
                                          markAsCompleted(f._id);
                                        }}
                                      >
                                        {" "}
                                        Mark as completed
                                      </span>
                                    </div> */}
                                  </div>
                                </div>
                                <br />
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div
                      class="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      {" "}
                      <div
                        class="d-flex justify-content-between"
                        style={{ marginTop: 10 }}
                      >
                        {donations.length == 0 ? (
                          <>
                            <NoItems />
                          </>
                        ) : (
                          <>
                            <button
                              class="btn btn-danger"
                              onClick={() => generateCompletedReport(donations)}
                            >
                              Generate Report
                            </button>
                            <div
                              class="head1"
                              style={{ marginRight: "555px", width: 400 }}
                            >
                              <div class="input-group mb-3 input-group input-group-outline mb-3">
                                <input
                                  class="form-control form-control-sm ml-3 w-75"
                                  type="text"
                                  placeholder="Search Items  "
                                  aria-label="Search"
                                  onChange={(e) => {
                                    setsearchTerm(e.target.value);
                                  }}
                                />{" "}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      {donations
                        .filter((val) => {
                          if (searchTerm === "") {
                            return val;
                          } else if (
                            val.donationTitle
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            val.donationDescription
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return (
                              <>
                                <h2>Nooasa</h2>
                              </>
                            );
                          }
                        })
                        .map(function (f) {
                          return f == null ? (
                            <h1>No items</h1>
                          ) : (
                            <div class="courses-container">
                              <div class="course">
                                <div class="course-info">
                                  <div class="progress-container">
                                    {/* <div class="progress"></div> */}

                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="red"
                                      class="bi bi-trash-fill"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                    </svg>

                                    <span
                                      onClick={() => deleteDonation(f._id)}
                                      style={{
                                        cursor: "pointer",
                                      }}
                                    >
                                      {" "}
                                      Delete
                                    </span>

                                    <br />
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-pencil-square"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                      <path
                                        fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                      />
                                    </svg>
                                    <Link
                                      to={`/donator/dashboard/donator/editDonation/${f._id}`}
                                    >
                                      <span
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                      >
                                        {" "}
                                        Edit
                                      </span>
                                    </Link>
                                    {/* <span class="progress-text">6/9 Challenges</span> */}
                                  </div>
                                  <Link
                                    to={"/donator/view/" + f._id}
                                    style={{
                                      color: "black",
                                    }}
                                  >
                                    {" "}
                                    <h2>{f.donationTitle}</h2>{" "}
                                  </Link>
                                  <h6>{f.donationDescription}</h6>
                                  <br></br>
                                  <div class="d-flex justify-content-around">
                                    <div>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="red"
                                        class="bi bi-alarm-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                      </svg>
                                      <span className="timeleft">
                                        {" "}
                                        {getRemainingTime(f.donationEndDate)}
                                      </span>
                                    </div>
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
                                        to={{
                                          pathname:
                                            "/donator/viewRequest/" + f._id,
                                          state: { fromAccepted: false },
                                        }}
                                      >
                                        <span className="seereq">
                                          {" "}
                                          See requests
                                        </span>
                                      </Link>
                                    </div>
                                    <div>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="green"
                                        class="bi bi-check-circle"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                      </svg>
                                      <span
                                        className="completed"
                                        onClick={() => {
                                          markAsCompleted(f._id);
                                        }}
                                      >
                                        {" "}
                                        Mark as completed
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <br />
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </main>
    </>
  );
}
