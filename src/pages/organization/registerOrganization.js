import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import StepFour from '../../components/organization/registration/StepFour';
import StepOne from '../../components/organization/registration/StepOne';
import StepThree from '../../components/organization/registration/StepThree';
import StepTwo from '../../components/organization/registration/StepTwo';

import { Stepper, StepLabel, Step } from '@material-ui/core';
import { useContext } from 'react';
import { multiStepContext } from '../../components/organization/registration/StepContex';

export default function RegisterOrganization() {

    const { currentStep, setCurrentStep } = useContext(multiStepContext);

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

    // function to navigate to the relevant step in the stepper on the top of the form
    function clickStepLabel(step) {
        // can navigate only for the previous steps
        // if (step < currentStep) {
        //     setCurrentStep(step);
        // }

        // can navigate to any step
        setCurrentStep(step);
    }

    return (
        <>
            <NavBar />
            <h3 className="font-weight-bolder mt-5 mb-3 text-center">Register as an organization</h3>
            {/* <div className='d-flex justify-content-center'> */}
            <div className="container my-auto mb-5">
                <div className="row">
                    <div className="mx-auto col-lg-6 col-md-10 col-sm-12">
                        <div className="card z-index-0 fadeIn3 fadeInBottom ">
                            <Stepper style={{ width: '100%' }} activeStep={currentStep - 1} alternativeLabel>
                                <Step onClick={() => clickStepLabel(1)} className='cursor-pointer'>
                                    <StepLabel></StepLabel>
                                </Step>
                                <Step onClick={() => clickStepLabel(2)} className='cursor-pointer'>
                                    <StepLabel></StepLabel>
                                </Step>
                                <Step onClick={() => clickStepLabel(3)} className='cursor-pointer'>
                                    <StepLabel></StepLabel>
                                </Step>
                                <Step onClick={() => clickStepLabel(4)} className='cursor-pointer'>
                                    <StepLabel></StepLabel>
                                </Step>
                            </Stepper>

                            {showStep(currentStep)}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}