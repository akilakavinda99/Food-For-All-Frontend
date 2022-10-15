import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getFundByID, removeFund } from '../../../api/fund.api';
import { getOrganizationByID } from '../../../api/organization.api';
import NavButton from '../../NavButton';
import ProgressBar from "@ramonak/react-progress-bar";
import { getRemainingTime } from '../../common/getRemainingTime';
import LoadingSpinner from '../../common/LoadingSpinner';
import { getCookie } from '../../common/getCookie';
import swal from "sweetalert";
import NavBar from '../../NavBar';
import DonateFund from '../../fund/viewFunds/DonateFund';

export default function ViewSelectedFund() {
  const [fund, setFund] = useState({ organizationID: "", endingDate: "2022-09-27T12:20:02.029+00:00" });
  const [organization, setOrganization] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const { fundID } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    getFundByID(fundID)
      .then(res => {
        console.log(res.data.fund);
        setFund(res.data.fund);
        setIsLoaded(true);
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

  const removeFundbtn = (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "If you remve the fundrais, all contributions collected so far will be lost and you wonn't be able to recover them.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        removeFund(fundID).then(res => {
          swal("Fund has been deleted!", {
            icon: "success",
          });
          navigate("/organization/funds");
        }).catch(err => {
          swal("Something went wrong!", {
            icon: "error",
          });
        })
      }
    });
  }

  const handleDonate = (e) => {
    e.preventDefault();
    if (getCookie("roles") === '1984') {
      document.getElementById("donateModal").style.display = "block";
    } else {
      swal("You need to login first!", {
        icon: "warning",
        buttons: ["Cancel", "Login"],
      }).then((willLogin) => {
        if (willLogin) {
          navigate(`/signin`);
        }
      });
    }
  }

  const closeDonateModal = (e) => {
    e.preventDefault();
    document.getElementById("donateModal").style.display = "none";
  }



  return (
    <>
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      {
        getCookie("roles") === '5150' ? (<NavButton page="Funds" path="Organization" />) : (<div className='mb-3'><NavBar /></div>)
      }


      <div className="container-fluid" onClick={toggleSidenav}>
        <i className="bi bi-arrow-left-circle fs-4 cursor-pointer"
          onClick={() => navigate(-1)}> Go back</i>
        <h3 className='mt-3'>{fund.title}</h3>
        {
          fund.organizationID === getCookie("uId") && fund.status !== "completed" ? (
            <div className="col-lg-2 col-sm-3 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
              <div className="nav-wrapper position-relative end-0">
                <ul className="nav nav-pills nav-fill p-1" role="tablist">
                  <li className="nav-item">
                    <Link className="nav-link mb-0 px-0 py-1 active" to={`/fund/editFund`} state={fund}>
                      <i className="material-icons text-lg position-relative">edit</i>
                      <span className="ms-1">Edit</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" onClick={removeFundbtn} className="nav-link mb-0 px-0 py-1 text-primary">
                      <i className="material-icons text-lg position-relative">delete</i>
                      <span className="ms-1">Remove</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : null
        }
        {isLoaded ? (
          <div className="row">
            <div className="col-sm-5 row">
              <div className="my-5">
                <img src={fund.fundImage} className="img-fluid rounded card-image" alt={fund.title} />
              </div>
              <div className='card p-3'>
                <h5>Contact Info</h5>
                <div className="row mt-2">
                  <h6 className="text-dark font-weight-bold col-md-3">Email:</h6>
                  <span className="mb-0 col-md-9">{fund.contactEmail}</span>
                </div>
                <div className="row">
                  <h6 className="text-dark font-weight-bold col-md-3">Contact:</h6>
                  <span className="mb-0 col-md-9">{fund.contactNumber}</span>
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
                <div className="d-flex">

                  <div className='text-dark font-weight-bold p-2 ps-0'>Funds collected:</div>

                  <div className='p-2'>Rs. {fund.currentAmount}</div>

                </div>
                <div>
                  <ProgressBar
                    completed={Math.round(fund.currentAmount / fund.budget * 100 * 100) / 100} // rounded to 2 decimal places
                    className="px-4" />
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
              {
                getCookie("roles") === '1984' || !getCookie("roles") ? (
                  <div className='mt-3'>
                    <button className="btn btn-primary" onClick={handleDonate}>Donate</button>
                  </div>) : null
              }
            </div>
            {
              getCookie("roles") === '1984' ? (
                <div className="modal blur-my-dark" id="donateModal">
                  <div className="modal-dialog">
                    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title">Donate</h4>
                          <button onClick={closeDonateModal} type="button" className="btn fs-4">&times;</button>
                        </div>
                        <div className="modal-body">
                          <DonateFund organizationID={fund.organizationID} fundID={fund._id} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            }
          </div>
        ) : <LoadingSpinner />}

      </div>
    </main >
  </>
  )
}
