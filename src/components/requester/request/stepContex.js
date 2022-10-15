import React, { useEffect, useState } from 'react';
import { formValidationStep1, formValidationStep2 } from "./formValidation";
import swal from "sweetalert";
import { newRequest } from '../../../api/requester.api';
import NewRequest from '../../../pages/requester/newRequest';
import { getCookie } from '../../common/getCookie';
import { useNavigate } from 'react-router-dom';

export const multiStepContext = React.createContext()

export default function StepContex() {

  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [requestData, setRequestData] = useState({userId: getCookie("uId")});
  const [requestImage, setRequestImage] = useState(null);
  const [formErrorsStep1, setFormErrorsStep1] = useState({});
  const [formErrorsStep2, setFormErrorsStep2] = useState({});
  const [isNext, setIsNext] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  function submitData(e) {
    e.preventDefault();
    console.log(requestData);
    setFormErrorsStep2(formValidationStep2(requestData))
    setIsSubmit(true);

  }

  function handleNext(e) {
    e.preventDefault();
    setFormErrorsStep1(formValidationStep1(requestData))
    setIsNext(true);
  }

   // To handle the next button in step 1
   useEffect(() => {
    console.log(formErrorsStep1)
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
          // console.log(requestData);
          newRequest(requestData).then(res => {
              // console.log(res);
              swal(
                  "Request successfully created!",
                  "",
                  "success"
              ).then((value) => {
                  navigate('/requester/all/requests')
              })


          }).catch(err => {
              console.log(err);
              swal(
                  "Request creation failed!",
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
      <multiStepContext.Provider value={{ currentStep, setCurrentStep, requestData, setRequestData, submitData, requestImage, setRequestImage, formErrorsStep1, formErrorsStep2, handleNext }}>
                <NewRequest />
      </multiStepContext.Provider>
    </div>
  )
}
