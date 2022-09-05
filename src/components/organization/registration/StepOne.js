import { useContext } from "react"
import { multiStepContext } from "./StepContex"

export default function StepOne() {
    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext)

    const testData = (e) => {
        e.preventDefault()
        userData.name = "test org"
        userData.address = "kalutara"
        userData.country = "sri lanka"
        userData.zipCode = "12000"
        userData.contactNumber = "0123456789"
        userData.email = "test@test.com"
        userData.registrationNumber = "abc/123"
        userData.registrationDate = "2016-10-05"
        userData.presidentName = "pres name"
        userData.presidentEmail = "pres@test.com"
        userData.presidentContactNumber = "0123456789"
        userData.secretaryName = "secr"
        userData.secretaryEmail = "secr@test.com"
        userData.secretaryContactNumber = "0123456789"
        userData.password = "123"
        userData.repassword = "123"
    }



    return (
        <>
            <button className="bg-danger text-white p-3" onClick={(e)=>{testData(e)}}>Test data</button>
            <div className="card-body">
                <form className="text-start">
                    <div className="form-group text-center pb-3">Organization Details</div>
                    <div className="input-group input-group-outline my-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Organization name"
                            value={userData['name']}
                            onChange={(e) => { setUserData({ ...userData, "name": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Address"
                            value={userData['address']}
                            onChange={(e) => { setUserData({ ...userData, "address": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Country"
                            value={userData['country']}
                            onChange={(e) => { setUserData({ ...userData, "country": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="ZIP Code"
                            value={userData['zipCode']}
                            onChange={(e) => { setUserData({ ...userData, "zipCode": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="contact"
                            className="form-control"
                            placeholder="Contact Number"
                            value={userData['contactNumber']}
                            onChange={(e) => { setUserData({ ...userData, "contactNumber": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={userData['email']}
                            onChange={(e) => { setUserData({ ...userData, "email": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Registration No."
                            value={userData['registrationNumber']}
                            onChange={(e) => { setUserData({ ...userData, "registrationNumber": e.target.value }) }} />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input
                            type="text"
                            onFocus={(e) => (e.target.type = 'date')}
                            onBlur={(e) => (e.target.type = 'text')}
                            id="date"
                            className="form-control"
                            placeholder="Registration Date"
                            value={userData['registrationDate']}
                            onChange={(e) => { setUserData({ ...userData, "registrationDate": e.target.value }) }} />
                    </div>

                    <div className="text-center">
                        <button type="button" onClick={() => setCurrentStep(2)} className="btn bg-gradient-primary w-30 my-4 mb-2">Next</button>
                    </div>
                </form>
            </div>
        </>
    )
}