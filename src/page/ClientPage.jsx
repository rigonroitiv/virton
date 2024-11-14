import React from "react";
import { Route, Routes } from "react-router-dom";
import ApartmentsPage from "./ApartmentsPage";
import FloorplanPage from "./FloorplanPage";
import ApartmentsFilter from "../components/filter/ApartmentsFilter";
import PlanFilter from "../components/PlanFilter";

const ClientPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/apartments/:id" element={<ApartmentsPage />} />
        <Route path="/floor-plan-page" element={<FloorplanPage />} />
        <Route path="/test" element={<ApartmentsPage />} />
      </Routes>
    </div>
  );
};

export default ClientPage;
