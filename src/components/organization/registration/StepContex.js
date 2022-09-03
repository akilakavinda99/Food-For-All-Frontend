import React, { useState } from 'react'
import RegisterOrganization from '../../../pages/organization/registerOrganization';

export const multiStepContext = React.createContext()

export default function StepContex() {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({});
    const [imageFile, setImageFile] = useState(null);

    function submitData() {
        console.log(userData);
    }

    return (
        <div>
            <multiStepContext.Provider value={{ currentStep, setCurrentStep, userData, setUserData, submitData, imageFile, setImageFile }}>
                <RegisterOrganization />
            </multiStepContext.Provider>
        </div>
    )
}
