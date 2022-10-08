import { Route, Routes } from "react-router-dom";
import NewFundContext from "../components/fund/createFund/NewFundContext";
import NewFund from "../pages/fund/newFund";
import ViewAllFunds from "../pages/fund/viewAllFunds";
import ViewSelectedFund from "../pages/fund/viewSelectedFund";
import EditFundDetails from "../pages/fund/editFundDetails";
import EditFundContext from "../components/fund/editFund/EditFundContext";

export default function Fund() {
  return (
    <>
      <Routes>
        <Route path="/all" element={<ViewAllFunds />} />
        <Route path="/new" element={<NewFundContext><NewFund /></NewFundContext>} />
        <Route path="/editFund" element={<EditFundContext><EditFundDetails /></EditFundContext>} />
        <Route path="/:fundID" element={<ViewSelectedFund />} />
      </Routes>
    </>
  )
}
