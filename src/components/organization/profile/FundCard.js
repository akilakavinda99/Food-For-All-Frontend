import React from 'react'
import { Link } from 'react-router-dom'

export default function FundCard({ fundraising }) {
    return (
        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
            <div className="card card-blog card-plain">
                <div className="card-header p-0 mt-n4 mx-3">
                    <a className="d-block shadow-xl border-radius-xl">
                        <img src={fundraising.fundImage} alt="img-blur-shadow" className="img-fluid shadow border-radius-xl" />
                    </a>
                </div>
                <div className="card-body p-3">
                    {/* <p className="mb-0 text-sm">Project #2</p> */}
                    {/* <a href="javascript:;"> */}
                    <h5>{fundraising.title}</h5>
                    {/* </a> */}
                    <p className="mb-4 text-sm">
                        {fundraising.target}
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                        <Link to={`/fund/${fundraising._id}`} className="btn text-primary btn-sm mb-0">View Fund</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
