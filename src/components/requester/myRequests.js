import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'

export default function myRequests() {
  return (
    <div>
        <nav>
            <NavBar />
        </nav>

        <h4 className="pt-3 ms-4">Account settings</h4>
      <hr className='hr-request-fund mx-4'/>

        <div class="input-group">
          <div class="form-outline">
            <input id="search-input" type="search" class="form-control" />
            <label class="form-label" for="form1">Search</label>
          </div>
          <button id="search-button" type="button" class="btn btn-primary">
            <i class="fas fa-search"></i>
          </button>
        </div>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}
