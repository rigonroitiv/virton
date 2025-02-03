import React from "react";
import AdmSalesHeader from "../../../components/admin/sales/AdmSalesHeader";
import { Box } from "@mui/material";
import AdmSalesTable from "../../../components/admin/sales/AdmSalesTable";

const AdmSalesPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        maxHeight: "100%",
        bgcolor: "white",
        borderRadius: "10px",
        p: 1.5,
      }}
    >
      <AdmSalesHeader />
      <AdmSalesTable />
    </Box>
  );
};

export default AdmSalesPage;
