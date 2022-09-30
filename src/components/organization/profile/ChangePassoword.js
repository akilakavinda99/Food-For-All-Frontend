import React, { useState } from 'react'
import { changeOrganizationPassword } from '../../../api/organization.api'

export default function ChangePassoword({ organizationId }) {
    const [newPassword, setNewPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [formErrors, setFormErrors] = useState({})
    const [alert, setAlert] = useState({})

    const changePassword = (e) => {
        e.preventDefault()
        if (newPassword.length < 8) {
            setFormErrors({ newPassword: "Password must be at least 8 characters long" })
        } else if (newPassword !== rePassword) {
            setFormErrors({ rePassword: "Passwords do not match" })
        } else {
            setFormErrors({})
            // console.log(organizationId, newPassword);
            changeOrganizationPassword(organizationId, { password: newPassword })
                .then(res => {
                    setNewPassword("")
                    setRePassword("")
                    setAlert({ type: "success", message: "Password changed successfully" })
                }).catch(err => {
                    setAlert({ type: "danger", message: err.response.data.message })
                })
        }
    }

    const closeAlert = (e) => {
        e.preventDefault()
        setAlert({})
    }

    return (
        <div>
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
                    <h5 className="form-group text-center pb-3">Security</h5>

                    <label className="form-label">Password</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="password"
                            className="form-control"
                            // placeholder="Password"
                            value={newPassword}
                            onChange={(e) => { setNewPassword(e.target.value) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.newPassword}
                    </div>

                    <label className="form-label">Re-type Password</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="password"
                            className="form-control"
                            // placeholder="Re-type Password"
                            value={rePassword}
                            onChange={(e) => { setRePassword(e.target.value) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.rePassword}
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className='col-lg-4 col-md-4 col-sm-4'>
                            <button type="button" onClick={changePassword} className="btn bg-gradient-primary w-100 my-4 mb-2">Change</button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
            </div>
        </div>
    )
}
