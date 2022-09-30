import React from 'react';

export default function NavBar() {
  return (
    <div>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {/* <img src = {logo} height="37" /> */}
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
                        {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Profile
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
