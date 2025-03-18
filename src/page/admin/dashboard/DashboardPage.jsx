import React from "react";
import BasicInfoSection from "../../../components/admin/dashboard/BasicInfoSection";
import QuickButtonSection from "../../../components/admin/dashboard/QuickButtonSection";
import DetailedInfoSection from "../../../components/admin/dashboard/DetailedInfoSection";

const DashboardPage = () => {
  return (
    <div style={{ padding: "20px", height: "100%" }}>
      <BasicInfoSection />
      <QuickButtonSection />
      <DetailedInfoSection />
    </div>
  );
};

export default DashboardPage;
