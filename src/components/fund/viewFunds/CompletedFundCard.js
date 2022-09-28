import React from 'react'
import { Link } from 'react-router-dom'

export default function CompletedFundCard({fund}) {
    return (
        <>
            <div className='col-xxl-6 col-lg-10 col-sm-12'>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            {/* <img src="http://res.cloudinary.com/dicjf8jjn/image/upload/v1662719471/akila/rzqn8pfinjs05zq1ccpk.png"
                                className="img-fluid rounded p-3" alt="test" /> */}
                            <img src={fund.fundImage} className="img-fluid card-image" alt={fund.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="d-flex">
                                    <h5 className="card-title p-2 flex-grow-1">{fund.title}</h5>
                                </div>
                                <p className="card-text">{fund.target}</p>

                                <div className='row d-flex'>
                                    <div className='col-sm-6 col-md-4'>
                                        <div>Budget</div>
                                        <h5>Rs.{fund.budget}</h5>
                                    </div>
                                    <div className='col-sm-6 col-md-4'>
                                        <div>Status</div>
                                        <h5 className='text-success'>Completed</h5>
                                    </div>
                                    <div className='col-sm-6 col-md-4'>
                                        <div>Completed on</div>
                                        {
                                            new Date(fund.completedOn).toISOString().split('T')[0]
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
