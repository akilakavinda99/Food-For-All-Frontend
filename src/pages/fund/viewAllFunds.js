import React from 'react'
import Footer from '../../components/Footer'
import ViewAllOngoing from '../../components/fund/viewFunds/ViewAllOngoing'
import NavBar from '../../components/NavBar'

export default function viewAllFunds() {
    return (
        <>
            <nav>
                <NavBar />
            </nav>
            <div className='px-5 py-3'>
                <ViewAllOngoing />
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
