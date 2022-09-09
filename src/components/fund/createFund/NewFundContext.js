import React, { useEffect, useState } from 'react'
import { newFund } from '../../../api/fund.api';
import NewFund from '../../../pages/fund/newFund';
import { formValidation } from './formValidation';
import swal from "sweetalert";

export const multiStepContext = React.createContext()

export default function NewFundContext() {
    const [currentStep, setCurrentStep] = useState(1);
    const [fundData, setFundData] = useState({});
    const [fundImage, setFundImage] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    function submitData(e) {
        e.preventDefault();
        // console.log(fundData);
        setFormErrors(formValidation(fundData))
        setIsSubmit(true);
    }

    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(fundData);
            newFund(fundData).then(res => {
                // console.log(res);
                swal(
                    "Fund successfully created!",
                    "",
                    "success"
                )

            }).catch(err => {
                console.log(err);
                swal(
                    "Fund creation failed!",
                    err.response.data.message,
                    "error"
                )

            })
        }
    }, [formErrors])

    return (
        <div>
            <multiStepContext.Provider value={{ currentStep, setCurrentStep, fundData, setFundData, submitData, fundImage, setFundImage, formErrors }}>
                <NewFund />
            </multiStepContext.Provider>
        </div>
    )
}
