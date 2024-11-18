import { Box, Button, Typography } from "@mui/material";
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
      <Box
        sx={{
          height: "450px",
          backgroundColor: "#1d1d3a",
          display: "flex",
          flexDirection: "column",
          padding: "150px 50px 0 50px",
          gap: "30px",
        }}
      >
        <Box>
          <Button
            sx={{
              width: "240px",
              backgroundColor: "white",
              color: "#1d1d3a",
              borderRadius: "50px",
              height: "55px",
            }}
          >
            {" "}
            <img
              src="/assets/images/vector1.png"
              alt=""
              style={{ marginRight: "10px" }}
            />
            Kthehu pas
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: "poppins",
              fontWeight: "600",
              fontSize: "70px",
              color: "#C1AC40",
            }}
          >
            Apartamenti: <span style={{ color: "white" }}>A10</span>
          </Typography>
        </Box>
      </Box>
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
