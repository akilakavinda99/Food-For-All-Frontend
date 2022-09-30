import React from 'react'
import { getCookie } from '../../components/common/getCookie';
import OrganizationFunds from '../../components/fund/viewFunds/OrganizationFunds'
import SideNav from '../../components/organization/sideNav'
import Unauthorized from "../../components/common/unauthorized";

export default function viewOrganizationFunds() {
    const organizationID = getCookie("_id");
    return (
        <>
            {
                getCookie("_id") && getCookie("access_token") && getCookie("roles") && getCookie("roles") === "5150" ? (
                    <>
                        <SideNav fund="true" />
                        <OrganizationFunds organizationID={organizationID} />
                    </>
                ) : <Unauthorized />
            }
        </>
    )
}
