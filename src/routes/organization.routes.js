import { Route, Routes } from "react-router-dom";
import OrganizationDashboard from "../pages/organizationDashboard";

export default function Organization() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<OrganizationDashboard />} />
      </Routes>
    </>
  );
}