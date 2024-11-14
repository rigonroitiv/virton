import React from "react";
import PlanimetriCards from "../components/filter/PlanimetriCards";
import PlanFilter from "../components/PlanFilter";
import { Box } from "@mui/material";

const FloorplanPage = () => {
  return (
    <>
      <PlanFilter />
      <Box sx={{ padding: "50px " }}>
        <PlanimetriCards />
      </Box>
    </>
  );
};

export default FloorplanPage;
