import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'

export default function AllRequests() {
  return (
    <div>
        <nav>
            <NavBar />
        </nav>
   
    <div className='container'>
        <div class="card-deck">
        <div class="card">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
