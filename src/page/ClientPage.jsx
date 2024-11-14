import React from "react";
import { Route, Routes } from "react-router-dom";
import ApartmentsPage from "./ApartmentsPage";
import FilterApartment from "../components/FilterApartment";
import PlanimetriCards from "../components/filter/PlanimetriCards";

const ClientPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/apartments/:id" element={<ApartmentsPage />} />
        <Route path="/filterapartment" element={<FilterApartment />} />
          <Route path="/test" element={<PlanimetriCards />} />
          <Route path="/" element={<h1>Working</h1>} />
      </Routes>
    </div>
  );
};

export default ClientPage;
