import React, { useEffect, useState } from 'react'
import { getOrgDashSummary } from '../../../api/organization.api'

export default function DashboardSummary({ organizationId }) {
    const [summary, setSummary] = useState({})

    useEffect(() => {
        getOrgDashSummary(organizationId)
            .then(res => {
                setSummary(res.data.summary)
            }).catch(err => {
                console.log(err)
            })
    }, [organizationId])

    return (
        <div>
            <div className="row">
                <div className="row">
                    <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-header p-3 pt-2">
                                <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                    <i className="material-icons opacity-10">attach_money</i>
                                </div>
                                <div className="text-end pt-1">
                                    <p className="text-sm mb-0 text-capitalize">Total Funding</p>
                                    <h4 className="mb-0">Rs. {summary.totalFundsAmount}</h4>
                                </div>
                            </div>
                            <hr className="dark horizontal my-0" />
                            <div className="card-footer p-3">
                                {/* <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+55% </span>than last week</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-header p-3 pt-2">
                                <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                                    <i className="material-icons opacity-10">volunteer_activism</i>
                                </div>
                                <div className="text-end pt-1">
                                    <p className="text-sm mb-0 text-capitalize">Active funds</p>
                                    <h4 className="mb-0">{summary.activeFunds}</h4>
                                </div>
                            </div>
                            <hr className="dark horizontal my-0" />
                            <div className="card-footer p-3">
                                {/* <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>than last month</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-header p-3 pt-2">
                                <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                    <i className="material-icons opacity-10">diversity_1</i>
                                </div>
                                <div className="text-end pt-1">
                                    <p className="text-sm mb-0 text-capitalize">Total contributors</p>
                                    <h4 className="mb-0">{summary.totalDonors}</h4>
                                </div>
                            </div>
                            <hr className="dark horizontal my-0" />
                            <div className="card-footer p-3">
                                {/* <p className="mb-0"><span className="text-danger text-sm font-weight-bolder">-2%</span> than yesterday</p> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-4 col-sm-6">
                                <div className="card">
                                    <div className="card-header p-3 pt-2">
                                        <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                                            <i className="material-icons opacity-10">weekend</i>
                                        </div>
                                        <div className="text-end pt-1">
                                            <p className="text-sm mb-0 text-capitalize">Sales</p>
                                            <h4 className="mb-0">$103,430</h4>
                                        </div>
                                    </div>
                                    <hr className="dark horizontal my-0" />
                                    <div className="card-footer p-3">
                                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+5% </span>than yesterday</p>
                                    </div>
                                </div>
                            </div> */}
                </div>
            </div>
        </div>
    )
}
