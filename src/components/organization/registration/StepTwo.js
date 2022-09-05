import React, { useContext } from 'react'
import { multiStepContext } from './StepContex'

export default function StepTwo() {
    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext)
    return (
        <>
            <div className="card-body">
                <form className="text-start">
                    <div className="form-group text-center pb-3">President's Details</div>
                    <div className="input-group input-group-outline my-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={userData['presidentName']}
                            onChange={(e) => { setUserData({ ...userData, "presidentName": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={userData['presidentEmail']}
                            onChange={(e) => { setUserData({ ...userData, "presidentEmail": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="contact"
                            className="form-control"
                            placeholder="Mobile Number"
                            value={userData['presidentContactNumber']}
                            onChange={(e) => { setUserData({ ...userData, "presidentContactNumber": e.target.value }) }} />
                    </div>

                    <div className="form-group text-center pb-3">Secretary's Details</div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={userData['secretaryName']}
                            onChange={(e) => { setUserData({ ...userData, "secretaryName": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={userData['secretaryEmail']}
                            onChange={(e) => { setUserData({ ...userData, "secretaryEmail": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="contact"
                            className="form-control"
                            placeholder="Mobile Number"
                            value={userData['secretaryContactNumber']}
                            onChange={(e) => { setUserData({ ...userData, "secretaryContactNumber": e.target.value }) }} />
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className='w-30'>
                            <button type="button" onClick={() => setCurrentStep(1)} className="btn bg-gradient-secondary w-100 my-4 mb-2">Back</button>
                        </div>
                        <div className='w-30'>
                            <button type="button" onClick={() => setCurrentStep(3)} className="btn bg-gradient-primary w-100 my-4 mb-2">Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
