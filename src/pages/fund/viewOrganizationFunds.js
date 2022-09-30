import React from 'react'
import OrganizationFunds from '../../components/fund/viewFunds/OrganizationFunds'
import SideNav from '../../components/organization/sideNav'

export default function viewOrganizationFunds() {
    const organizationID = "631b45ab9d2dc36d4c12a8f3";
    return (
        <>
            <SideNav fund="true" />
            <OrganizationFunds organizationID={organizationID} />
        </>
    )
}
