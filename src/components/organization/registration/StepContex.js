import React, { useEffect, useState } from 'react'
import { newOrganization } from '../../../api/organization.api';
import RegisterOrganization from '../../../pages/organization/registerOrganization';
import { formValidation } from './formValidation';
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';

export const multiStepContext = React.createContext()

export default function StepContex() {
    const navigate = useNavigate()

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
        if (
            formErrors.name ||
            formErrors.address ||
            formErrors.country ||
            formErrors.zipCode ||
            formErrors.contactNumber ||
            formErrors.email ||
            formErrors.registrationNumber
        ) { setCurrentStep(1); }
        else if (
            formErrors.presidentName ||
            formErrors.presidentEmail ||
            formErrors.presidentContactNumber ||
            formErrors.secretaryName ||
            formErrors.secretaryEmail ||
            formErrors.secretaryContactNumber
        ) { setCurrentStep(2); }
        else if (formErrors.registrationCertificate) {
            setCurrentStep(3);
        }
    }, [formErrors])

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
                ).then((value) => {
                    navigate('/user/signin')
                })

            }).catch(err => {
                console.log(err);
                swal(
                    "Organization registration failed!",
                    err.response.data.message,
                    "error"
                )

            })
        }
    }, [formErrors, isSubmit])

    return (
        <div>
            <multiStepContext.Provider value={{ currentStep, setCurrentStep, userData, setUserData, submitData, imageFile, setImageFile, formErrors }}>
                <RegisterOrganization />
            </multiStepContext.Provider>
        </div>
    )
}
