import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { imagePath } from "../utils/consts";

const object1 = [
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
        href: "/1/apartments/b",
      },
      {
        d: "m 967.5,212.5 105,40 -23,175 -140,112 16,-203 -110,-48 z",
        href: "/1/apartments/a",
      },
      {
        d: "m 613.5,360.5 7,187 -196,-115 -20,-156 94,-47 v -13 l 44,-23 76,36 2,34.94 25,10.06 v 27 l 40,21 z",
        href: "/1/apartments/c",
      },
      {
        d: "m 662.5,166.5 83,35 -0.88,131.11 -19.12,11.89 -80,-43 v -27 l -25,-10.06 -2,-34.94 -40.95,-19.4 z",
        href: "/1/apartments/d",
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
        href: "/1/apartments/a",
      },
      {
        d: "m 417.5,448.5 -24,-196 120,-47 19.76,12.67 33.24,-12.67 35,21 v 20 l 38,21 2,52 -20,-13 -107,50 14,181 z",
        href: "/1/apartments/b",
      },
      {
        d: "m 922.5,472.5 81,-49 16,-134 -142,-71 -83,39 -5,132 z",
        href: "/1/apartments/d",
      },
      {
        d: "m 566.93,205.5 164.57,-65 69.28,32.5 30.72,-12.5 48,25 -2,33 -83,39 -5,132 -32,-19 -20.11,8.66 -96.32,-60.39 -1.57,-51.27 -38,-21 v -20 z",
        href: "/1/apartments/c",
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
        href: "/1/apartments/d",
      },
      {
        d: "m 863.5,202.5 -98,25 -6.26,140.94 35.26,-9.94 67,64 -8,145 153,-56 22,-187 -163.69,-122 z",
        href: "/1/apartments/c",
      },
      {
        d: "m 671.63,385 54.87,-16.5 9,7 23.74,-7.06 6.21,-139.72 99.36,-26.22 -27.31,-24 1,-18 -65,-51 -156,36 1,34 50,47 z",
        href: "/1/apartments/b",
      },
      {
        d: "m 397.5,214.5 21,173 27,40 79.17,-22.5 12.83,15.5 134.13,-35.5 -3.13,-158.5 -50,-47 -0.55,-18.59 z",
        href: "/1/apartments/a",
      },
    ],
  },
  {
    id: 4,
    position: 4,
    href: "/apartments/22",
    imageUrl: `${imagePath}01.jpg`,
    height: "3376",
    width: "6000",
    transform: "translate(0 -.09) scale(.32)",
    points: [
      {
        d: "m 570.5,615.75 -22.72,-185.97 134.66,-60.67 115.78,73.55 -70.44,35.12 1.12,31.54 -16.01,7.9 17.22,218.22 z",
        href: "/1/apartments/3",
      },
      {
        d: "m 893.56,854.67 291.55,-175.11 9.78,-251.12 -113.78,-59.33 -176.89,75.78 -50.66,-29.33 -55.34,27.1 -70.44,35.12 1.12,31.54 -16.01,7.9 17.22,218.22 z",
        href: "/1/apartments/3",
      },
      {
        d: "m 1080.28,271.61 112,-53.83 198.16,89.78 -32,261.77 -173.33,110.23 9.78,-251.12 -113.78,-59.33 -4.55,1.95 z",
        href: "/1/apartments/3",
      },
      {
        d: "m 972.78,142.61 -111.5,45.67 6.16,220.5 53.53,28.94 155.59,-66.66 3.72,-99.45 94.52,-45.43 z",
        href: "/1/apartments/3",
      },
    ],
  },
];

