import React from 'react'
import { FileUploader } from 'react-drag-drop-files';
import "../footer.css"
import Footer from '../../Footer'
import NavBar from '../../NavBar'

export default function requestStepTwo() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>

      <h4 className="pt-3 ms-4">Request Funds</h4>
      <p className='pt-3 ms-4'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
      <hr/>

    <div class="container d-flex justify-content-center pt-3 pb-5">
      
    <div className="card z-index-0 fadeIn3 fadeInBottom ">
    <div className="card-body">
        <form class="form-control"> 
          <p class="h3 fw-bold text-center mb-2 pt-4"> Let's make a request </p>
          <p class="text-center d-flex ms-3 pt-4 text-muted fw-bold"> Request details </p> 
            
            <div class="input-group input-group-outline mb-4 px-4"> 
              <input type="email" placeholder="Request title" class="form-control"/> 
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
                <div class="btn btn-primary d-block "> SUBMIT </div> 
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
