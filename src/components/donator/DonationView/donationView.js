import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

export default function DonationView() {
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

  return (
    <>
      <NavBar />
      {loading ? (
        <div
          style={{
            marginTop: 250,
          }}
        >
          <LoadingSpinner />
        </div>
      ) : (
        <div
          className="mainDiv"
          style={{
            marginLeft: 250,
            paddingTop: 20,
            marginRight: 200,
            marginBottom: 100,
          }}
        >
          <h2
            style={{
              marginBottom: 10,
            }}
          >
            {donation.donationTitle}
          </h2>
          <ViewImage image={donation.donationImage} />
          <DonationIcon
            location={donation.location}
            requests={donation.numberOfRequests}
            remaining={getRemainingTime(donation.donationEndDate)}
          />
          <div className="row">
            <div class="col">
              <div
                className="cntct"
                style={{
                  marginLeft: 50,
                }}
              >
                <ContactDetails name={donation.email} />
              </div>
            </div>
            <div class="col-6">
              <DonationDescription description={donation.donationDescription} />
              <Link to={`/donator/sendRequest/${id}`}>
                <button>Send Request</button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
