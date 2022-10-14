import React from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import AllRequests from '../../components/requester/allRequests'

export default function viewAllRequests() {
    return (
        <>
            <nav>
                <NavBar />
            </nav>
            <div className='mt-3'>
                <AllRequests />
            </div>

            <footer>
                <Footer />
            </footer>
        </>
    )
}
