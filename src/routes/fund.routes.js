import { Route, Routes } from "react-router-dom";
import NewFundContext from "../components/fund/createFund/NewFundContext";
import NewFund from "../pages/fund/newFund";
import ViewSelectedFund from "../pages/fund/viewSelectedFund";
import EditFundDetails from "../pages/fund/editFundDetails";
import EditFundContext from "../components/fund/editFund/EditFundContext";

export default function Fund() {
  return (
    <>
      <Routes>
        <Route path="/new" element={<NewFundContext><NewFund /></NewFundContext>} />
        <Route path="/editFund" element={<EditFundContext><EditFundDetails /></EditFundContext>} />
        <Route path="/:fundID" element={<ViewSelectedFund />} />
      </Routes>
    </>
  )
}
