import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { imagePath } from "../utils/consts";

const object = [
  {
    id: 4,
    position: 4,
    href: "/apartments/22",
    imageUrl: `${imagePath}03.jpg`,
    height: "3376",
    width: "6000",
    transform: "scale(.24)",
    points: [
      {
        d: "m 697.5,673.5 103,-63 6,-188 -185,-116 -107,50 14,181 z",
        href: "/apartments/3",
      },
      {
        d: "m 417.5,448.5 -24,-196 120,-47 19.76,12.67 33.24,-12.67 35,21 v 20 l 38,21 2,52 -20,-13 -107,50 14,181 z",
        href: "/apartments/3",
      },
      {
        d: "m 922.5,472.5 81,-49 16,-134 -142,-71 -83,39 -5,132 z",
        href: "/apartments/3",
      },
      {
        d: "m 566.93,205.5 164.57,-65 69.28,32.5 30.72,-12.5 48,25 -2,33 -83,39 -5,132 -32,-19 -20.11,8.66 -96.32,-60.39 -1.57,-51.27 -38,-21 v -20 z",
        href: "/apartments/3",
      },
    ],
  },
  {
    id: 3,
    position: 3,
    imageUrl: `${imagePath}04.jpg`,
    height: "3376",
    width: "6000",
    transform: "scale(.24)",
    points: [
      {
        d: "m 613.5,553.5 -7,-142 188,-53 67,64 -8,145 -183,64 z",
        href: "/apartments/d",
      },
      {
        d: "m 863.5,202.5 -98,25 -6.26,140.94 35.26,-9.94 67,64 -8,145 153,-56 22,-187 -163.69,-122 z",
        href: "/apartments/c",
      },
      {
        d: "m 671.63,385 54.87,-16.5 9,7 23.74,-7.06 6.21,-139.72 99.36,-26.22 -27.31,-24 1,-18 -65,-51 -156,36 1,34 50,47 z",
        href: "/apartments/b",
      },
      {
        d: "m 397.5,214.5 21,173 27,40 79.17,-22.5 12.83,15.5 134.13,-35.5 -3.13,-158.5 -50,-47 -0.55,-18.59 z",
        href: "/apartments/a",
      },
    ],
  },
  {
    id: 2,
    position: 2,
    imageUrl: `${imagePath}03.jpg`,
    height: "3376",
    width: "6000",
    transform: "scale(.24)",
    points: [
      {
        d: "m 697.5,673.5 103,-63 6,-188 -185,-116 -107,50 14,181 z",
        href: "/apartments/a",
      },
      {
        d: "m 417.5,448.5 -24,-196 120,-47 19.76,12.67 33.24,-12.67 35,21 v 20 l 38,21 2,52 -20,-13 -107,50 14,181 z",
        href: "/apartments/b",
      },
      {
        d: "m 922.5,472.5 81,-49 16,-134 -142,-71 -83,39 -5,132 z",
        href: "/apartments/d",
      },
      {
        d: "m 566.93,205.5 164.57,-65 69.28,32.5 30.72,-12.5 48,25 -2,33 -83,39 -5,132 -32,-19 -20.11,8.66 -96.32,-60.39 -1.57,-51.27 -38,-21 v -20 z",
        href: "/apartments/c",
      },
    ],
  },
  {
    id: 1,
    position: 1,
    imageUrl: `${imagePath}02.jpg`,
    height: "3376",
    width: "6000",
    transform: "scale(.24)",
    points: [
      {
        d: "m 925.5,336.5 -110,-48 -90,56 v 0 l -40,-22 -72,38 7,187 161,96 128,-104 z",
        href: "/apartments/b",
      },
      {
        d: "m 967.5,212.5 105,40 -23,175 -140,112 16,-203 -110,-48 z",
        href: "/apartments/a",
      },
      {
        d: "m 613.5,360.5 7,187 -196,-115 -20,-156 94,-47 v -13 l 44,-23 76,36 2,34.94 25,10.06 v 27 l 40,21 z",
        href: "/apartments/c",
      },
      {
        d: "m 662.5,166.5 83,35 -0.88,131.11 -19.12,11.89 -80,-43 v -27 l -25,-10.06 -2,-34.94 -40.95,-19.4 z",
        href: "/apartments/d",
      },
    ],
  },
];

const GeneralBuilding = () => {
  const isSmallDev = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const [currentInx, setCurrentInx] = useState(1);

  const handlePrev = () => {
    if (currentInx === 1) {
      setCurrentInx(4);
      return;
    }
    setCurrentInx(currentInx - 1);
  };

  const handleNext = () => {
    if (currentInx === 4) {
      setCurrentInx(1);
      return;
    }
    setCurrentInx(currentInx + 1);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: isSmallDev ? "100vh" : "100vh",
        padding: isSmallDev ? "370px 20px" : "0px 50px 0px 50px",
        backgroundColor: "#1d1d3a",
        overflow: "hidden",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <img
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
      /> */}

      {object.map((item) => {
        if (currentInx === item.id) {
          return (
            <svg
              viewBox="0 0 1440 710"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsSvg="http://www.w3.org/2000/svg"
              style={{
                borderRadius: "15px",
              }}
            >
              <image
                height={item.height}
                width={item.width}
                transform={item.transform}
                xlinkHref={item.imageUrl}
              />
              {item.points.map((point) => (
                <path
                  onClick={() => navigate(point.href)}
                  className="g1"
                  d={point.d}
                />
              ))}
            </svg>
          );
        }
      })}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 5,
          color: "white",
          top: "50%",
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 5,
          top: "50%",
          color: "white",
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default GeneralBuilding;
