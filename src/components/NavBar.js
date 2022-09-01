import React from 'react';

export default function NavBar() {
  return (
    <div>
        <div div class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                {/* <img src = {logo} height="37" /> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="nav-link" href="#">Fundraise</a>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="nav-link" href="#">Donation</a>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="nav-link" href="#">About us</a>
                        </li>
                        {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Profile
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
