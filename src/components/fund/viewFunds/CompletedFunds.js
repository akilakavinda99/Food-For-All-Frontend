import React, { useState, useEffect } from 'react'
import NoItems from '../../common/noItems/noItems';
import { getFundByOrganizationAndStatus } from '../../../api/fund.api';
import ViewFundsCard from './ViewFundsCard';

export default function CompletedFunds(props) {

    const [showingFunds, setShowingFunds] = useState([]);
    const [completedFunds, setCompletedFunds] = useState([])
    const [searchTerm, setsearchTerm] = useState("");

    useEffect(() => {
        try {
            getFundByOrganizationAndStatus(props.organizationID, "completed")
                .then((res) => {
                    // console.log(res.data.funds);
                    setCompletedFunds(res.data.funds);
                })
        } catch (error) {
            console.log(error);
        }
    }, [props.organizationID]);

    useEffect(() => {
        setShowingFunds(completedFunds.filter(fund =>
            fund.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            fund.description.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    }, [searchTerm, completedFunds])

    return (
        <>
            {completedFunds.length === 0 ? (
                <NoItems message="No completed funds available." />
            ) : (
                <div className="row d-flex my-3 me-3">
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="input-group input-group-outline bg-white">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search here..."
                                aria-label="Search"
                                onChange={(e) => {
                                    setsearchTerm(e.target.value);
                                }}
                            />{" "}
                        </div>
                    </div>
                </div>
            )}
            {
                completedFunds.length > 0 && showingFunds.length === 0 ? (
                    <NoItems message="No result found." />
                ) :
                    <div className="row d-fllex">
                        {
                            showingFunds.map(fund =>
                                <ViewFundsCard key={fund._id} fund={fund} />
                            )
                        }
                    </div>
            }
        </>

    )
}
