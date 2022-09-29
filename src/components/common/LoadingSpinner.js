import React from 'react'

export default function LoadingSpinner() {
    return (
        <div class="position-relative">
            <div class="position-absolute top-50 start-50 translate-middle">
                <div class="lds-ring">
                    <div></div><div></div><div></div><div></div>
                </div>
            </div>
        </div>
    )
}
