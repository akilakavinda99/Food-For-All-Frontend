import React, { useEffect, useState } from 'react'
import { getFundByOrganizationAndStatus } from '../../../api/fund.api';
import NoItems from '../../common/noItems/noItems';
import ViewFundsCard from './ViewFundsCard';

export default function PendingFunds(props) {

  const [showingFunds, setShowingFunds] = useState([]);
  const [pendingFunds, setPendingFunds] = useState([])
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    try {
      getFundByOrganizationAndStatus(props.organizationID, "pending")
        .then((res) => {
          // console.log(res.data.funds);
          setPendingFunds(res.data.funds);
        })
    } catch (error) {
      console.log(error);
    }
  }, [props.organizationID]);

  useEffect(() => {
    setShowingFunds(pendingFunds.filter(fund =>
      fund.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fund.description.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  }, [searchTerm, pendingFunds])
  return (
    <>
      {pendingFunds.length === 0 ? (
        <NoItems message="No pending funds available." />
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
        pendingFunds.length > 0 && showingFunds.length === 0 ? (
          <NoItems message="No result found." />
        ) :
          <div className="row d-flex">
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
