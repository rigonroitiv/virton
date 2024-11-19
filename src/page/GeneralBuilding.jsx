import { Box, useMediaQuery } from "@mui/material";
import React from "react";

const GeneralBuilding = () => {
  const isSmallDev = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      sx={{
        width: "100%",
        height: isSmallDev ? "80vh" : "100vh",
        padding: isSmallDev ? "20px" : "50px",
        backgroundColor: "#1d1d3a",
        overflow: "hidden",
      }}
    >
      <img
        src="/assets/images/building.jpg"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
          borderRadius: "10px",
          overflow: "auto",
        }}
      />
    </Box>
  );
};

export default GeneralBuilding;
