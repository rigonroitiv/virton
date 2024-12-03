import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import SingleApartment from "../components/SingleApartment/SingleApartment";
import GallerySlider from "../components/common/GallerySlider";
import PlanimetriCards from "../components/filter/PlanimetriCards";
import Logo from "../assets/svg/logo";
import PlanimetricSlides from "../components/filter/PlanimetricSlides";

const images = [
  "/assets/images/galeria1.jpg",
  "/assets/images/galeria2.jpg",
  "/assets/images/galeria3.jpg",
];

const SingleApartmentPage = () => {
  const isSmallDev = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      <Box
        sx={{
          height: isSmallDev ? "350px" : "450px",
          backgroundColor: "#1d1d3a",
          display: "flex",
          flexDirection: "column",
          padding: isSmallDev ? "100px 20px" : "150px 50px 0 50px",
          gap: "30px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "absolute", top: "-140px", right: "-150px" }}>
          {" "}
          <Logo height={"444px"} width={"444px"} />{" "}
        </Box>

        <Box sx={{ position: "absolute", bottom: "-140px", left: "-150px" }}>
          {" "}
          <Logo height={"444px"} width={"444px"} />{" "}
        </Box>
        <Box>
          <Button
            sx={{
              width: isSmallDev ? "60%" : "240px",
              backgroundColor: "white",
              color: "#1d1d3a",
              borderRadius: "50px",
              height: isSmallDev ? "40px" : "55px",
              fontSize: isSmallDev ? "12px" : "15px",
              ":hover": {
                backgroundColor: "#C1AC40",
                color: "white",
              },
            }}
          >
            {" "}
            <img
              src="/assets/images/vector1.png"
              alt=""
              style={{ marginRight: "10px", width: "25px" }}
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
            alignItems: isSmallDev ? "center" : "start",
          }}
        >
          <Typography
            sx={{
              fontFamily: "poppins",
              fontWeight: "600",
              fontSize: isSmallDev ? "30px" : "70px",
              color: "#C1AC40",
            }}
          >
            Apartamenti: <span style={{ color: "white" }}>A10</span>
          </Typography>

          <Box
            sx={{
              height: isSmallDev ? "100px" : "120px",
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: isSmallDev ? "15px " : "25px",
            }}
          >
            <img
              style={{
                width: isSmallDev ? "100px" : "100%",
                height: isSmallDev ? "100px" : "100%",
                objectFit: "cover",
              }}
              src="/assets/images/kendifoto.png"
              alt=""
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: isSmallDev ? "20px" : "50px" }}>
        <SingleApartment />
      </Box>
      <GallerySlider images={images} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: isSmallDev ? "20px" : "50px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: isSmallDev ? "40px" : "50px",
            fontWeight: "300",
            marginBottom: isSmallDev ? "20px" : "0",
          }}
        >
          Apartamentet e <span style={{ fontWeight: "700" }}>ngjajshme</span>
        </Typography>

        <PlanimetricSlides />
      </Box>
    </Box>
  );
};

export default SingleApartmentPage;
