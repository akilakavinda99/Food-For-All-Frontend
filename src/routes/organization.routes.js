import { Route, Routes } from "react-router-dom";
import StepContex from "../components/organization/registration/StepContex";
import OrganizationDashboard from "../pages/organization/organizationDashboard";
import RegisterOrganization from "../pages/organization/registerOrganization";

export default function Organization() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<OrganizationDashboard />} />
        
          <Route path="/new" element={<StepContex><RegisterOrganization /></StepContex>} />
        
      </Routes>
    </>
  );
}