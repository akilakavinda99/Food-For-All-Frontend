import React from 'react'

export default function LoadingSpinner() {
    return (
        <div className="position-relative">
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="lds-ring">
                    <div></div><div></div><div></div><div></div>
                </div>
            </div>
        </div>
    )
}
