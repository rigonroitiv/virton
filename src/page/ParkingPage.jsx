import React from "react";
import ParkingSvg from "../components/parking/ParkingSvg";
import { Box, Typography, useMediaQuery } from "@mui/material";

const ParkingPage = () => {
  const isSmallDev = useMediaQuery("(max-width:768px)");

  return (
    <div>
      <ParkingSvg />
      <Box
        sx={{
          position: "fixed",
          left: 5,
          top: isSmallDev ? "" : "20%",
          bottom: isSmallDev ? "20%" : "",
        }}
      >
        <Box sx={{ display: "flex", gap: "3px" }}>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50px",
              bgcolor: "red",
            }}
          ></Box>
          <Typography>E Shitur</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "3px" }}>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50px",
              bgcolor: "#1d1d3a",
            }}
          ></Box>
          <Typography>E Rezervuar</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "3px" }}>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50px",
              bgcolor: "#C1AC40",
            }}
          ></Box>
          <Typography>E lire</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default ParkingPage;
