import React from 'react'
import { getCookie } from '../../components/common/getCookie'
import SelectedFund from '../../components/fund/viewFunds/SelectedFund'
import SideNav from '../../components/organization/sideNav'

export default function viewSelectedFund() {
  return (
    <>
      {
        getCookie("_id") && getCookie("access_token") && getCookie("roles") && getCookie("roles") === "5150" ? (
          <>
            <SideNav fund="true" />
            <SelectedFund />
          </>
        ) : <SelectedFund />
      }
    </>
  )
}
