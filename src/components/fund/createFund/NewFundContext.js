import React, { useState } from 'react'
import NewFund from '../../../pages/fund/newFund';

export const multiStepContext = React.createContext()

export default function NewFundContext() {
    const [currentStep, setCurrentStep] = useState(1);
    const [fundData, setFundData] = useState({});
    const [fundImage, setFundImage] = useState(null);

    function submitData(e) {
        e.preventDefault();
        console.log(fundData);
    }

    return (
        <div>
            <multiStepContext.Provider value={{ currentStep, setCurrentStep, fundData, setFundData, submitData, fundImage, setFundImage }}>
                <NewFund />
            </multiStepContext.Provider>
        </div>
    )
}
