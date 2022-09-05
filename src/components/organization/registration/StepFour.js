import React, { useContext } from 'react'
import { multiStepContext } from './StepContex'

export default function StepFour() {
    const { setCurrentStep, userData, setUserData, submitData } = useContext(multiStepContext)
    return (
        <>
            <div className="card-body">
                <form className="text-start">
                    <div className="form-group text-center pb-3">President's Details</div>
                    <div className="input-group input-group-outline my-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={userData['password']}
                            onChange={(e) => { setUserData({ ...userData, "password": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Re-type Password"
                            value={userData['repassword']}
                            onChange={(e) => { setUserData({ ...userData, "repassword": e.target.value }) }} />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                I agree with Terms and Conditions and the privacy policy
                            </label>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className='w-30'>
                            <button type="button" onClick={() => setCurrentStep(3)} className="btn bg-gradient-secondary w-100 my-4 mb-2">Back</button>
                        </div>
                        <div className='w-30'>
                            <button type="button" onClick={submitData} className="btn bg-gradient-primary w-100 my-4 mb-2">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
            </div>
        </>
    )
}
