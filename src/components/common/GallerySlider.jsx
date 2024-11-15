import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const GallerySlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 images per row
  const itemsToShow = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1A1A40",
        width: "100%",
        padding: "50px",
        height: "750px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          color="#C1AC40"
          sx={{
            fontFamily: "poppins",
            fontWeight: "600",
            fontSize: "50px",
          }}
        >
          Galeria
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "70px",
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              color: "#C1AC40",
              border: "1px solid #C1AC40",
              borderRadius: "50px",
              width: "70px",
              height: "70px",
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              color: "#C1AC40",
              border: "1px solid #C1AC40",
              borderRadius: "50px",
              width: "70px",
              height: "70px",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            gap: "10px",
            width: `${images.length * (100 / itemsToShow)}%`, // Adjust container width for all items
          }}
        >
          {/* Duplicate images to create an infinite loop effect */}
          {[...images, ...images, ...images].map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image}
              alt={`Gallery image ${index + 1}`}
              sx={{
                width: `${100 / itemsToShow}%`,
                height: "440px",
                objectFit: "cover",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default GallerySlider;
