import React from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { planimetrite } from "../../utils/server";
import Logo from "../../assets/svg/logo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./pslides.css";

const PlanimetriCards = () => {
  const isSmallDev = useMediaQuery("(max-width:768px)");

  const settings = {
    dots: true, // Display navigation dots
    infinite: true, // Infinite scrolling
    speed: 800, // Transition speed
    slidesToShow: isSmallDev ? 1 : 4, // Show 1 card on mobile, 4 on desktop
    slidesToScroll: 1, // Scroll one card at a time
    nextArrow: (
      <Button
        sx={{
          position: "absolute",
          top: isSmallDev ? "-10%" : "50%",
          right: isSmallDev ? 0 : -60,
          zIndex: 1,
          backgroundColor: "#1d1d3a",
          width: "50px",
          minWidth: "0px",
          height: "50px",
          color: "#fff",
          borderRadius: "50%",
          paddingTop: "13px",
          "&:hover": {
            backgroundColor: "#C1AC40",
          },
        }}
      ></Button>
    ),
    prevArrow: (
      <Button
        sx={{
          position: "absolute",
          top: isSmallDev ? "-10%" : "50%",
          left: isSmallDev ? 240 : -60,
          zIndex: 1,
          backgroundColor: "#1d1d3a",
          width: "50px",
          minWidth: "0px",
          height: "50px",
          color: "#fff",
          borderRadius: "50%",
          paddingTop: "13px",
          "&:hover": {
            backgroundColor: "#C1AC40",
          },
        }}
      ></Button>
    ),
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        marginTop: "50px",
        padding: isSmallDev ? "0px" : "0px 30px",
      }}
    >
      <Slider {...settings}>
        {planimetrite.map((property) => (
          <Box key={property.id} sx={{ padding: "0 10px" }}>
            <Card
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                backgroundColor: "#1c1c3d",
                border: "10px solid #1c1c3d",
                borderRadius: "5px",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "5px",
                }}
                height="300"
                image={property.image}
                alt={`${property.tipi} image`}
              />
              <CardContent
                sx={{
                  padding: 1,
                  height: "180px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="start"
                  sx={{ marginBottom: 1, marginTop: 3 }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#C1AC40",
                      fontWeight: "400",
                      fontFamily: "Poppins",
                    }}
                  >
                    Sipërfaqja
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "white", fontFamily: "Poppins" }}
                  >
                    {property.siperfaqja}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ marginBottom: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#C1AC40",
                      fontWeight: "400",
                      fontFamily: "Poppins",
                    }}
                  >
                    Tipi
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "white", fontFamily: "Poppins" }}
                  >
                    {property.tipi}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#C1AC40",
                      fontWeight: "400",
                      fontFamily: "Poppins",
                    }}
                  >
                    Kati
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "white", fontFamily: "Poppins" }}
                  >
                    {property.kati}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginTop: "15px",
                  }}
                >
                  <Button
                    sx={{
                      color: "#C1AC40",
                      textTransform: "capitalize",
                      fontFamily: "Poppins",
                      zIndex: "2",
                      border: "1px solid #c1ac40",
                      borderRadius: "50px",
                      ":hover": {
                        backgroundColor: "#c1ac40",
                        color: "#1d1d3a",
                        transition: "0.7s",
                      },
                    }}
                  >
                    <img
                      src="/assets/images/vector.png"
                      alt=""
                      style={{ marginRight: "7px" }}
                    />
                    Më Shumë...
                  </Button>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "-100px",
                    left: "-120px",
                  }}
                >
                  <Logo height={"290px"} width={"290px"} />
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default PlanimetriCards;
