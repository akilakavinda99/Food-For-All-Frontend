import React, { useContext } from 'react'
import { multiStepContext } from './StepContex'

export default function StepFour() {
    const { setCurrentStep, userData, setUserData, submitData } = useContext(multiStepContext)
    return (
        <div>
            <button type="button" onClick={() => submitData()} className="btn bg-gradient-primary w-100 my-4 mb-2">Submit</button>
        </div>
    )
}
