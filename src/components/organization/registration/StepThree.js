import React, { useContext } from 'react'
import { multiStepContext } from './StepContex'

export default function StepThree() {
    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext)
  return (
    <div>
        <button type="button" onClick={() => setCurrentStep(2)} className="btn bg-gradient-secondary w-100 my-4 mb-2">Back</button>
        <button type="button" onClick={() => setCurrentStep(4)} className="btn bg-gradient-primary w-100 my-4 mb-2">Next</button>
    </div>
  )
}
