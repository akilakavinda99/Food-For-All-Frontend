import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { myRequests } from "../../api/requester.api";
import Footer from "../Footer";
import NavBar from "../NavBar";
import "./footer.css";
import NoItems from "../common/noItems/noItems";
import jspdf from "jspdf";
import "jspdf-autotable";
import img from "./banner.png";

export default function MyRequests() {
  const { userId } = useParams();
  const [showRequests, setShowRequests] = useState([]);
  const [requests, setRequests] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    myRequests(userId).then((res) => {
      setRequests(res.data.requests);
      console.log(res.data);
    });
  }, [userId]);

  useEffect(() => {
    setShowRequests(
      requests.filter(
        (request) =>
          request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          request.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, requests]);

  const generateMyRequestsReport = (tickets) => {
    const doc = new jspdf();
    const tableColumn = ["Request ID", "Request Title", "Request Description"];
    const tableRows = [];

    tickets.map((ticket) => {
      const ticketData = [ticket._id, ticket.title, ticket.description];
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
    doc.save(`Requests_Report_${dateStr}.pdf`);
  };

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h4 className="pt-4 ms-4">My Requests</h4>
          </div>

          <div className="col-2">
            <button
              class="btn btn-primary d-block m-0 mt-3"
              onClick={() => {
                generateMyRequestsReport(requests);
              }}
            >
              {" "}
              Generate Report{" "}
            </button>
          </div>
          <hr className="hr-request-fund" />

          {requests.length === 0 ? (
            <NoItems message="No completed funds available." />
          ) : (
            <div className="d-flex justify-content-center mb-3">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="input-group input-group-outline bg-white">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search here..."
                    aria-label="Search"
                    onChange={(e) => {
                      setsearchTerm(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>
            </div>
          )}
          {requests.length > 0 && showRequests.length === 0 ? (
            <NoItems message="No result found." />
          ) : (
            <div className="row">
              {showRequests.map((request) => (
                <Link
                  to={`/requester/view/request/${request._id}`}
                  key={request._id}
                >
                  <div class="card mx-4 mb-3">
                    <div class="row no-gutters">
                      <div class="col-md-3 p-0">
                        <img
                          src={request.requestImage}
                          class="card-img"
                          alt="..."
                        />
                      </div>
                      <div class="col-md-9">
                        <div class="card-body">
                          <div className="row">
                            <div className="col-10">
                              <h5 class="card-title">{request.title}</h5>
                            </div>

                            {/* <div className="col-2">
                              <h6>
                                <i className="bi bi-pencil-square ms-5"></i>{" "}
                                Edit
                              </h6>
                            </div> */}
                          </div>
                          <h6 class="card-title">
                            By {request.fname} {request.lname}
                          </h6>
                          <p class="card-text">{request.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
