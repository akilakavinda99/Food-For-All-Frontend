import React from 'react';
import Logo from "../assets/images/logo-nav.png"
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <img className="img-navbar"src = {Logo} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link" href="#">Fundraise</a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link" href="#">Donation</a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                        <li className="nav-item dropdown ms-3">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Profile
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Your Fund Request</a></li>
                                <Link to="/requester/profile/631aa3f99d2dc36d4c12a8f0"><li><a className="dropdown-item" href="#">Account Settings</a></li></Link>
                                <li><a className="dropdown-item" href="#">Help center</a></li>
                                <Link to="/requester/signin"><li><a className="dropdown-item" href="#">Sign out</a></li></Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
