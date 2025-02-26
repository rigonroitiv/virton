import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { imagePath } from "../utils/consts";

const object1 = [
  {
    id: 4,
    position: 4,
    href: "/apartments/22",
    imageUrl: `${imagePath}general-1.png`,
    width: "3000",
    height: "1688",
    transform: "scale(.64)",
    points: [
      {
        d: "m1207.11,468.44l-9.33-79.56,39.56-110.22h117.78l3.11,13.33,86.67.44,17.33-27.11h173.78l45.33,101.56-13.33,9.56,98.22,248.89-18.22,12,26.22,56.89-133.33,52s-331.11,5.33-331.11,3.56-19.11-106.22-19.11-106.22l52.44-60.44,142.89-.61-30.83-112.33-248.06-1.72Z",
        type: "path",
        href: "/1",
      },
      {
        d: "161.33 509.33 366.17 360.33 420.67 405.83 606.33 263.67 580 206.5 736.5 92 818 140.67 833.17 238.83 869.17 261.5 880.33 251.5 1063.5 366.67 1045.67 483 984.67 551 789.33 409.17 742.17 452 746.67 462.17 716.83 489.17 719.17 492.17 660.83 546.5 658.17 544.5 594.17 604.17 587.83 599.67 525.83 657.67 522.17 654.83 472.67 701.17 432.83 701.17 431.33 709.67 245 592.33 161.33 509.33",
        type: "polygon",
        href: "/2",
      },
      {
        d: "m397.11,836.22l34.22-126.56,1.5-8.5s260.17-.17,260.17-1.5,7-49.33,7-49.33l582.33-1.67s25,143,25,144.33-86.67,62.67-86.67,62.67h-242.33v-17.67s-236.67,3-236.67,3l-2.67,30.33h-244l-97.89-35.11Z",
        type: "path",
        href: "/1/apartments/abc",
      },
    ],
  },
];

const GeneralBuilding = () => {
  const isSmallDev = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const [currentInx, setCurrentInx] = useState(1);
  const { id } = useParams();

  const handlePrev = () => {
    if (currentInx === 1) {
      setCurrentInx(id === 1 ? 4 : 3);
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
      {object1.map((item) => {
        return (
          <svg
            viewBox="0 0 1920 1080"
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
            {item.points.map((point) => {
              if (point.type === "path") {
                return (
                  <path
                    onClick={() => navigate(point.href)}
                    className="g1"
                    d={point.d}
                  />
                );
              }
              if (point.type === "polygon") {
                return (
                  <polygon
                    onClick={() => navigate(point.href)}
                    className="g1"
                    points={point.d}
                  />
                );
              }
            })}
          </svg>
        );
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