const object2 = [
  {
    id: 1,
    position: 1,
    href: "/apartments/22",
    imageUrl: `${imagePath}01-2.jpg`,
    height: "3000",
    width: "1688",
    transform: "translate(1.07) scale(.64)",
    points: [
      {
        d: "M 886.67,916 860,450.67 1290.67,429.33 1372,528 1320,884 Z",
        href: "/2/apartments/g",
      },
      {
        d: "m 1381.33,198.67 -34,264 -27.07,2.57 51.74,62.76 -52,356 314.67,-26.67 160,-557.33 -228,-111.33 z",
        href: "/2/apartments/f",
      },
      {
        d: "m 1194,76 -22.67,359.24 119.34,-5.91 29.59,35.91 27.07,-2.57 34,-264 18.72,-1.01 L 1411.33,114 1324,72.67 Z",
        href: "/2/apartments/de",
      },
      {
        d: "M 355.33,794.67 278.67,722 168,340 l 372.67,-86.67 94,34 v 9.34 L 823.33,244 l 67.78,21.33 110.89,-32.89 95.78,22.89 -8.64,183.99 -229.14,11.35 6.84,119.28 -174.4,86.05 -16,-9.33 z",
        href: "/2/apartments/abc",
      },
    ],
  },
  {
    id: 3,
    position: 3,
    imageUrl: `${imagePath}02-2.jpg`,
    height: "3840",
    width: "2160",
    transform: "scale(.5)",
    points: [
      {
        d: "M 1397.67,475 1317.78,939.56 1180.89,1080 835.56,817.33 V 782.22 L 629.78,636.89 594.22,654.22 426.67,524.89 382.22,305.78 l 143.11,-37.34 102.23,46.23 111.11,-32.45 170.22,68 72.44,-26.66 z",
        href: "/2/apartments/abc",
      },
      {
        d: "M 1416.44,291.11 1296,188 l -141.78,4.44 -12.77,189.36 244.18,88.82 z",
        href: "/2/apartments/g",
      },
      {
        d: "m 1015.11,18.67 -1.78,72 21.84,33.83 -4.48,217.01 110.76,40.29 12.77,-189.36 113.12,-3.54 L 1282.33,37 1243,14.67 Z",
        href: "/2/apartments/f",
      },
      {
        d: "M 491.67,52 519.33,27 741,21.33 l 6.67,78.34 265.66,-9 21.84,33.83 -4.48,217.01 -49.36,-17.95 -72.44,26.66 -170.22,-68 -111.11,32.45 -102.23,-46.23 z",
        href: "/2/apartments/de",
      },
    ],
  },
  {
    id: 3,
    position: 3,
    imageUrl: `${imagePath}03-2.jpg`,
    height: "3840",
    width: "2160",
    transform: "scale(.5)",
    points: [
      {
        d: "M 860.44,972.44 723.56,846.67 689.33,564 995.11,424 v -95.56 l 242.67,-96.44 18.66,6.67 4.89,-59.11 179.11,-64.45 143.56,26.67 -67.56,323.11 -156,113.33 -19.11,-9.78 -168.89,120.89 -3.55,51.11 z",
        href: "/2/apartments/abc",
      },
      {
        d: "M 328.44,905.33 142.67,310.22 306.22,176.89 456.44,172 l 5.78,-5.78 166.22,-5.78 42.67,328.89 -38.22,181.78 -17.78,1.33 -58.67,216.45 z",
        href: "/2/apartments/de",
      },
      {
        d: "m 426.22,77.78 68,-56.89 L 636,17.78 653.33,168 l 75.23,-0.67 -3,13.23 23.44,253.55 -84.69,2.81 -35.87,-276.48 -166.22,5.78 -5.78,5.78 -12.07,0.39 z",
        href: "/2/apartments/f",
      },
      {
        d: "m 1011,133 -276.33,8.67 -6.11,25.66 -3,13.23 L 749,434.11 995.11,422 v -93.56 l 31.64,-12.57 V 170 Z",
        href: "/2/apartments/g",
      },
    ],
  },
  {
    id: 2,
    position: 2,
    imageUrl: `${imagePath}04-2.jpg`,
    height: "3840",
    width: "2160",
    transform: "scale(.5)",
    points: [
      {
        d: "m 288,373.33 85.33,-93.33 452,-12 v 112 l 461.34,-17.33 76,94.66 -70.67,452 L 438.67,988 Z",
        href: "/2/apartments/de",
      },
      {
        d: "m 1305.33,252 362.67,-10.67 154.67,80 L 1640,894.67 1305.33,924 1292,909.33 l 70.67,-452 -70.67,-88.02 z",
        href: "/2/apartments/f",
      },
      {
        d: "m 753.33,120.89 95.56,-17.78 185.78,40.45 v 56 l 218.66,56 -3.11,51.55 v 1.67 l 18.78,-7.89 29.77,8.81 -6.77,59.61 -5.33,-6.64 L 825.33,380 V 268 l -61.11,1.62 z",
        href: "/2/apartments/abc",
      },
    ],
  },
];

const GeneralBuilding2 = () => {
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
        height: isSmallDev ? "100vh" : "100%",
        padding: isSmallDev ? "" : "100px 50px 0px 50px",
        backgroundColor: "#1d1d3a",
        objectFit: "contain",
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
      <Box
        sx={{
          overflowX: "auto",
          position: { xs: "absolute", md: "static" },
          top: "23%",
          left: 0,
          width: "100%",
        }}
      >
        {id === "1" &&
          object1.map((item) => {
            if (currentInx === item.id) {
              return (
                <svg
                  viewBox="0 0 1440 710"
                  width={isSmallDev ? "200%" : "100%"}
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsSvg="http://www.w3.org/2000/svg"
                  style={{
                    borderRadius: !isSmallDev && "15px",
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
        {id === "2" &&
          object2.map((item) => {
            if (currentInx === item.id) {
              return (
                <svg
                  viewBox="0 0 1920 1080"
                  width={isSmallDev ? "200%" : "100%"}
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsSvg="http://www.w3.org/2000/svg"
                  style={{
                    borderRadius: "15px",
                  }}
                >
                  <image transform={item.transform} xlinkHref={item.imageUrl} />
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
      </Box>
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 5,
          color: "white",
          bottom: { xs: "13%", md: "50%" },
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 5,
          bottom: { xs: "13%", md: "50%" },
          color: "white",
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default GeneralBuilding2;
