import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getOneRequest } from '../../api/requester.api';
import Footer from '../Footer'
import NavBar from '../NavBar';
import ViewSelectedRequest from './viewSelectedRequest';
import { getCookie } from "../common/getCookie";
import NavButton from '../NavButton';
import SideNav from '../organization/sideNav';
import { toggleSidenav } from '../common/toggleSidenav';

export default function ViewRequest() {

  const { requesterId } = useParams();
  const [requestData, setRequestData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    //fetching all inbound item data from the database
    getOneRequest(requesterId)
      .then((res) => {
        setLoading(false);
        console.log(res);

        setRequestData(res.data.requests[0]);
        // console.log(res.data);
        console.log(requestData);

      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  return (
    <div>
      {
        getCookie("roles") === '5150' ? (
          <>
            <SideNav requests="true" />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
              <NavButton page="Requests" path="User" />
              <div className="container-fluid" onClick={toggleSidenav}>
                <ViewSelectedRequest requestData={requestData} />
              </div>
            </main>
          </>
        ) : (
          <div className='mb-3'><NavBar />
            <div className="container mt-4 mb-4">
              <ViewSelectedRequest requestData={requestData} />
            </div>
          </div>
        )
      }

      {
        getCookie("roles") === "5150" ? null : (
          <footer>
            <Footer />
          </footer>)
      }

    </div>
  )
}
