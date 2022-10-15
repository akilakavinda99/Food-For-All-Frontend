import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllRequests } from '../../api/requester.api';
import AllRequestsCard from './allRequestsCard'

export default function AllRequests() {
    const [allRequests, setAllRequests] = useState();

    useEffect(() => {
        getAllRequests().then((res) => {
            setAllRequests(res.data);
        });
    }, []);

    return (
        <div className='container'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {allRequests?.map((request) => (
                    <Link to={`/requester/view/request/${request._id}`} key={request._id}>
                        <AllRequestsCard request={request} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
