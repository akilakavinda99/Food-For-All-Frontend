import NavBar from '../../components/NavBar';

import StepFour from '../../components/organization/registration/StepFour';
import StepOne from '../../components/organization/registration/StepOne';
import StepThree from '../../components/organization/registration/StepThree';
import StepTwo from '../../components/organization/registration/StepTwo';

import { Stepper, StepLabel, Step } from '@material-ui/core';
import { useContext } from 'react';
import { multiStepContext } from '../../components/organization/registration/StepContex';

export default function RegisterOrganization() {

    const { currentStep, finalData } = useContext(multiStepContext);

    function showStep(step) {
        switch (step) {
            case 1:
                return <StepOne />
            case 2:
                return <StepTwo />
            case 3:
                return <StepThree />
            case 4:
                return <StepFour />
            default:
                return <StepOne />
        }
    }

    return (
        <>
            <NavBar />
            <h3>Register as an organization</h3>
            {/* <div className='d-flex justify-content-center'> */}
            <Stepper style={{ width: '100%' }} activeStep={currentStep - 1} alternativeLabel>
                <Step>
                    <StepLabel>Step One</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Step Two</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Step Three</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Step Four</StepLabel>
                </Step>
            </Stepper>

            {/* <StepOne />
            <StepTwo />
            <StepThree />
            <StepFour /> */}

            {showStep(currentStep)}

            {/* </div> */}
        </>
    );
}