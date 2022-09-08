import React, { useContext } from 'react'
import { multiStepContext } from './NewFundContext'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';

export default function StepOne() {
    const { setCurrentStep, fundData, setFundData } = useContext(multiStepContext)

    return (
        <>
            <div className="card-body">
                <form className="text-start">
                    <div className="form-group text-center pb-3">Fundraising Details</div>
                    <label className="form-label">Title</label>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={fundData['title']}
                            onChange={(e) => { setFundData({ ...fundData, "title": e.target.value }) }} />
                    </div>
                    <label className="form-label">Target</label>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={fundData['target']}
                            onChange={(e) => { setFundData({ ...fundData, "target": e.target.value }) }} />
                    </div>
                    <label className="form-label">Description</label>
                    <div className="input-group input-group-outline mb-3">
                        <textarea
                            className="form-control"
                            placeholder=""
                            value={fundData['description']}
                            onChange={(e) => { setFundData({ ...fundData, "description": e.target.value }) }} />
                    </div>
                    <label className="form-label">Ending Date</label>
                    <div className="input-group input-group-outline mb-3">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Ending Date"
                                value={fundData['endingDate']}
                                onChange={(newValue) => {
                                    console.log(newValue);
                                    setFundData({ ...fundData, "endingDate": newValue.$d });
                                }}
                                renderInput={({ inputRef, inputProps, InputProps }) => (
                                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                        <input ref={inputRef} {...inputProps} placeholder='' className="form-control" />
                                        {InputProps?.endAdornment}
                                    </Box>
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                    <label className="form-label">Budget</label>
                    <div className="input-group input-group-outline mb-3">
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
                    <div className="row d-flex justify-content-center">
                        <div className='w-30'>
                            <button type="button" onClick={() => setCurrentStep(2)} className="btn bg-gradient-primary w-100 my-4 mb-2">Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
