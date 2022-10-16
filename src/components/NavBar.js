import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo-nav.png";
import { Link, useNavigate } from "react-router-dom";
import { getCookie } from "./common/getCookie";
import { getUserDonations } from "../api/donator.api";

export default function NavBar() {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate()
  const [showDonations, setShowDonations] = useState(false);
  useEffect(() => {
    userId
      ? getUserDonations(userId)
          .then((donations) => {
            if (donations.length > 0) {
              setShowDonations(true);
            }
            setShowDonations(false);
          })
          .catch((e) => console.log(e))
      : setShowDonations(false);
  }, [userId]);
  useEffect(() => {
    setUserId(getCookie("uId"));
    // setLoading(true);
    //fetching all inbound item data from the database
  }, [userId]);
  // console.log(userId);

  const logOut = (e) => {

    e.preventDefault();
    document.cookie = "uId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "roles=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/user/signin");

};

  return (
    <div>
      <div id="navbar_top" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <img className="img-navbar" src={Logo} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="/fund/all">
                  Fundraise
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="/donator/home">
                  Donations
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="/requester/all/requests">
                  Fund Requests
                </a>
              </li>
              {userId ? (
                <li className="nav-item dropdown ms-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profile
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href={`/requester/my/requests/${userId}`} key={userId}>
                        Your Fund Requests
                      </a>
                    </li>

                    

                    {setShowDonations ? (
                      <li>
                        <a className="dropdown-item" href="/donator/dashboard">
                          Your donations
                        </a>
                      </li>
                    ) : (
                      <li>
                        <a
                          className="dropdown-item"
                          href="donator/createDonation"
                        >
                          Create a donation
                        </a>
                      </li>
                    )}
                    
                    <Link to={`/user/profile/${userId}`} key={userId}>
                      <li>
                        <a className="dropdown-item" href="#">
                          Account Settings
                        </a>
                      </li>
                    </Link>
                    <li>
                      <a className="dropdown-item" href="/requester/new?">
                        Create request
                      </a>
                    </li>
                    <Link to="/requester/signin">
                      <li>
                        <a className="dropdown-item" onClick={logOut} href="#">
                          Sign out
                        </a>
                      </li>
                    </Link>
                  </ul>
                </li>
              ) : (
                <li className="nav-item ms-3">
                  <a className="nav-link" href="/user/signin">
                    Login
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
