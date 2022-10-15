import React from 'react'
import { Link } from 'react-router-dom'

export default function unauthorized() {
    return (
        <div className='unhtml mt-5 pt-5'>
            <div className='unbody'>
                <div className="untext-wrapper">
                    <div className="untitle" data-content="404">
                        403 - ACCESS DENIED
                    </div>

                    <div className="unsubtitle">
                        Oops, You don't have permission to access this page.
                    </div>
                    <div className="unisi">
                        {/* A web server may return a 403 Forbidden HTTP status code in response to a request from a client for a web page or resource to indicate that the server can be reached and understood the request, but refuses to take any further action. Status code 403 responses are the result of the web server being configured to deny access, for some reason, to the requested resource by the client. */}
                    </div>

                    <div className="unbuttons">
                        <Link className="unbutton" to={'/'}>Go to homepage</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
