import React from 'react'
import SelectedFund from '../../components/fund/viewFunds/SelectedFund'
import SideNav from '../../components/organization/sideNav'

export default function viewSelectedFund() {
  return (
    <>
        <SideNav fund="true" />
        <SelectedFund />
    </>
  )
}
