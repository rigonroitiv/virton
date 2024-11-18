import { Box, Typography } from "@mui/material";
import React from "react";
import SingleApartment from "../components/SingleApartment/SingleApartment";
import GallerySlider from "../components/common/GallerySlider";
import PlanimetriCards from "../components/filter/PlanimetriCards";

const images = [
  "/assets/images/galeria1.jpg",
  "/assets/images/galeria2.jpg",
  "/assets/images/galeria3.jpg",
];

const SingleApartmentPage = () => {
  return (
    <Box>
      <Box sx={{ height: "450px", backgroundColor: "#1d1d3a" }}>Headeri</Box>
      <Box sx={{ padding: "50px" }}>
        <SingleApartment />
      </Box>
      <GallerySlider images={images} />
      <Box sx={{ display: "flex", flexDirection: "column", padding: "50px" }}>
        <Typography
          sx={{ fontFamily: "poppins", fontSize: "50px", fontWeight: "300" }}
        >
          Apartamentet e <span style={{ fontWeight: "700" }}>ngjajshme</span>
        </Typography>

        <PlanimetriCards />
      </Box>
    </Box>
  );
};

export default SingleApartmentPage;
