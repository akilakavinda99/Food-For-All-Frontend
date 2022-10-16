import { useContext } from "react"
import { multiStepContext } from "./StepContex"

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';

export default function StepOne() {
    const { setCurrentStep, userData, setUserData, formErrors } = useContext(multiStepContext)

    return (
        <>
            <div className="card-body">
                <form className="text-start">
                    <div className="form-group text-center pb-3">Organization Details</div>

                    <label className="form-label">Organization name</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="text"
                            className="form-control"
                            // placeholder="Organization name"
                            value={userData['name']}
                            onChange={(e) => { setUserData({ ...userData, "name": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.name}
                    </div>

                    <label className="form-label">Address</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="text"
                            className="form-control"
                            // placeholder="Address"
                            value={userData['address']}
                            onChange={(e) => { setUserData({ ...userData, "address": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.address}
                    </div>

                    <label className="form-label">Country</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="text"
                            className="form-control"
                            // placeholder="Country"
                            value={userData['country']}
                            onChange={(e) => { setUserData({ ...userData, "country": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.country}
                    </div>

                    <label className="form-label">ZIP Code</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="text"
                            className="form-control"
                            // placeholder="ZIP Code"
                            value={userData['zipCode']}
                            onChange={(e) => { setUserData({ ...userData, "zipCode": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.zipCode}
                    </div>

                    <label className="form-label">Contact Number</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="contact"
                            className="form-control"
                            // placeholder="Contact Number"
                            value={userData['contactNumber']}
                            onChange={(e) => { setUserData({ ...userData, "contactNumber": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.contactNumber}
                    </div>

                    <label className="form-label">Email</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="email"
                            className="form-control"
                            // placeholder="Email"
                            value={userData['email']}
                            onChange={(e) => { setUserData({ ...userData, "email": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.email}
                    </div>

                    <label className="form-label">Registration No.</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="text"
                            className="form-control"
                            // placeholder="Registration No."
                            value={userData['registrationNumber']}
                            onChange={(e) => { setUserData({ ...userData, "registrationNumber": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.registrationNumber}
                    </div>

                    <label className="form-label">Registration Date</label>
                    <div className="input-group input-group-outline mb-1">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Registration Date"
                                value={userData['registrationDate']}
                                maxDate={new Date()}
                                onChange={(newValue) => {
                                    // console.log(newValue);
                                    setUserData({ ...userData, "registrationDate": newValue.$d });
                                }}
                                renderInput={({ inputRef, inputProps, InputProps }) => (
                                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                        <input ref={inputRef} {...inputProps} placeholder='' className="form-control" readOnly />
                                        {InputProps?.endAdornment}
                                    </Box>
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrors.registrationDate}
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <button type="button" onClick={() => setCurrentStep(2)} className="btn bg-gradient-primary w-100 my-4 mb-2">Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}