import React, { useContext } from 'react'
import { FileUploader } from 'react-drag-drop-files';
import { multiStepContext } from './NewFundContext'

export default function StepTwo() {
    const { setCurrentStep, fundData, setFundData, submitData, fundImage, setFundImage } = useContext(multiStepContext);
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
        setFundImage(file);
        getBase64(file, (result) => {
            // let output = result;
            setFundData({ ...fundData, "fundImage": result })
        })
    }
    return (
        <div>
            <div className="card-body">
                <div className="form-group text-center pb-3">Fund Image</div>
                <div>
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                    <p>{fundImage ? `File name: ${fundImage.name}` : "No files uploaded yet"}</p>
                    <p>{fundImage ?
                        <img className='rounded img-fluid' src={fundData.fundImage} alt={fundImage.name} /> : ""}</p>
                </div>

                <div className="form-group text-center pb-3">Contact Information</div>
                <label className="form-label">Email</label>
                <div className="input-group input-group-outline mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder=""
                        value={fundData['contactEmail']}
                        onChange={(e) => { setFundData({ ...fundData, "contactEmail": e.target.value }) }} />
                </div>
                <label className="form-label">Contact Number</label>
                <div className="input-group input-group-outline mb-3">
                    <input
                        type="contact"
                        className="form-control"
                        placeholder=""
                        value={fundData['contactNumber']}
                        onChange={(e) => { setFundData({ ...fundData, "contactNumber": e.target.value }) }} />
                </div>

                <div className="row d-flex justify-content-center">
                    <div className='w-30'>
                        <button type="button" onClick={() => setCurrentStep(1)} className="btn bg-gradient-secondary w-100 my-4 mb-2">Back</button>
                    </div>
                    <div className='w-30'>
                        <button type="button" onClick={submitData} className="btn bg-gradient-primary w-100 my-4 mb-2">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
