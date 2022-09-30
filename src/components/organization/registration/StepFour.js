import React, { useContext } from 'react'
import { multiStepContext } from './StepContex'

export default function StepFour() {
    const { setCurrentStep, userData, setUserData, submitData, formErrors } = useContext(multiStepContext)
    return (
        <>
            <div className="card-body">
                <form className="text-start">
                    <div className="form-group text-center pb-3">Security</div>

                    <label className="form-label">Password</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="password"
                            className="form-control"
                            // placeholder="Password"
                            value={userData['password']}
                            onChange={(e) => { setUserData({ ...userData, "password": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.password}
                    </div>

                    <label className="form-label">Re-type Password</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="password"
                            className="form-control"
                            // placeholder="Re-type Password"
                            value={userData['repassword']}
                            onChange={(e) => { setUserData({ ...userData, "repassword": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.repassword}
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault"
                            value={userData['terms']}
                            onChange={(e) => { setUserData({ ...userData, "terms": e.target.checked }) }} />
                        <label className="form-check-label ms-3" htmlFor="flexCheckDefault">
                            I agree with Terms and Conditions and the privacy policy
                        </label>
                        <div className="text-danger form-label mb-3">
                            {formErrors.terms}
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className='col-lg-4 col-md-4 col-sm-4'>
                            <button type="button" onClick={() => setCurrentStep(3)} className="btn bg-gradient-secondary w-100 my-4 mb-2">Back</button>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4'>
                            <button type="button" onClick={submitData} className="btn bg-gradient-primary w-100 my-4 mb-2">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
