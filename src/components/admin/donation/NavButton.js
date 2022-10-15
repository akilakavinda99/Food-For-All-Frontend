export default function NavButton() {
    const toggleSidenav = (e) => {
        e.preventDefault();
        document.body.classList.toggle("g-sidenav-pinned");
    };
    return (
        <>
            {/* <script src="../assets/js/material-dashboard.min.js" type="text/javascript"></script> */}
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
                <div className="container-fluid py-1 px-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                            <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="#">Admin</a></li>
                            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Donation</li>
                        </ol>
                        <h6 className="font-weight-bolder mb-0">Donation List</h6>
                    </nav>
                    <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                        <ul className="navbar-nav  justify-content-end ms-md-auto pe-md-3 d-flex align-items-center">
                            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                                <a href="#" className="nav-link text-body p-0" id="iconNavbarSidenav" onClick={toggleSidenav}>
                                    <div className="sidenav-toggler-inner">
                                        <i className="sidenav-toggler-line"></i>
                                        <i className="sidenav-toggler-line"></i>
                                        <i className="sidenav-toggler-line"></i>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- End Navbar --> */}
        </>
    )
}