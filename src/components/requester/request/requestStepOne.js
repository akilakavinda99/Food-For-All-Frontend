import React, {useContext} from 'react'
import { multiStepContext } from '../request/stepContex'

export default function RequestStepOne() {
  const { requestData, setRequestData, formErrorsStep1, handleNext } = useContext(multiStepContext)
  return (
    <div>
      <h4 className="pt-3 ms-4">Request Funds</h4>
      <p className='text-dark font-weight-normal fw-bold mx-4'>Millions of children are dying every day from hunger and diseases that are made worse by undernutrition. 
      No child should ever go hungry or suffer from preventable sickness and disease because their basic nutritional needs go unmet. The statistics are discouraging, 
      but Feed God’s Hungry Children knows that even the smallest gift of compassion can change lives one child at a time.</p>
      <hr className='hr-request-fund mx-4'/>

    <div class="container d-flex justify-content-center pt-4 pb-5">
      
    <div className="card z-index-0 fadeIn3 fadeInBottom ">
    <div className="card-body">
        <form class="form-control"> 
          <p class="h3 fw-bold text-center mb-2 pt-4"> Let's make a request </p>
          
          <p class="text-center d-flex ms-3 pt-3 text-muted fw-bold "> Requester's personal information </p> 

            <div class="row input-group input-group-outline m-0 pb-4 px-4"> 
              <div class="col-md-6 ps-0"> 
                <input class="form-control" 
                type="text"
                placeholder='First name'
                value={requestData['fname']}
                onChange={(e) => { setRequestData({ ...requestData, "fname": e.target.value }) }}
                />
                <div className="text-danger p-0 m-0">
                  {formErrorsStep1.fname}
                </div>
              </div>
              

              <div class="col-md-6 pe-0">
                <input class="form-control" 
                type="text"
                placeholder='Last name'
                value={requestData['lname']}
                onChange={(e) => { setRequestData({ ...requestData, "lname": e.target.value }) }}
                />
                <div className="text-danger p-0 m-0">
                  {formErrorsStep1.lname}
                </div>
              </div> 
            </div>
            
          <div className='row pb-3 px-4'>
            <div class="input-group input-group-outline"> 
              <input type="text" 
                    placeholder="Telephone number" 
                    class="form-control"
                    value={requestData['tpno']}
                    onChange={(e) => { setRequestData({ ...requestData, "tpno": e.target.value }) }}
                    />
            </div> 
              <div className="text-danger">
                  {formErrorsStep1.telephoneNo}
              </div>
          </div>

            <p class="text-center d-flex ms-3 text-muted fw-bold "> Benificiary's contact information </p> 

            <div class="row input-group input-group-outline m-0 px-4"> 
              <div class="col-md-6 mb-4 ps-0"> 
                <input class="form-control" 
                        type="text" 
                        placeholder="Country"
                        value={requestData['country']}
                        onChange={(e) => { setRequestData({ ...requestData, "country": e.target.value }) }}
                        />
                      <div className="text-danger">
                          {formErrorsStep1.country}
                      </div>
              </div>
              
              <div class="col-md-6 mb-4 pe-0">
                <input class="form-control" 
                      type="text" 
                      placeholder="Zip code"
                      value={requestData['zipcode']}
                      onChange={(e) => { setRequestData({ ...requestData, "zipcode": e.target.value }) }}
                      />
                  <div className="text-danger">
                        {formErrorsStep1.zipcode}
                  </div>
              </div>
               
            </div>
            <div className='row pb-3 px-2'>
            <div class="input-group input-group-outline px-4"> 
              <input type="text" 
              placeholder="Address" 
              class="form-control"
              value={requestData['address']}
              onChange={(e) => { setRequestData({ ...requestData, "address": e.target.value }) }}
              />
              </div>
              <div className="text-danger ms-3">
                  {formErrorsStep1.address}
              </div>
            </div> 


            <div className='row pb-3 px-2'>
            <div class="input-group input-group-outline px-4"> 
              <input type="email" 
              placeholder="Email Address" 
              class="form-control"
              value={requestData['email']}
              onChange={(e) => { setRequestData({ ...requestData, "email": e.target.value }) }}
              /> 
            </div> 
            <div className="text-danger ms-3">
                  {formErrorsStep1.email}
            </div>
            </div>

            <div className='row pb-3 px-2'>
            <div class="input-group input-group-outline px-4"> 
              <input type="text" 
              placeholder="Telephone number" 
              class="form-control"
              value={requestData['contactno']}
              onChange={(e) => { setRequestData({ ...requestData, "contactno": e.target.value }) }}
              /> 
            </div> 
            <div className="text-danger ms-3">
                  {formErrorsStep1.contactNo}
            </div>
            </div>
          
           <div class="row"> 
              <div class="mb-3 d-flex justify-content-center"> 
                <button type="button" class="btn btn-primary d-block" onClick={handleNext}> NEXT </button>
              </div> 
           </div>
           
        </form>
        </div>
      </div>
      </div>
  </div>
  )
}
