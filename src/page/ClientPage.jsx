import React from "react";
import { Route, Routes } from "react-router-dom";
import ApartmentsPage from "./ApartmentsPage";
import FloorplanPage from "./FloorplanPage";
import GallerySlider from "../components/common/GallerySlider";
import SingleApartmentPage from "./SingleApartmentPage";
import GeneralBuilding from "./GeneralBuilding";
import Faq from "./Faq";

const ClientPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/apartments/:id" element={<ApartmentsPage />} />
        <Route path="/floor-plan-page" element={<FloorplanPage />} />
        <Route path="/test" element={<SingleApartmentPage />} />
        <Route path="/building" element={<GeneralBuilding />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
};

export default ClientPage;
