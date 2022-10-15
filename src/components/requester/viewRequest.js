import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getOneRequest } from '../../api/requester.api';
import Footer from '../Footer'
import NavBar from '../NavBar';
import { getCookie } from "../common/getCookie";

export default function ViewRequest() {

  const { requesterId } = useParams();
  const [requestData, setRequestData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    //fetching all inbound item data from the database
    getOneRequest(requesterId)
      .then((res) => {
        setLoading(false);
        console.log(res);

        setRequestData(res.data.requests[0]);
        // console.log(res.data);
        console.log(requestData);
        
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  return (
      <div>
        <nav>
          <NavBar />
        </nav>

        <div className="container mt-4 mb-4">
          <h3>{requestData.title}</h3>
          <div className="row">
            <div className="col-8">
            <div class="card-deck">
              <div class="card">
                <img src={requestData.requestImage} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <div className='row border-bottom'>
                    <h5 class="text-normal"><i class="bi bi-person-circle"></i> {requestData.fname} {requestData.lname} is organizing this fund request.</h5>
                  </div>
                  <div className='row border-bottom'>
                    <p class="card-text">{requestData.description}</p>
                  </div>
                </div>
              </div>
            </div>
            {requestData.userId == getCookie('uId')
            ?(
            <div className="d-flex justify-content-center mt-4">
              <button type="button" class="btn btn-outline-danger">Remove Fund Request</button>
            </div>) : null
            } 
            
            </div>
            <div className="col-4">
            <div class="card">
              <div class="card-body">
                <div className='row border-bottom'>
                  <h5 class="card-title"><center>Beneficiary's contact information</center></h5>
                </div>

                <div className='row'>
                  <div className='col-2 ms-2'>
                    <h3><i class="bi bi-person-circle"></i></h3>
                  </div>
                  <div className='col-9 ps-0'>
                    <h6 className='pt-2'>{requestData.fname} {requestData.lname}</h6>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-2 ms-2'>
                    <h3><i class="bi bi-geo-alt-fill"></i></h3>
                  </div>
                  <div className='col-9 ps-0'>
                    <h6 className='pt-2 text-muted'>{requestData.address}</h6>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-2 ms-2'>
                    <h3><i class="bi bi-phone-fill"></i></h3>
                  </div>
                  <div className='col-9 ps-0'>
                    <h6 className='pt-2 text-muted'>{requestData.tpno}</h6>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-2 ms-2'>
                    <h3><i class="bi bi-envelope-open-fill"></i></h3>
                  </div>
                  <div className='col-9 ps-0'>
                    <h6 className='pt-2 text-muted'>{requestData.email}</h6>
                  </div>
                </div>

                <div className='row border-top'>
                  <h6 class="card-text"><center>Share your fund request on social networks</center></h6>            
                </div>

              <div class="d-flex justify-content-center">
                <h3><i class="bi bi-facebook me-4"></i></h3>
                <h3><i class="bi bi-twitter me-4"></i></h3>
                <h3><i class="bi bi-instagram me-4"></i></h3>
                <h3><i class="bi bi-whatsapp"></i></h3>
              </div>
                
              </div>
            </div>
            </div>
        </div>

      
      </div>
        <footer>
          <Footer />
        </footer>
      </div>
  )
}
