import React, { useContext } from 'react'
import { multiStepContext } from './NewFundContext'

export default function StepOne() {
    const { setCurrentStep, fundData, setFundData } = useContext(multiStepContext)
    return (
        <>
            <div className="card-body">
                <form className="text-start">
                    <div className="form-group text-center pb-3">Fundraising Details</div>
                    <div className="input-group input-group-outline my-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            value={fundData['title']}
                            onChange={(e) => { setFundData({ ...fundData, "title": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Target"
                            value={fundData['target']}
                            onChange={(e) => { setFundData({ ...fundData, "target": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <textarea
                            className="form-control"
                            placeholder="Description"
                            value={fundData['description']}
                            onChange={(e) => { setFundData({ ...fundData, "description": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="text"
                            onFocus={(e) => (e.target.type = 'date')}
                            onBlur={(e) => (e.target.type = 'text')}
                            id="date"
                            className="form-control"
                            placeholder="Ending Date"
                            value={fundData['endingDate']}
                            onChange={(e) => { setFundData({ ...fundData, "endingDate": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Budget"
                            value={fundData['budget']}
                            onChange={(e) => {
                                e.preventDefault()
                                setFundData({ ...fundData, "budget": e.target.value })
                            }} />
                    </div>
                    <input type="date" id="birthday" name="birthday"/>
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
