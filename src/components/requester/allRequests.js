import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'

export default function AllRequests() {
  return (
    <div>
        <nav>
            <NavBar />
        </nav>
            <div className='container mt-5'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top"
                    alt="Hollywood Sign on The Hill" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                    This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top"
                    alt="Palm Springs Road" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                    This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top"
                    alt="Los Angeles Skyscrapers" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top"
                    alt="Skyscrapers" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                    This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </p>
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
