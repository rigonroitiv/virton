import { Box } from "@mui/material";
import React from "react";
import SingleApartment from "../components/SingleApartment/SingleApartment";
import GallerySlider from "../components/common/GallerySlider";

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
    </Box>
  );
};

export default SingleApartmentPage;
