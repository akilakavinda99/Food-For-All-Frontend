import React from 'react'

export default function allRequestsCard({ request }) {
    return (
        <div class="col">
            <div class="card">
                <img src={request.requestImage} class="card-img-top"
                    alt={request.title} />
                <div class="card-body">
                    <h5 class="card-title">{request.title}</h5>
                    <p class="card-text">
                        {request.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
