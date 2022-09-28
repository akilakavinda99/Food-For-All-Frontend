import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFundByID } from '../../../api/fund.api';
import { getOrganizationByID } from '../../../api/organization.api';
import NavButton from '../../NavButton';
import ProgressBar from "@ramonak/react-progress-bar";
import { getRemainingTime } from '../../common/getRemainingTime';

export default function SelectedFund() {
  const [fund, setFund] = useState({ organizationID: "", endingDate: "2022-09-27T12:20:02.029+00:00" });
  const [organization, setOrganization] = useState({})
  const { fundID } = useParams();

  useEffect(() => {
    getFundByID(fundID)
      .then(res => {
        // console.log(res.data.fund);
        setFund(res.data.fund);
      })
      .catch(err => {
        console.log(err);
      })
  }, [fundID])

  useEffect(() => {
    getOrganizationByID(fund.organizationID)
      .then(res => {
        // console.log(res.data.organization);
        setOrganization(res.data.organization);
      })
  }, [fund.organizationID])

  const toggleSidenav = (e) => {
    e.preventDefault();
    document.body.classList.remove("g-sidenav-pinned");
  };


  return (
    <>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <NavButton page="Funds" path="Organization" />

        <div className="container-fluid py-4 " onClick={toggleSidenav}>
          <h3>{fund.title}</h3>
          <div className="row">
            <div className="col-sm-5 row">
              <div className="my-5">
                <img src={fund.fundImage} className="img-fluid rounded card-image" alt={fund.title} />
              </div>
              <div className='card p-3'>
                <h5>More Info</h5>
                <div className="row mt-2">
                  <h6 className="text-dark font-weight-bold col-md-3">Email:</h6>
                  <span className="mb-0 col-md-9">{fund.contactEmail}</span>
                </div>
                <div className="row">
                  <h6 className="text-dark font-weight-bold col-md-3">Contact:</h6>
                  <span className="mb-0 col-md-9">0{fund.contactNumber}</span>
                </div>
              </div>
            </div>
            <div className="col-sm-7 my-5 ps-sm-4">
              <h5>Target</h5>
              <p className='text-justify'>{fund.target}</p>
              <div className='mt-3'>
                <div className="d-flex">
                  <div className='text-dark font-weight-bold p-2 ps-0'>Budget:</div>
                  <div className='p-2'>Rs. {fund.budget}</div>
                </div>
                <div>
                  <ProgressBar
                    completed={fund.currentAmount / fund.budget}
                    className="px-4"/>
                </div>
                <div className="d-flex mt-3">
                  <div className='text-dark font-weight-bold p-2 ps-0'>Ending date:</div>
                  <div className='p-2'>{new Date(fund.endingDate).toISOString().split('T')[0]}</div>
                </div>
                <div className="d-flex">
                  <div className='text-dark font-weight-bold p-2 ps-0'>Timeleft:</div>
                  <div className='p-2'>{getRemainingTime(fund.endingDate)}</div>
                </div>
                <div className="mt-3">
                  <h5 className='text-dark font-weight-bold p-2 ps-0'>Description</h5>
                  <div className='p-2 text-justify'>{fund.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
    </>
  )
}
