import React from "react";
import { Route, Routes } from "react-router-dom";
import ApartmentsPage from "./ApartmentsPage";
import FloorplanPage from "./FloorplanPage";
import GallerySlider from "../components/common/GallerySlider";
import SingleApartmentPage from "./SingleApartmentPage";
import GeneralBuilding from "./GeneralBuilding";
import Faq from "./Faq";
import TermsConditions from "./TermsConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import FloorSvg from "../components/floorSvg/FloorSvg";
import Navbar from "../components/common/Navbar";

const ClientPage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/:projectid/apartments/:id" element={<ApartmentsPage />} />
        <Route path="/floor-plan-page" element={<FloorplanPage />} />
        <Route path="/apartment/:id" element={<SingleApartmentPage />} />
        <Route path="/:id" element={<GeneralBuilding />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/test" element={<FloorSvg />} />
      </Routes>
    </div>
  );
};

export default ClientPage;
