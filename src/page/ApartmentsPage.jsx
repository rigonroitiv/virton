import { Avatar, Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ApartmentSvg from "../components/filter/ApartmentSvg";
import ApartmentsFilter from "../components/filter/ApartmentsFilter";
import PlanimetriCards from "../components/filter/PlanimetriCards";

const ApartmentsPage = () => {
  const isSmallDev = useMediaQuery("(max-width:768px)");
  const isMidDev = useMediaQuery("(max-width:1024px)");
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: isSmallDev ? "20px" : isMidDev ? "20px" : "50px ",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallDev ? "column" : isMidDev ? "column" : "row",
          width: "100%",
          marginBottom: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 8,
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
            // marginRight: "20px",
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
            <Avatar />{" "}
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
              // gap: "10px",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                width: isSmallDev ? "100%" : "140px",
                border: "1px solid #c1ac40",
                color: "#1D1D3A",
                backgroundColor: "transparent",
                fontFamily: "poppins",
                fontWeight: "400",
                borderRadius: "0px",
                borderTopLeftRadius: "50px",
                borderBottomLeftRadius: "50px",
                textTransform: "capitalize",
                height: isSmallDev ? "30px" : "35px",
                fontSize: isSmallDev ? "9px" : "15px",
              }}
            >
              <img
                src="/assets/images/vector.png"
                alt=""
                style={{
                  marginRight: "6px",
                  width: isSmallDev ? "15px" : "20px",
                }}
              />
              3D Plan
            </Button>
            <Button
              sx={{
                width: isSmallDev ? "100%" : "140px",
                border: "1px solid #c1ac40",
                color: "white",
                backgroundColor: "#1d1d3a",
                textTransform: "capitalize",

                fontFamily: "poppins",
                fontWeight: "400",
                borderRadius: "0px",
                height: isSmallDev ? "30px" : "35px",
                fontSize: isSmallDev ? "9px" : "15px",
              }}
            >
              <img
                src="/assets/images/tile.svg"
                style={{ width: "20px", color: "white" }}
                alt=""
              />{" "}
              Top View
            </Button>
            <Button
              sx={{
                width: isSmallDev ? "100%" : "170px",
                border: "1px solid #c1ac40",
                color: "#1D1D3A",
                backgroundColor: "transparent",
                textTransform: "capitalize",
                fontFamily: "poppins",
                fontWeight: "400",
                borderRadius: "0px",
                borderTopRightRadius: "50px",
                borderBottomRightRadius: "50px",
                height: isSmallDev ? "30px" : "35px",
                fontSize: isSmallDev ? "9px" : "15px",
              }}
            >
              Apartamentet
            </Button>
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
          <ApartmentSvg />
        </Box>
        <Box sx={{ display: "flex", flex: 3, width: "100%", height: "100%" }}>
          <ApartmentsFilter />
        </Box>
      </Box>

      <PlanimetriCards />
    </Box>
  );
};

export default ApartmentsPage;
