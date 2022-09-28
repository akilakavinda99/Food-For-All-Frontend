import React from 'react'
import { Link } from 'react-router-dom'

export default function PendingFundCard({ fund }) {
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
                  <div className='btn text-danger p-2'>
                    <Link to={`/fund/editFund/${fund._id}`} >
                      <div className="material-icons opacity-10 d-inline-block">edit</div>
                      {" "}Edit
                    </Link>
                  </div>
                </div>
                <p className="card-text">{fund.target}</p>

                <div className='row d-flex'>
                  <div className='col-sm-6 col-md-4'>
                    <div>Budget</div>
                    <h5>Rs.{fund.budget}</h5>
                  </div>
                  <div className='col-sm-6 col-md-4'>
                    <div>Status</div>
                    {
                      fund.status === "pending" ?
                        (<h5 className='text-info text-capitalize'>{fund.status}</h5>) :
                        (<h5 className='text-danger text-capitalize'>{fund.status}</h5>)
                    }
                  </div>
                  <div className='col-sm-6 col-md-4'>
                    <div>Created on</div>
                    {
                      new Date(fund.createdOn).toISOString().split('T')[0]
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
