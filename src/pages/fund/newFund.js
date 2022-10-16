import React, { useContext } from 'react'
import { getCookie } from '../../components/common/getCookie';
import { multiStepContext } from '../../components/fund/createFund/NewFundContext';
import StepOne from '../../components/fund/createFund/StepOne';
import StepTwo from '../../components/fund/createFund/StepTwo';
import NavButton from '../../components/NavButton';
import SideNav from '../../components/organization/sideNav';
import Unauthorized from "../../components/common/unauthorized";

export default function NewFund() {
    const { currentStep } = useContext(multiStepContext);

    const toggleSidenav = (e) => {
        e.preventDefault();
        document.body.classList.remove("g-sidenav-pinned");
    };

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
            {
                getCookie("uId") && getCookie("access_token") && getCookie("roles") && getCookie("roles") === "5150" ? (
                    <>
                        <SideNav fund="true" />
                        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                            <NavButton path="Organization / Funds" page="New Fund" />
                            <div className="container-fluid" onClick={toggleSidenav}>
                                <h3 className="font-weight-bolder mt-4 mb-3 text-center">Create a new fund</h3>
                                <div className="my-auto pb-5">
                                    <div className="row">
                                        <div className="mx-auto col-lg-6 col-md-10 col-sm-12">
                                            <div className="card z-index-0 fadeIn3 fadeInBottom ">
                                                {showStep(currentStep)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </>
                ) : <Unauthorized />
            }
        </div>

    )
}
