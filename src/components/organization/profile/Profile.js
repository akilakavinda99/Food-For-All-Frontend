import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getOrganizationByID } from '../../../api/organization.api';
import { getCookie } from '../../common/getCookie';
import { toggleSidenav } from '../../common/toggleSidenav';
import NavButton from '../../NavButton';
import LatestContributions from "../dashboard/LatestContributions";
import NewFundraisings from './NewFundraisings';
import ChangePassoword from './ChangePassoword';
import UpdateBoardInfo from './UpdateBoardInfo';
import UpdateOrgInfo from './UpdateOrgInfo';

export default function Profile() {
    const params = useParams();
    const [updateData, setUpdateData] = useState(false);
    const [organizationID, setOrganizationID] = useState();
    const [organization, setOrganization] = useState({ registrationDate: "2022-09-27T12:20:02.029+00:00" });

    useEffect(() => {
        if (params.organizationID) {
            setOrganizationID(params.organizationID);
        } else {
            setOrganizationID(getCookie("uId"));
            // console.log(organizationID);
        }
    }, [organizationID, params.organizationID]);

    useEffect(() => {
        if (organizationID !== undefined) {
            getOrganizationByID(organizationID)
                .then((res) => {
                    // console.log(res.data.organization);
                    setOrganization(res.data.organization);
                }).catch((err) => {
                    console.log(err);
                })
            setUpdateData(false);
        }
    }, [organizationID, updateData]);

    return (
        <>
            {
                organizationID ? (

                    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                        {
                            organizationID === getCookie("uId") ? (<NavButton page="Profile" path="Organization" />) : null
                        }
                        <div className="container-fluid py-4 " onClick={toggleSidenav}>
                            <div className="card card-body">
                                <div className="row gx-4 mb-2">
                                    <div className="col-auto">
                                        <div className="avatar avatar-xl position-relative">
                                            {/* <img src="../assets/img/bruce-mars.jpg" alt="profile_image" className="w-100 border-radius-lg shadow-sm" /> */}
                                            <i className="material-icons fs-1 position-relative text-secondary">apartment</i>
                                        </div>
                                    </div>
                                    <div className="col-auto my-auto">
                                        <div className="h-100">
                                            <h5 className="mb-1">
                                                {organization.name}
                                            </h5>
                                            <p className="mb-0 font-weight-normal text-sm">
                                                Organization
                                            </p>
                                        </div>
                                    </div>
                                    {
                                        organizationID === getCookie("uId") ? (
                                            <>
                                                <div className="col-lg-2 col-sm-3 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                                                    <div className="nav-wrapper position-relative end-0">
                                                        <ul className="nav nav-pills nav-fill p-1" role="tablist">
                                                            <li className="nav-item">
                                                                <Link className="nav-link mb-0 px-0 py-1 text-primary" to="#">
                                                                    {/* <i className="material-icons text-lg position-relative">edit</i> */}
                                                                    <button className="btn btn-secondary m-0"
                                                                        type="button" data-bs-toggle="modal" data-bs-target="#passModel"
                                                                    >Change Password</button>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </>
                                        ) : null
                                    }
                                </div>
                                <div className="row">
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-xl-4">
                                            <div className="card card-plain h-100">
                                                <div className="card-header pb-0 p-3">
                                                    <div className="row">
                                                        <div className="col-md-8 d-flex align-items-center">
                                                            <h6 className="mb-0 fs-5">Organization Information</h6>
                                                        </div>
                                                        {
                                                            organizationID === getCookie("uId") ? (
                                                                <div className="col-md-4 text-end">
                                                                    <Link to="#" data-bs-toggle="modal" data-bs-target="#orgModel">
                                                                        <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                                                                    </Link>
                                                                </div>
                                                            ) : null
                                                        }
                                                    </div>
                                                </div>
                                                <hr className="horizontal full-dark m-0" />
                                                <div className="card-body p-3">
                                                    <ul className="list-group">
                                                        <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Name:</strong> &nbsp; {organization.name}</li>
                                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Address:</strong> &nbsp; {organization.address}</li>
                                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Country:</strong> &nbsp; {organization.country}</li>
                                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Zip code:</strong> &nbsp; {organization.zipCode}</li>
                                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; {organization.email}</li>
                                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Contact Number:</strong> &nbsp; {organization.contactNumber}</li>
                                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Registraion Number:</strong> &nbsp; {organization.registrationNumber}</li>
                                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Registraion Date:</strong> &nbsp; {new Date(organization.registrationDate).toISOString().split('T')[0]}</li>
                                                        {/* <li className="list-group-item border-0 ps-0 pb-0">
                                                    <strong className="text-dark text-sm">Social:</strong> &nbsp;
                                                    <a className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                        <i className="fab fa-facebook fa-lg"></i>
                                                    </a>
                                                    <a className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                        <i className="fab fa-twitter fa-lg"></i>
                                                    </a>
                                                    <a className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                        <i className="fab fa-instagram fa-lg"></i>
                                                    </a>
                                                </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-4">
                                            <div className="card card-plain h-100">
                                                <div className="card-header pb-0 p-3">
                                                    <div className="row">
                                                        <div className="col-md-8 d-flex align-items-center">
                                                            <h6 className="mb-0 fs-5">Board Member Details</h6>
                                                        </div>
                                                        {
                                                            organizationID === getCookie("uId") ? (
                                                                <div className="col-md-4 text-end">
                                                                    <Link to="#" data-bs-toggle="modal" data-bs-target="#memberModel">
                                                                        <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                                                                    </Link>
                                                                </div>
                                                            ) : null
                                                        }
                                                    </div>
                                                </div>
                                                <hr className="horizontal full-dark m-0" />
                                                <div className="card-body p-3">
                                                    <ul className="list-group">
                                                        <li className="list-group-item border-0 ps-0 pt-0 text-sm"><h6 className="mb-0 fs-6">President's Details</h6></li>
                                                        <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Name:</strong> &nbsp; {organization.presidentName}</li>
                                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Mobile:</strong> &nbsp; {organization.presidentContactNumber}</li>
                                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; {organization.presidentEmail}</li>

                                                        <li className="list-group-item border-0 ps-0 pt-0 text-sm mt-3"><h6 className="mb-0 fs-6">Secretary's Details</h6></li>
                                                        <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Name:</strong> &nbsp; {organization.secretaryName}</li>
                                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Mobile:</strong> &nbsp; {organization.secretaryContactNumber}</li>
                                                        <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; {organization.secretaryEmail}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-4">
                                            <div className="card card-plain h-100">
                                                <LatestContributions organizationId={organizationID} limit={5} />
                                            </div>
                                        </div>
                                        <NewFundraisings limit={4} organizationId={organizationID} />
                                    </div>
                                </div>
                            </div>

                            {
                                organizationID === getCookie("uId") ? (
                                    <>
                                        {/* Models */}

                                        {/* Password change */}
                                        <div className="modal " id="passModel" tabIndex="-1" aria-labelledby="passModel" aria-hidden="true" data-bs-backdrop="static">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Change Password</h4>
                                                        <button
                                                            type="button" className="btn fs-4" data-bs-dismiss="modal" aria-label="Close"
                                                        >&times;</button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <ChangePassoword organizationId={organizationID} />
                                                    </div>
                                                    {/* <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div> */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Board member details change */}
                                        <div className="modal " id="memberModel" tabIndex="-1" aria-labelledby="memberModel" aria-hidden="true" data-bs-backdrop="static">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Board Member Details</h4>
                                                        <button
                                                            onClick={
                                                                (e) => {
                                                                    e.preventDefault();
                                                                    setUpdateData(true)
                                                                }
                                                            }
                                                            type="button" className="btn fs-4" data-bs-dismiss="modal" aria-label="Close"
                                                        >&times;</button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <UpdateBoardInfo organizationId={organizationID} />
                                                    </div>
                                                    {/* <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div> */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Organization details change */}
                                        <div className="modal " id="orgModel" tabIndex="-1" aria-labelledby="orgModel" aria-hidden="true" data-bs-backdrop="static">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Organization Details</h4>
                                                        <button
                                                            onClick={
                                                                (e) => {
                                                                    e.preventDefault();
                                                                    setUpdateData(true)
                                                                }
                                                            }
                                                            type="button" className="btn fs-4" data-bs-dismiss="modal" aria-label="Close"
                                                        >&times;</button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <UpdateOrgInfo organizationId={organizationID} />
                                                    </div>
                                                    {/* <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : null
                            }

                        </div>
                    </main>) : null
            }
        </>
    )
}
