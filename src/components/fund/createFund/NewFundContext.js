import React, { useEffect, useState } from 'react'
import { newFund } from '../../../api/fund.api';
import NewFund from '../../../pages/fund/newFund';
import { formValidation } from '../../common/formValidation';

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
            console.log(fundData);
            newFund(fundData);
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
