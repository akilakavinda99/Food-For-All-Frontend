import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getOneDonation } from "../../../api/donator.api";
import { getCookie } from "../../common/getCookie";
import { getRemainingTime } from "../../common/getRemainingTime";
import LoadingSpinner from "../../common/LoadingSpinner";
import Footer from "../../Footer";
import NavBar from "../../NavBar";
import ContactDetails from "./DonationViewComponents/ContactDetails";
import DonationDescription from "./DonationViewComponents/DonationDescription";
import DonationIcon from "./DonationViewComponents/DonationIcons";
import ViewImage from "./DonationViewComponents/ViewImage";
import swal from "sweetalert";
import axios from "axios";

export default function DonationView() {
  const location = useLocation();
  const fromAdmin = location.state?.fromAdmin;
  const accepted = location.state?.accepted;
  const req=location.state?.req;
  const [donation, setDonation] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    //fetching all inbound item data from the database
    getOneDonation(id)
      .then((res) => {
        setLoading(false);
        console.log(res);

        setDonation(res.data.donation);
        console.log(res.data.donation);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  var ddate = getRemainingTime(donation.donationEndDate);
  console.log(ddate);


  const onAccept = (id) => {
    swal({
      title: "Are you sure?",
      text: "The Donation Request Will be Accepted",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.put(`http://localhost:8070/admin/updostauts/${id}`).then(() => {
          if (willDelete) {
            swal("The Donation Request Has Been Successfully Accepted!", {
              icon: "success",
            });
            setTimeout(function () {
              window.location.reload();
            }, 3000);
          } else {
            swal("File Is Not Deleted");
          }
        });
      }
    });
  };

  const onDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "The Donation Request Will be Rejected",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .put(`http://localhost:8070/admin/rejectdonation/${id}`)
          .then(() => {
            if (willDelete) {
              swal("The Donation Request Has Been Rejected!", {
                icon: "success",
              });
              setTimeout(function () {
                window.location.reload();
              }, 3000);
            } else {
              swal("File Is Not Deleted");
            }
          });
      }
    });
  };

  return (
    <>
      <NavBar />

      <div className="container">
        {loading ? (
          <div
            style={{
              marginTop: 250,
              minHeight: "100vh",
            }}
          >
            <LoadingSpinner />
          </div>
        ) : (
          <div
            className="mainDiv"
            style={{
              marginLeft: 100,
              paddingTop: 20,
              marginRight: 100,
              marginBottom: 100,
            }}
          >
            <h2
              style={{
                marginBottom: 15,
              }}
            >
              {donation.donationTitle}
            </h2>

            <div className="d-flex justify-content-center">
              <ViewImage image={donation.donationImage} />
            </div>

            <div className="mx-5 mt-2">
              <DonationIcon
                location={donation.location}
                requests={donation.numberOfRequests}
                remaining={
                  getRemainingTime(donation.donationEndDate).includes("-")
                    ? 0 + " Hours"
                    : getRemainingTime(donation.donationEndDate)
                }
              />
            </div>

            <div className="row">
              <div class="col-6">
                <div class="card bg-light">
                  <div class="card-body">
                    <ContactDetails
                      email={donation.email}
                      mobile={donation.contactNumber}
                    />
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div class="card bg-light">
                  <div class="card-body">
                    <DonationDescription
                      description={donation.donationDescription}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4">
                {req && fromAdmin ? (
                  <>
                    <button class="btn btn-success" onClick={()=>{onAccept(donation._id)}}>Accept</button>
                    <button class="btn btn-danger"onClick={()=>{onDelete(donation._id)}}>Reject</button>
                  </>
                ) : accepted && fromAdmin ? (
                  <>
                  </>
                ):(
                  <Link to={`/donator/sendRequest/${id}`}>
                    <button class="btn btn-info">Send Request</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
