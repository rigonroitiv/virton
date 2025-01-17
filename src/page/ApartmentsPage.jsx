import { Avatar, Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useRef, useState } from "react";
import ApartmentSvg from "../components/apartmentSvg/ApartmentSvg";
import ApartmentsFilter from "../components/filter/ApartmentsFilter";
import PlanimetriCards from "../components/filter/PlanimetriCards";
import BuildingSvg from "../components/buildingSvg/BuildingSvg";
import ParkingSvg from "../components/parking/ParkingSvg";
import FloorSvg from "../components/floorSvg/FloorSvg";
import { Link, useParams } from "react-router-dom";
import AdmApartmentIdModal from "../components/admin/apartments/AdmApartmentIdModal";

const minFloor = 1;
const maxFloor = 9;
const minSquare = 40;
const maxSquare = 150;

const ApartmentsPage = () => {
  const isSmallDev = useMediaQuery("(max-width:768px)");
  const isMidDev = useMediaQuery("(max-width:1024px)");
  const [floorPlan, setFloorPlan] = useState(false);
  const [floorId, setFloorId] = useState(null);
  const [buildingFloor, setBuildingFloor] = useState(false);
  const apartmentRef = useRef(null);
  const [activeButton, setActiveButton] = useState(null);
  const { projectid, id } = useParams();

  const handleButtonClick = (buttonIndex, action) => {
    if (buttonIndex < 2) {
      setActiveButton(buttonIndex);
    }
    action();
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "auto",
        padding: isSmallDev
          ? "120px 20px"
          : isMidDev
          ? "150px 20px"
          : "150px 50px",
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
              justifyContent: "space-between",
              gap: isSmallDev ? "5px" : "10px",
            }}
          >
            <Link to="/#">
              <svg
                width="45"
                height="45"
                viewBox="0 0 54 54"
                style={{ cursor: "pointer" }}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="27" r="27" fill="#1D1D3A" />
                <path
                  d="M31.9597 38.815C31.7349 38.8162 31.512 38.7732 31.3038 38.6881C31.0957 38.6031 30.9064 38.4779 30.7468 38.3195L20.4968 28.0695C20.1786 27.7495 20 27.3165 20 26.8652C20 26.4138 20.1786 25.9809 20.4968 25.6608L30.7468 15.4108C31.0736 15.1309 31.494 14.9847 31.9239 15.0013C32.3539 15.0179 32.7617 15.1961 33.0659 15.5004C33.3702 15.8046 33.5484 16.2125 33.565 16.6424C33.5816 17.0723 33.4354 17.4927 33.1555 17.8195L24.1184 26.8566L33.1555 35.8937C33.3954 36.1316 33.5594 36.4353 33.6266 36.7664C33.6939 37.0975 33.6615 37.4411 33.5335 37.7538C33.4055 38.0665 33.1877 38.3342 32.9075 38.5231C32.6274 38.712 32.2975 38.8135 31.9597 38.815Z"
                  fill="#C1AC40"
                />
              </svg>
            </Link>

            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: isSmallDev ? "10px" : "30px",
                fontWeight: "600",
              }}
            >
              {/* {`RIVER RESIDENCE ${projectid}`} */}
              {/* <br /> */}
              {`Hyrja ${id?.toUpperCase()}`}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: isSmallDev ? "70%" : "100",
            }}
          >
            {[
              {
                text: "3D Plan",
                icon: "/assets/images/vector.png",
                width: isSmallDev ? "100%" : "140px",
                borderRadius: { left: "50px", right: "0" },
                action: () => {
                  setBuildingFloor(false);
                  setFloorPlan(false);
                },
              },
              {
                text: "Top View",
                icon: "/assets/images/tile.png",
                width: isSmallDev ? "100%" : "140px",
                borderRadius: { left: "0", right: "0" },
                action: () => {
                  setBuildingFloor(true);
                  setFloorPlan(false);
                },
              },
              {
                text: "Apartamentet",
                icon: "/assets/images/floor-plan.png",
                width: isSmallDev ? "100%" : "170px",
                borderRadius: { left: "0", right: "50px" },
                action: () => {
                  if (apartmentRef && apartmentRef.current) {
                    apartmentRef.current.scrollIntoView();
                  }
                },
              },
            ].map((button, index) => (
              <Button
                tabIndex={-1}
                key={index}
                onClick={(e) => {
                  handleButtonClick(index, button.action);
                }}
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
            onClick={() => {}}
            sx={{
              width: isSmallDev ? "232px" : "240px",
              border: "1px solid #c1ac40",
              color: "#1D1D3A",
              backgroundColor: "transparent",
              fontFamily: "poppins",
              visibility: "hidden",
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
          {floorPlan ? (
            <FloorSvg floorId={floorId} />
          ) : buildingFloor ? (
            <BuildingSvg setFloorId={setFloorId} setFloorPlan={setFloorPlan} />
          ) : (
            <ApartmentSvg />
          )}
        </Box>
        <Box sx={{ display: "flex", flex: 3, width: "100%", height: "100%" }}>
          {!floorPlan && <ApartmentsFilter />}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          padding: "50px 0px 0px 0px",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: isSmallDev ? "25px" : "35px",
            color: "#c1ac40",
            fontFamily: "poppins",
          }}
        >
          Planimetritë e{" "}
          <span style={{ color: "#1d1d3a", fontWeight: "600" }}>
            Objektit A
          </span>
        </Typography>

        <Link to="/floor-plan-page">
          <Button
            sx={{
              border: "1px solid #1d1d3a",
              backgroundColor: "transparent",
              color: "#1d1d3a",
              width: isSmallDev ? "150px" : "200px",
              borderRadius: "50px",
              fontSize: isSmallDev ? "10px" : "14px",
              height: isSmallDev ? "35px" : "45px",
              fontFamily: "poppins",
              ":hover": {
                backgroundColor: "#1d1d3a",
                color: "#c1ac40",
                transition: "0.5s",
              },
            }}
          >
            Shiko të gjitha{" "}
          </Button>
        </Link>
      </Box>
      <AdmApartmentIdModal />
      <PlanimetriCards ref={apartmentRef} />
    </Box>
  );
};

export default ApartmentsPage;
