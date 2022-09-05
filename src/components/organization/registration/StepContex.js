import React, { useState } from 'react'
import { newOrganization } from '../../../api/organization.api';
import RegisterOrganization from '../../../pages/organization/registerOrganization';

export const multiStepContext = React.createContext()

export default function StepContex() {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({});
    const [imageFile, setImageFile] = useState(null);

    function submitData(e) {
        console.log(userData);
        e.preventDefault();
        newOrganization(userData).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <multiStepContext.Provider value={{ currentStep, setCurrentStep, userData, setUserData, submitData, imageFile, setImageFile }}>
                <RegisterOrganization />
            </multiStepContext.Provider>
        </div>
    )
}
