import React from 'react'
import OrganizationFunds from '../../components/fund/viewFunds/OrganizationFunds'
import SideNav from '../../components/organization/sideNav'

export default function viewOrganizationFunds() {
    const organizationID = "organizationID";
    return (
        <>
            <SideNav fund="true" />
            <OrganizationFunds organizationID={organizationID} />
        </>
    )
}
