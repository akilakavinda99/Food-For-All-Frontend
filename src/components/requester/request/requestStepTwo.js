import React from 'react'
import { FileUploader } from 'react-drag-drop-files';
import "../footer.css"
import Footer from '../../Footer';
import NavBar from '../../NavBar';
import swal from "sweetalert";

export default function requestStepTwo() {

  const fundrequest = () => {
    swal("Succesfully Requested", "", "success");
  }
  return (
    <div>
      <nav>
        <NavBar />
      </nav>

      <h4 className="pt-3 ms-4">Request Funds</h4>
      <p className='text-dark font-weight-normal mx-4'>Millions of children are dying every day from hunger and diseases that are made worse by undernutrition.
       No child should ever go hungry or suffer from preventable sickness and disease because their basic nutritional needs go unmet.
       The statistics are discouraging, but Feed God’s Hungry Children knows that even the smallest gift of compassion can change lives one child at a time.</p>
      <hr className='hr-request-fund mx-4'/>

    <div class="container d-flex justify-content-center pt-5 pb-5">
      
    <div className="card z-index-0 fadeIn3 fadeInBottom ">
    <div className="card-body">
        <form class="form-control" onSubmit={fundrequest}> 
          <p class="h3 fw-bold text-center mb-2 pt-4"> Let's make a request </p>
          <p class="text-center d-flex ms-3 pt-4 text-muted fw-bold"> Request details </p> 
            
            <div class="input-group input-group-outline mb-4 px-4"> 
              <input type="text" placeholder="Request title" class="form-control"/> 
            </div> 
            <div class="input-group input-group-description input-group-outline mb-4 px-4"> 
              <input type="text" placeholder="Tell your story (Description)" class="form-control"/> 
            </div> 

            <p class="text-center d-flex ms-3 text-muted fw-bold"> Attach documents </p>

          <div className='px-5'>
            <FileUploader />
            {/* <p>{imageFile ? `File name: ${imageFile.name}` : "No files uploaded yet"}</p> */}
            {/* <>{imageFile ?  */}
             <h7 class="text-muted d-flex"> Accepted file types: JPEG, JPG, PNG  </h7>
            <img className='rounded img-fluid'/>
          </div>

           <div class="row"> 
              <div class="mb-3 d-flex justify-content-center"> 
                <button type='submit' class="btn btn-primary d-block "> SUBMIT </button> 
              </div> 
           </div>
           
        </form>
        </div>
      </div>
      </div>

  <footer>
    <Footer />
  </footer>
  </div>
  )
}
