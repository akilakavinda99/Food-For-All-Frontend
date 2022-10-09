import React, { useEffect, useState } from "react";
import { getAllDonations } from "../../../api/donator.api";
import LoadingSpinner from "../../common/LoadingSpinner";
import Footer from "../../Footer";
import NavBar from "../../NavBar";
import DonationDescription from "../DonationView/DonationViewComponents/DonationDescription";

export default function DonationHome() {
  const [loading, setLoading] = useState(false);
  const [donation, setDonation] = useState([]);
  useEffect(() => {
    setLoading(true);
    //fetching all inbound item data from the database
    getAllDonations()
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data.length > 0) {
          setDonation(res.data);
          console.log(res.data);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);
  return (
    <>
      <NavBar />
      {loading ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <>
          <div
            class="row row-cols-4"
            style={{
              //   marginLeft: 150,
              overflow: "hidden",
            }}
          >
            {donation.map(function (f) {
              return (
                <div class="col">
                  <div
                    style={{
                      marginLeft: 10,
                      marginTop: 10,
                    }}
                  >
                    <div
                      class="card"
                      style={{
                        width: "18rem",
                      }}
                    >
                      <img
                        class="card-img-top"
                        src="https://i.postimg.cc/c15nzDbx/Food-Donation-For-100-Children.png"
                        alt="Card image cap"
                        style={{
                          width: "100%",
                          height: 150,
                        }}
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          Donation for 100 children in galle
                        </h5>
                        <div
                          className="para"
                          style={{
                            width: "100%",
                            //   height: 40,
                            display: "inline-block",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <div>
                            The Alsos Mission was an Allied unit formed to
                            investigate Axis scientific developments, especially
                            nuclear, chemical and biological weapons, as part of
                            the Manhattan Project during World War II. Colonel
                            Boris Pash, a former Manhattan P
                          </div>
                          {/* <p
              class="card-text"
              style={{
                textOverflow: "ellipsis",
              }}
            >
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      <Footer />
    </>
  );
}
