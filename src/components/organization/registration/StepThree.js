import React, { useContext } from 'react'
import { multiStepContext } from './StepContex'
import { FileUploader } from "react-drag-drop-files";

export default function StepThree() {
  const { setCurrentStep, userData, setUserData, imageFile, setImageFile, formErrors } = useContext(multiStepContext)
  const fileTypes = ["JPEG", "JPG", "PNG"];


  // Convert file into base64
  function getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  const handleChange = (file) => {
    setImageFile(file);
    getBase64(file, (result) => {
      // let output = result;
      setUserData({ ...userData, "registrationCertificate": result })
    })
  }

  return (
    <>
      <div className="card-body">
        <div className="form-group text-center pb-3">Upload registration certificate</div>
        <div className='text-center'>
          <div className='d-flex justify-content-center'>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
          </div>
          <p>{imageFile ? `File name: ${imageFile.name}` : "No files uploaded yet"}</p>
          <p>{imageFile ?
            <img className='rounded img-fluid w-50 mx-auto d-block' src={userData.registrationCertificate} alt={imageFile.name} /> : ""}</p>
        </div>
        <div className="text-danger form-label mb-3">
          {formErrors.registrationCertificate}
        </div>
        <div className="row d-flex justify-content-center">
          <div className='col-lg-4 col-md-4 col-sm-4'>
            <button type="button" onClick={() => setCurrentStep(2)} className="btn bg-gradient-secondary w-100 my-4 mb-2">Back</button>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4'>
            <button type="button" onClick={() => setCurrentStep(4)} className="btn bg-gradient-primary w-100 my-4 mb-2">Next</button>
          </div>
        </div>
      </div>
    </>
  )
}
