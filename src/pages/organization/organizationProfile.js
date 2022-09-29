import React from 'react'
import Profile from '../../components/organization/profile/Profile'
import SideNav from '../../components/organization/sideNav'

export default function OrganizationProfile() {
    return (
        <div>
            <SideNav profile="true" />
            <Profile />
        </div>
    )
}
