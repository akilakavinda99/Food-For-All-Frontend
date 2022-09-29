import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar";
import ContactDetails from "./DonationViewComponents/ContactDetails";
import DonationDescription from "./DonationViewComponents/DonationDescription";
import DonationIcon from "./DonationViewComponents/DonationIcons";
import ViewImage from "./DonationViewComponents/ViewImage";

export default function DonationView() {
  const id = 123;
  return (
    <>
      <NavBar />
      <div
        className="mainDiv"
        style={{
          marginLeft: 250,
          paddingTop: 20,
          marginRight: 200,
        }}
      >
        <h2
          style={{
            marginBottom: 10,
          }}
        >
          Food Donation For 100 Children
        </h2>
        <ViewImage image="https://i.postimg.cc/vH5W5xwF/Food-Donation-For-100-Children.png" />
        <DonationIcon />
        <div className="row">
          <div class="col">
            <div
              className="cntct"
              style={{
                marginLeft: 50,
              }}
            >
              <ContactDetails />
            </div>
          </div>
          <div class="col-6">
            <DonationDescription />
            <Link to={`/donator/sendRequest/${id}`}>
              <button>Send Request</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
