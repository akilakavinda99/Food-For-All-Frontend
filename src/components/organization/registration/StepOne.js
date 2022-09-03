import { useContext } from "react"
import { multiStepContext } from "./StepContex"

export default function StepOne() {
    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext)
    return (
        <>
            <div class="container my-auto">
                <div class="row">
                    <div class="mx-auto">
                        <div class="card z-index-0 fadeIn3 fadeInBottom">
                            <div class="card-body">
                                <form class="text-start">
                                    <div class="form-group text-center pb-3">Organization Details</div>
                                    <div class="input-group input-group-outline my-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Organization name"
                                            value={userData['name']}
                                            onChange={(e) => { setUserData({ ...userData, "name": e.target.value }) }} />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Address"
                                            value={userData['address']}
                                            onChange={(e) => { setUserData({ ...userData, "address": e.target.value }) }} />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Country"
                                            value={userData['country']}
                                            onChange={(e) => { setUserData({ ...userData, "country": e.target.value }) }} />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="ZIP Code"
                                            value={userData['zipCode']}
                                            onChange={(e) => { setUserData({ ...userData, "zipCode": e.target.value }) }} />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input
                                            type="contact"
                                            class="form-control"
                                            placeholder="Contact Number"
                                            value={userData['contactNumber']}
                                            onChange={(e) => { setUserData({ ...userData, "contactNumber": e.target.value }) }} />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input
                                            type="email"
                                            class="form-control"
                                            placeholder="Email"
                                            value={userData['email']}
                                            onChange={(e) => { setUserData({ ...userData, "email": e.target.value }) }} />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Registration No."
                                            value={userData['registrationNumber']}
                                            onChange={(e) => { setUserData({ ...userData, "registrationNumber": e.target.value }) }} />
                                    </div>
                                    <div class="input-group input-group-outline mb-3">
                                        <input
                                            type="date"
                                            class="form-control"
                                            placeholder="Registration Date"
                                            value={userData['registrationDate']}
                                            onChange={(e) => { setUserData({ ...userData, "registrationDate": e.target.value }) }} />
                                    </div>


                                    <div class="text-center">
                                        <button type="button" onClick={() => setCurrentStep(2)} className="btn bg-gradient-primary w-100 my-4 mb-2">Next</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}