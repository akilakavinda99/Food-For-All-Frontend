import React, { useContext } from 'react'
import { multiStepContext } from './StepContex'

export default function StepTwo() {
    const { setCurrentStep, userData, setUserData, formErrors } = useContext(multiStepContext)
    return (
        <>
            <div className="card-body">
                <form className="text-start">
                    <div className="form-group text-center pb-3">President's Details</div>

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

                    <div className="form-group text-center pb-3">Secretary's Details</div>

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
                            <button type="button" onClick={() => setCurrentStep(1)} className="btn bg-gradient-secondary w-100 my-4 mb-2">Back</button>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4'>
                            <button type="button" onClick={() => setCurrentStep(3)} className="btn bg-gradient-primary w-100 my-4 mb-2">Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
