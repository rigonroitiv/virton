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
          flexDirection: isSmallDev ? "column" : isMidDev ? "row" : "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: isSmallDev ? "start" : isMidDev ? "center" : "center",
          marginBottom: "15px",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <Avatar />
          <Typography
            sx={{
              fontSize: isSmallDev ? "20px" : "35px",
              fontWeight: "600",
              fontFamily: "poppins",
              color: "#1d1d3a",
            }}
          >
            OBJEKTI 1
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: isSmallDev ? "5px" : "20px",
            }}
          >
            <Button
              sx={{
                width: isSmallDev ? "100%" : isMidDev ? "100px" : "140px",
                backgroundColor: "white",
                border: "1px solid #C1AC40",
                color: "#1D1D3A",
                borderRadius: "50px",
                height: isSmallDev ? "40px" : "56px",
                fontFamily: "poppins",
                fontSize: isSmallDev ? "9px" : "13px",
              }}
            >
              TOP VIEW
            </Button>

            <Button
              sx={{
                width: isSmallDev ? "100%" : isMidDev ? "100px" : "140px",
                backgroundColor: "#1D1D3A",
                border: "1px solid #1D1D3A",
                color: "white",
                borderRadius: "50px",
                height: isSmallDev ? "40px" : "56px",
                fontFamily: "poppins",
                fontSize: isSmallDev ? "9px" : "13px",
              }}
            >
              <img
                style={{
                  marginRight: "6px",
                  width: isSmallDev ? "15px" : "30px",
                }}
                src="/assets/images/vector.png"
                alt=""
              />{" "}
              3D PLAN
            </Button>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Button
              sx={{
                width: isSmallDev ? "100%" : isMidDev ? "240px" : "240px",
                backgroundColor: "white",
                border: "1px solid #C1AC40",
                color: "#1D1D3A",
                height: isSmallDev ? "40px" : "56px",
                borderRadius: "50px",
                fontFamily: "poppins",
                fontWeight: "600",
                fontSize: isSmallDev ? "12px" : "20px",
                textTransform: "capitalize",
                marginRight: isSmallDev ? "2px" : isMidDev ? "2px" : "-50px",
              }}
            >
              <img
                style={{
                  marginRight: "6px",
                  width: isSmallDev ? "15px" : "30px",
                }}
                src="/assets/images/parkingicon.png"
                alt=""
              />{" "}
              Parkingu
            </Button>

            <Button
              sx={{
                width: isSmallDev ? "100%" : isMidDev ? "240px" : "240px",
                backgroundColor: "#1D1D3A",
                border: "1px solid #1D1D3A",
                color: "white",
                height: isSmallDev ? "40px" : "56px",
                borderRadius: "50px",
                fontFamily: "poppins",
                fontWeight: "600",
                fontSize: isSmallDev ? "12px" : "20px",
                textTransform: "capitalize",
              }}
            >
              <img
                style={{
                  marginRight: "6px",
                  width: isSmallDev ? "15px" : "30px",
                }}
                src="/assets/images/apartmenticon.png"
                alt=""
              />
              Apartmentet
            </Button>
          </Box>
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
        <Box sx={{ display: "flex", flex: 8, width: "100%", height: "100%" }}>
          <ApartmentSvg />
        </Box>
        <Box sx={{ display: "flex", flex: 4, width: "100%", height: "100%" }}>
          <ApartmentsFilter />
        </Box>
      </Box>

      <PlanimetriCards />
    </Box>
  );
};

export default ApartmentsPage;
