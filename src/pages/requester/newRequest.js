import React, {useContext} from 'react'
import { multiStepContext } from '../../components/requester/request/stepContex';
import StepOne from '../../components/requester/request/requestStepOne';
import StepTwo from '../../components/requester/request/requestStepTwo'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar';

export default function NewRequest() {
    const { currentStep } = useContext(multiStepContext);

    function showStep(step) {
        switch (step) {
            case 1:
                return <StepOne />
            case 2:
                return <StepTwo />
            default:
                return <StepOne />
        }
    }

  return (
    <div>
        <nav>
            <NavBar />
        </nav>

            <div className='container'>
                {showStep(currentStep)}
            </div>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}
