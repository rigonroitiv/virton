import React from "react";
import PlanimetriCards from "../components/filter/PlanimetriCards";
import PlanFilter from "../components/PlanFilter";
import { Box, useMediaQuery } from "@mui/material";

const FloorplanPage = () => {
  const isSmallDev = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <PlanFilter />
      <Box sx={{ padding: isSmallDev ? "20px" : "50px " }}>
        <PlanimetriCards />
      </Box>
    </>
  );
};

export default FloorplanPage;
