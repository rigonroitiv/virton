import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";

const ApartmentSvg = () => {
  const isSmallDev = useMediaQuery("(max-width:768px)");

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "relative",
      }}
    >
      <img
        src="/assets/images/svgphoto.png"
        alt=""
        style={{
          width: "100%",
          height: isSmallDev ? "250px" : "100%",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          display: "flex",
          top: "50%",
          left: 5,
          backgroundColor: "white",
          width: "45px",
          height: "45px",
          borderRadius: "50px",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: "#1D1D3A",
            transform: "scale(1.1)",
          },
          cursor: "pointer",
        }}
      >
        <img
          style={{ width: "15px" }}
          src="/assets/images/leftvirton.png"
          alt=""
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          display: "flex",
          top: "50%",
          right: 5,
          backgroundColor: "white",
          width: "45px",
          height: "45px",
          borderRadius: "50px",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: "#1D1D3A",
            transform: "scale(1.1)",
          },
          cursor: "pointer",
        }}
      >
        <img
          style={{ width: "15px" }}
          src="/assets/images/rightvirton.png"
          alt=""
        />
      </Box>
    </Box>
  );
};

export default ApartmentSvg;
