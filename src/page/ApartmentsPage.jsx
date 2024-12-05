import { Avatar, Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import ApartmentSvg from "../components/apartmentSvg/ApartmentSvg";
import ApartmentsFilter from "../components/filter/ApartmentsFilter";
import PlanimetriCards from "../components/filter/PlanimetriCards";
import BuildingSvg from "../components/buildingSvg/BuildingSvg";
import ParkingSvg from "../components/parking/ParkingSvg";

const minFloor = 1;
const maxFloor = 9;
const minSquare = 40;
const maxSquare = 150;

const ApartmentsPage = () => {
  const isSmallDev = useMediaQuery("(max-width:768px)");
  const isMidDev = useMediaQuery("(max-width:1024px)");
  const [floorPlan, setFloorPlan] = useState(false);
  const [parking, setParking] = useState(false);

  const [floorRange, setFloorRange] = useState([minFloor, maxFloor]);
  const [squareRange, setSquareRange] = useState([minSquare, maxSquare])

  // State to manage active button
  const [activeButton, setActiveButton] = useState(null);

  // Handler for button click
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: isSmallDev ? "20px" : isMidDev ? "20px" : "150px 50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallDev ? "column" : isMidDev ? "column" : "row",
          width: "100%",
          marginBottom: "35px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 8,
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: isSmallDev ? "5px" : "10px",
            }}
          >
            <Avatar />
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: isSmallDev ? "14px" : "35px",
                fontWeight: "600",
              }}
            >
              OBJEKTI 1
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {[
              {
                text: "3D Plan",
                icon: "/assets/images/vector.png",
                width: isSmallDev ? "100%" : "140px",
                borderRadius: { left: "50px", right: "0" },
                action: () => {},
              },
              {
                text: "Top View",
                icon: "/assets/images/tile.png",
                width: isSmallDev ? "100%" : "140px",
                borderRadius: { left: "0", right: "0" },
                action: () => {
                  setFloorPlan(true);
                  setParking(false);
                },
              },
              {
                text: "Apartamentet",
                icon: "/assets/images/floor-plan.png",
                width: isSmallDev ? "100%" : "170px",
                borderRadius: { left: "0", right: "50px" },
                action: () => {
                  setFloorPlan(false);
                  setParking(false);
                },
              },
            ].map((button, index) => (
              <Button
                key={index}
                onClick={button.action}
                sx={{
                  width: button.width,
                  border: "1px solid #c1ac40",
                  color: activeButton === index ? "white" : "#1D1D3A",
                  backgroundColor: activeButton === index ? "#1D1D3A" : "white",
                  fontFamily: "poppins",
                  fontWeight: "400",
                  borderRadius: "0px",
                  borderTopLeftRadius: button.borderRadius.left,
                  borderBottomLeftRadius: button.borderRadius.left,
                  borderTopRightRadius: button.borderRadius.right,
                  borderBottomRightRadius: button.borderRadius.right,
                  textTransform: "capitalize",
                  height: isSmallDev ? "30px" : "35px",
                  fontSize: isSmallDev ? "9px" : "15px",
                }}
              >
                <img
                  src={button.icon}
                  alt={button.text}
                  style={{
                    marginRight: "6px",
                    width: isSmallDev ? "15px" : "20px",
                  }}
                />
                {button.text}
              </Button>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: 3,
            width: "100%",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => setParking(true)}
            sx={{
              width: isSmallDev ? "232px" : "240px",
              border: "1px solid #c1ac40",
              color: "#1D1D3A",
              backgroundColor: "transparent",
              fontFamily: "poppins",
              fontWeight: "600",
              borderRadius: "50px",
              height: isSmallDev ? "30px" : "35px",
              fontSize: isSmallDev ? "12px" : "15px",
            }}
          >
            PARKINGU
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallDev ? "column" : isMidDev ? "column" : "row",
          height: isSmallDev ? "100%" : isMidDev ? "100%" : "90vh",
          width: "100%",
          gap: "20px",
        }}
      >
        <Box sx={{ display: "flex", flex: 9, width: "100%", height: "100%" }}>
          {parking ? (
            <ParkingSvg />
          ) : floorPlan ? (
            <BuildingSvg />
          ) : (
            <ApartmentSvg sizeRange={squareRange} floorRange={floorRange}/>
          )}
        </Box>
        <Box sx={{ display: "flex", flex: 3, width: "100%", height: "100%" }}>
          <ApartmentsFilter 
          maxFloor={maxFloor}
          minFloor={minFloor}
          maxSquare={maxSquare}
          minSquare={minSquare}
          setFloorRange={setFloorRange}
          setSquareSquare={setSquareRange}
          squareRange={squareRange}
          floorRange={floorRange}
          />
        </Box>
      </Box>

      <PlanimetriCards />
    </Box>
  );
};

export default ApartmentsPage;
