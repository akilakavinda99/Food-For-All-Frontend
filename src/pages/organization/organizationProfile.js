import React from 'react'
import { getCookie } from '../../components/common/getCookie'
import Profile from '../../components/organization/profile/Profile'
import SideNav from '../../components/organization/sideNav'

export default function OrganizationProfile() {
    return (
        <div>
            {
                getCookie("uId") && getCookie("access_token") && getCookie("roles") && getCookie("roles") === "5150" ? (
                    <>
                        <SideNav profile="true" />
                        <Profile />
                    </>
                ) : <Profile />
            }
        </div>
    )
}
