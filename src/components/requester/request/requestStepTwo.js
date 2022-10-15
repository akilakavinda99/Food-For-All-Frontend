import React, {useContext} from 'react'
import { FileUploader } from 'react-drag-drop-files';
import { multiStepContext } from '../request/stepContex';
import "../footer.css"
import { Link } from 'react-router-dom';

export default function RequestStepTwo() {
  const { requestData, setRequestData, submitData, requestImage, setRequestImage, formErrorsStep2 } = useContext(multiStepContext);
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
        setRequestImage(file);
        getBase64(file, (result) => {
            // let output = result;
            setRequestData({ ...requestData, "requestImage": result })
        })
    }

  return (
    <div>
      <h4 className="pt-3 ms-4">Request Funds</h4>
      <p className='text-dark font-weight-normal mx-4'>Millions of children are dying every day from hunger and diseases that are made worse by undernutrition.
       No child should ever go hungry or suffer from preventable sickness and disease because their basic nutritional needs go unmet.
       The statistics are discouraging, but Feed God’s Hungry Children knows that even the smallest gift of compassion can change lives one child at a time.</p>
      <hr className='hr-request-fund mx-4'/>

    <div class="container d-flex justify-content-center pt-5 pb-5">
      
    <div className="card z-index-0 fadeIn3 fadeInBottom card-step-2">
    <div className="card-body">
        <form class="form-control"> 
          <p class="h3 fw-bold text-center mb-2 pt-4"> Let's make a request </p>
          <p class="text-center d-flex ms-3 pt-4 text-muted fw-bold"> Request details </p> 
            
            <div class="input-group input-group-outline mb-4 px-4"> 
              <input  type="text" 
                      placeholder="Request title" 
                      class="form-control"
                      value={requestData['title']}
                      onChange={(e) => { setRequestData({ ...requestData, "title": e.target.value }) }}
                      /> 
            </div> 
            <div className="text-danger p-0 m-0">
                  {formErrorsStep2.title}
            </div>

            <div class="input-group input-group-description input-group-outline mb-4 px-4"> 
              <input  type="text" 
                      placeholder="Tell your story (Description)" 
                      class="form-control"
                      value={requestData['description']}
                      onChange={(e) => { setRequestData({ ...requestData, "description": e.target.value }) }}
                      /> 
            </div> 
            <div className="text-danger p-0 m-0">
                  {formErrorsStep2.description}
            </div>

            <p class="text-center d-flex ms-3 text-muted fw-bold"> Attach documents </p>

            <div className='text-center'>
                        <div className='d-flex justify-content-center'>
                            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                        </div>
                        <p>{requestImage ? `File name: ${requestImage.name}` : "No files uploaded yet"}</p>
                        <p>{requestImage ?
                            <img className='rounded img-fluid w-50' src={requestData.requestImage} alt={requestImage.name} /> : ""}</p>
              </div>
                    <div className="text-danger form-label mb-3">
                        {formErrorsStep2.requestImage}
                    </div>

           <div class="row"> 
              <div class="mb-3 d-flex justify-content-center"> 
                <button type='submit' onClick={submitData} class="btn btn-primary d-block "> SUBMIT </button>
              </div> 
           </div>
           
        </form>
        </div>
      </div>
      </div>
  </div>
  )
}
