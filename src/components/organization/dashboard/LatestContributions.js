import React, { useEffect, useState } from 'react'
import { getOrgLatestContribution } from '../../../api/organization.api';

export default function LatestContributions({ organizationId, limit }) {
    const [latestContributions, setLatestContributions] = useState([]);

    useEffect(() => {
        getOrgLatestContribution(organizationId, limit)
            .then(res => {
                // console.log(res.data.contributions);
                setLatestContributions(res.data.contributions);
            }).catch(err => {
                console.log(err);
            })
    }, [organizationId, limit]);

    return (
        <div>
            <div className="card h-100">
                <div className="card-header pb-0">
                    <h6>Latest Contributions</h6>
                    {
                        latestContributions.length === 0 ? (
                            <p className='text-sm'>No contributions yet</p>) : null
                    }
                </div>
                <div className="card-body p-3">
                    <div className="timeline timeline-one-side">
                        {
                            latestContributions.map((contribution, index) => (
                                <div key={index}>
                                    <div className="timeline-block">
                                        <span className="timeline-step">
                                            <i className="material-icons text-success text-gradient">paid</i>
                                        </span>
                                        <div className="timeline-content">
                                            <div className="row">
                                                <h6 className="text-dark text-sm font-weight-bold mb-0 col-lg-8 col-md-7">{contribution.userID}</h6>
                                                <h6 className="text-dark text-sm font-weight-bold mb-0 col-lg-4 col-md-5">Rs. {contribution.amount}</h6>
                                            </div>
                                            <p className="text-secondary text-xs mt-1 mb-0">{new Date(contribution.donatedDate).toISOString().split('T')[0]}</p>
                                        </div>
                                    </div>
                                    <hr className="dark horizontal my-2" />
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
