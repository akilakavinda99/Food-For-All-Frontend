import React from 'react'

export default function LatestContributions() {
    return (
        <div>
            <div className="card h-100">
                <div className="card-header pb-0">
                    <h6>Latest Contributions</h6>
                </div>
                <div className="card-body p-3">
                    <div className="timeline timeline-one-side">
                        <div className="timeline-block">
                            <span className="timeline-step">
                                <i className="material-icons text-success text-gradient">paid</i>
                            </span>
                            <div className="timeline-content">
                                <div className="row">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0 col-lg-8 col-md-7">Yasith Chandula</h6>
                                    <h6 className="text-dark text-sm font-weight-bold mb-0 col-lg-4 col-md-5">Rs. 4500.00</h6>
                                </div>
                                <p className="text-secondary text-xs mt-1 mb-0">2022-08-26 10.35 am</p>
                            </div>
                        </div>
                        <hr className="dark horizontal my-2" />
                        <div className="timeline-block">
                            <span className="timeline-step">
                                <i className="material-icons text-success text-gradient">paid</i>
                            </span>
                            <div className="timeline-content">
                                <div className="row">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0 col-lg-8 col-md-7">Sachintha Gunaratne</h6>
                                    <h6 className="text-dark text-sm font-weight-bold mb-0 col-lg-4 col-md-5">Rs. 2000.00</h6>
                                </div>
                                <p className="text-secondary text-xs mt-1 mb-0">2022-08-26 10.35 am</p>
                            </div>
                        </div>
                        <hr className="dark horizontal my-2" />
                        <div className="timeline-block">
                            <span className="timeline-step">
                                <i className="material-icons text-success text-gradient">paid</i>
                            </span>
                            <div className="timeline-content">
                                <div className="row">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0 col-lg-8 col-md-7">Akila Kavinda</h6>
                                    <h6 className="text-dark text-sm font-weight-bold mb-0 col-lg-4 col-md-5">Rs. 10.00</h6>
                                </div>
                                <p className="text-secondary text-xs mt-1 mb-0">2022-08-26 10.35 am</p>
                            </div>
                        </div>
                        <hr className="dark horizontal my-2" />
                        <div className="timeline-block">
                            <span className="timeline-step">
                                <i className="material-icons text-success text-gradient">paid</i>
                            </span>
                            <div className="timeline-content">
                                <div className="row">
                                    <h6 className="text-dark text-sm font-weight-bold mb-0 col-lg-8 col-md-7">Thusal Shaminda</h6>
                                    <h6 className="text-dark text-sm font-weight-bold mb-0 col-lg-4 col-md-5">Rs. 2200.00</h6>
                                </div>
                                <p className="text-secondary text-xs mt-1 mb-0">2022-08-26 10.35 am</p>
                            </div>
                        </div>
                        <hr className="dark horizontal my-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}
