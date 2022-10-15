import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { myRequests } from '../../api/requester.api'
import Footer from '../Footer'
import NavBar from '../NavBar'
import "./footer.css"

export default function MyRequests() {
  const { userId } = useParams();
  const [requests, setRequests] = useState();

  useEffect(() => {
    myRequests(userId).then((res) => {
      setRequests(res.data.requests);
      console.log(res.data)
    });
  }, [userId]);

  return (
    <div>
        <nav>
            <NavBar />
        </nav>
        <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <h4 className="pt-4 ms-4">My Requests</h4>
          </div>
          
          <div className='col-8'>
            <div className='pt-3'>
            <div class="input-group input-group-outline">
              <div class="form-outline">
                <input id="search-input" type="search" class="form-control btn-search" />
                <label class="form-label" for="form1">Search</label>
              </div>
              <button id="search-button" type="button" class="btn btn-primary">
                <i class="fas fa-search"></i>
              </button>
            </div>

            </div>
          </div>
          </div>
        <hr className='hr-request-fund mx-4'/>

        {requests?.map((request) => (
            <div class="card mx-4 mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src={request.requestImage} class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div className='row'>
                    <div className='col-10'>
                      <h5 class="card-title">{request.title}</h5>
                    </div>
  
                    <div className='col-2'>
                    <h6><i className="bi bi-pencil-square ms-5"></i> Edit</h6>
                    </div>
  
                  </div>
                  <h6 class="card-title">By {request.fname} {request.lname}</h6>
                  <p class="card-text">{request.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        </div>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}
