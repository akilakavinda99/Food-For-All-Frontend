import React, { useEffect, useState } from 'react'
import { newFund, updateFund } from '../../../api/fund.api';
import EditFund from '../../../pages/fund/editFundDetails';
import { formValidationStep1, formValidationStep2 } from '../formValidation';
import swal from "sweetalert";
import { useLocation, useNavigate } from 'react-router-dom';

export const multiStepContextEdit = React.createContext()

export default function EditFundContext() {
    const navigate = useNavigate()
    const location = useLocation();

    const [currentStep, setCurrentStep] = useState(1);
    const [fundData, setFundData] = useState({});
    const [fundImage, setFundImage] = useState(null);
    const [formErrorsStep1, setFormErrorsStep1] = useState({});
    const [formErrorsStep2, setFormErrorsStep2] = useState({});
    const [isNext, setIsNext] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    function submitData(e) {
        e.preventDefault();
        // console.log(fundData);
        setFormErrorsStep2(formValidationStep2(fundData))
        setIsSubmit(true);
    }

    function handleNext(e) {
        e.preventDefault();
        setFormErrorsStep1(formValidationStep1(fundData))
        setIsNext(true);
    }

    // To get data send from the link
    useEffect(() => {
        location.state ?
            setFundData({ ...fundData, ...location.state })
            : navigate('/organization/funds')
    }, [])

    // To handle the next button in step 1
    useEffect(() => {
        if (Object.keys(formErrorsStep1).length === 0 && isNext) {
            setCurrentStep(2);
        } else {
            setCurrentStep(1);
            setIsNext(false);
        }
    }, [formErrorsStep1, isNext])

    // To handle the submit button in step 2
    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrorsStep2).length === 0 && isSubmit) {
            // console.log(fundData);
            updateFund(fundData._id, fundData).then(res => {
                // console.log(res);
                swal(
                    "Fund successfully updated!",
                    "",
                    "success"
                ).then((value) => {
                    navigate(-1)
                })


            }).catch(err => {
                console.log(err);
                swal(
                    "Failed to update fund!",
                    err.response.data.message,
                    "error"
                )

            })
        } else {
            setIsSubmit(false);
        }
    }, [formErrorsStep2, isSubmit])

    return (
        <div>
            <multiStepContextEdit.Provider value={{ currentStep, setCurrentStep, fundData, setFundData, submitData, fundImage, setFundImage, formErrorsStep1, formErrorsStep2, handleNext }}>
                <EditFund />
            </multiStepContextEdit.Provider>
        </div>
    )
}
