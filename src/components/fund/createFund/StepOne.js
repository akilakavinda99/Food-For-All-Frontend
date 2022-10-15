import React, { useContext } from 'react'
import { multiStepContext } from './NewFundContext'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';

export default function StepOne() {
    const { fundData, setFundData, formErrorsStep1, handleNext } = useContext(multiStepContext)

    return (
        <>
            <div className="card-body">
                <form className="text-start">
                    <div className="form-group text-center pb-3">Fundraising Details</div>
                    <label className="form-label">Title</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={fundData['title']}
                            onChange={(e) => { setFundData({ ...fundData, "title": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrorsStep1.title}
                    </div>

                    <label className="form-label">Target</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={fundData['target']}
                            onChange={(e) => { setFundData({ ...fundData, "target": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrorsStep1.target}
                    </div>

                    <label className="form-label">Description</label>
                    <div className="input-group input-group-outline mb-1">
                        <textarea
                            className="form-control"
                            placeholder=""
                            value={fundData['description']}
                            onChange={(e) => { setFundData({ ...fundData, "description": e.target.value }) }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrorsStep1.description}
                    </div>

                    <label className="form-label">Ending Date</label>
                    <div className="input-group input-group-outline mb-1">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Ending Date"
                                value={fundData['endingDate']}
                                onChange={(newValue) => {
                                    // console.log(newValue);
                                    setFundData({ ...fundData, "endingDate": newValue.$d });
                                }}
                                minDate={new Date()}
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
                        {formErrorsStep1.endingDate}
                    </div>

                    <label className="form-label">Budget</label>
                    <div className="input-group input-group-outline mb-1">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={fundData['budget']}
                            onChange={(e) => {
                                e.preventDefault()
                                setFundData({ ...fundData, "budget": e.target.value })
                            }} />
                    </div>
                    <div className="text-danger form-label mb-3">
                        {formErrorsStep1.budget}
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className='col-lg-4 col-md-4 col-sm-4'>
                            <button type="button" onClick={handleNext} className="btn bg-gradient-primary w-100 my-4 mb-2">Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
