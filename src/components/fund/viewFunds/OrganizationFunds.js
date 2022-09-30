import React from 'react'
import { Link } from 'react-router-dom';
import { toggleSidenav } from '../../common/toggleSidenav';
import NavButton from '../../NavButton'
import CompletedFunds from './CompletedFunds';
import OngoingFunds from './OngoingFunds';
import PendingFunds from './PendingFunds';

export default function OrganizationFunds(props) {

    return (
        <>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <NavButton page="Funds" path="Organization" />

                <div className="container-fluid py-4 " onClick={toggleSidenav}>
                    <Link to="/fund/new" className="btn btn-primary mb-3">Create new fund</Link>
                    <div className="card-body">
                        <ul
                            className="nav nav-tabs"
                            id="fundTabs"
                            role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#ongoingFunds"
                                    type="button"
                                    role="tab"
                                    aria-controls="ongoingFunds"
                                    aria-selected="false">
                                    Ongoing
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#completedFunds"
                                    type="button"
                                    role="tab"
                                    aria-controls="completedFunds"
                                    aria-selected="true">
                                    Completed
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="pending-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#pendingFunds"
                                    type="button"
                                    role="tab"
                                    aria-controls="pendingFunds"
                                    aria-selected="true">
                                    Pending
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane show active"
                                id="ongoingFunds"
                                role="tabpanel"
                                aria-labelledby="ongoind-tab">
                                <OngoingFunds organizationID={props.organizationID} />
                            </div>
                            <div
                                className="tab-pane"
                                id="completedFunds"
                                role="tabpanel"
                                aria-labelledby="complete-tab">
                                <CompletedFunds organizationID={props.organizationID} />
                            </div>
                            <div
                                className="tab-pane"
                                id="pendingFunds"
                                role="tabpanel"
                                aria-labelledby="pending-tab">
                                <PendingFunds organizationID={props.organizationID} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
