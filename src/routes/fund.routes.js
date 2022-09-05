import { Route, Routes } from "react-router-dom";
import NewFundContext from "../components/fund/createFund/NewFundContext";
import NewFund from "../pages/fund/newFund";

export default function Fund() {
  return (
    <>
        <Routes>
            <Route path="/new" element={<NewFundContext><NewFund /></NewFundContext>} />
        </Routes>
    </>
  )
}
