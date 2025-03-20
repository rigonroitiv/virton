import { Box, Button, Typography } from "@mui/material";
import React from "react";

const BasicInfoSection = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", gap: "1%", width: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 7,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          padding: "55px",
          // border: "1px solid #1d1d3a",
          borderRadius: "25px",
          height: "300px",
          gap: "10%",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: "35px", color: "#1d1d3a", fontFamily: "poppins" }}
          >
            Shitjet Totale :
          </Typography>
          <Typography
            sx={{
              fontSize: "45px",
              fontWeight: "600",
              color: "#1d1d3a",
              fontFamily: "poppins",
            }}
          >
            352.233$
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button
            sx={{
              paddingX: "35px",
              paddingY: "15px",
              backgroundColor: "#C1AC40",
              color: "#1d1d3a",
              wordSpacing: "4px",
              fontFamily: "poppins",
            }}
          >
            Shiko Shitjet
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 5,
          width: "100%",
          backgroundColor: "#C1AC40",
          padding: "55px",
          borderRadius: "25px",
          height: "300px",
          justifyContent: "center",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "30px", fontFamily: "poppins", color: "#1d1d3a" }}
          >
            Te lira:
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontFamily: "poppins",
              fontWeight: "600",
              color: "#1d1d3a",
            }}
          >
            121
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "30px", fontFamily: "poppins", color: "#1d1d3a" }}
          >
            Te lira:
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontFamily: "poppins",
              fontWeight: "600",
              color: "#1d1d3a",
            }}
          >
            121
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "30px", fontFamily: "poppins", color: "#1d1d3a" }}
          >
            Te lira:
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontFamily: "poppins",
              fontWeight: "600",
              color: "#1d1d3a",
            }}
          >
            121
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BasicInfoSection;
