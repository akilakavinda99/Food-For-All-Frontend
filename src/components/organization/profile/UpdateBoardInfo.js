import React, { useEffect, useState } from 'react'
import { getOrganizationByID, updateOrganizationBoard } from '../../../api/organization.api';
import { formValidationStep2 } from '../formValidation';

export default function UpdateBoardInfo({ organizationId }) {
    const [userData, setUserData] = useState({})
    const [formErrors, setFormErrors] = useState({})
    const [alert, setAlert] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        getOrganizationByID(organizationId)
            .then((res) => {
                // console.log(res.data.organization);
                setUserData(res.data.organization);
            }).catch((err) => {
                console.log(err);
            })
    }, [organizationId]);

    const handleUpdate = (e) => {
        e.preventDefault()
        setFormErrors(formValidationStep2(userData))
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(userData);
            updateOrganizationBoard(organizationId, {
                presidentName: userData.presidentName,
                presidentContactNumber: userData.presidentContactNumber,
                presidentEmail: userData.presidentEmail,
                secretaryName: userData.secretaryName,
                secretaryContactNumber: userData.secretaryContactNumber,
                secretaryEmail: userData.secretaryEmail,
            })
                .then((res) => {
                    // console.log(res.data);
                    setAlert({
                        type: "success",
                        message: res.data.message
                    })
                }).catch((err) => {
                    console.log(err);
                    setAlert({
                        type: "danger",
                        message: err.response.data.message
                    })
                })
            setIsSubmit(false);
        } else {
            setIsSubmit(false);
        }
    }, [formErrors, isSubmit])

    const closeAlert = (e) => {
        e.preventDefault()
        setAlert({})
    }
    return (
        <>
            <div className="card-body">
                {
                    alert.type && alert.type === "success" ? (
                        <div className="alert alert-success alert-dismissible text-white" role="alert">
                            <span className="text-sm">{alert.message}</span>
                            <button type="button" className="btn-close text-lg py-3 opacity-10" onClick={closeAlert}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    ) : (
                        alert.type && alert.type === "danger" ? (
                            <div className="alert alert-danger alert-dismissible text-white" role="alert">
                                <span className="text-sm">{alert.message}</span>
                                <button type="button" className="btn-close text-lg py-3 opacity-10" onClick={closeAlert}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        ) : null
                    )
                }
                <form className="text-start">
                    <h5 className="form-group text-center pt-2">President's Details</h5>

                    <label className="form-label">Name</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="text"
                            className="form-control"
                            // placeholder="Name"
                            value={userData['presidentName']}
                            onChange={(e) => { setUserData({ ...userData, "presidentName": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.presidentName}
                    </div>

                    <label className="form-label">Email</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="email"
                            className="form-control"
                            // placeholder="Email"
                            value={userData['presidentEmail']}
                            onChange={(e) => { setUserData({ ...userData, "presidentEmail": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.presidentEmail}
                    </div>

                    <label className="form-label">Mobile Number</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="contact"
                            className="form-control"
                            // placeholder="Mobile Number"
                            value={userData['presidentContactNumber']}
                            onChange={(e) => { setUserData({ ...userData, "presidentContactNumber": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.presidentContactNumber}
                    </div>

                    <h5 className="form-group text-center pt-2">Secretary's Details</h5>

                    <label className="form-label">Name</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="text"
                            className="form-control"
                            // placeholder="Name"
                            value={userData['secretaryName']}
                            onChange={(e) => { setUserData({ ...userData, "secretaryName": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.secretaryName}
                    </div>

                    <label className="form-label">Email</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="email"
                            className="form-control"
                            // placeholder="Email"
                            value={userData['secretaryEmail']}
                            onChange={(e) => { setUserData({ ...userData, "secretaryEmail": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.secretaryEmail}
                    </div>

                    <label className="form-label">Mobile Number</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="contact"
                            className="form-control"
                            // placeholder="Mobile Number"
                            value={userData['secretaryContactNumber']}
                            onChange={(e) => { setUserData({ ...userData, "secretaryContactNumber": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.secretaryContactNumber}
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className='col-lg-4 col-md-4 col-sm-4'>
                            <button type="button" onClick={handleUpdate} className="btn bg-gradient-primary w-100 my-4 mb-2">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
