import React, { useEffect, useState } from 'react'
import { newOrganization } from '../../../api/organization.api';
import RegisterOrganization from '../../../pages/organization/registerOrganization';
import { formValidation } from './formValidation';
import swal from "sweetalert";

export const multiStepContext = React.createContext()

export default function StepContex() {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({});
    const [imageFile, setImageFile] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    function submitData(e) {
        e.preventDefault();
        // console.log(userData);
        setFormErrors(formValidation(userData))
        setIsSubmit(true);
    }

    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(userData);
            newOrganization(userData).then(res => {
                // console.log(res);
                swal(
                    "Details successfully recorded!",
                    "Please wait until review your application.",
                    "success"
                )

            }).catch(err => {
                console.log(err);
                swal(
                    "Organization registration failed!",
                    err.response.data.message,
                    "error"
                )

            })
        }
    }, [formErrors])

    return (
        <div>
            <multiStepContext.Provider value={{ currentStep, setCurrentStep, userData, setUserData, submitData, imageFile, setImageFile, formErrors }}>
                <RegisterOrganization />
            </multiStepContext.Provider>
        </div>
    )
}
