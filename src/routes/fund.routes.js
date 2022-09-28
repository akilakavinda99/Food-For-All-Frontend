import { Route, Routes } from "react-router-dom";
import NewFundContext from "../components/fund/createFund/NewFundContext";
import NewFund from "../pages/fund/newFund";
import ViewSelectedFund from "../pages/fund/viewSelectedFund";

export default function Fund() {
  return (
    <>
      <Routes>
        <Route path="/new" element={<NewFundContext><NewFund /></NewFundContext>} />
        <Route path="/:fundID" element={<ViewSelectedFund />} />
      </Routes>
    </>
  )
}
