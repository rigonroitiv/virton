import { Box, Typography } from "@mui/material";
import React from "react";

const DetailedInfoSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: "1%",
        mt: "30px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "25px",
            gap: "5px",
            padding: "20px",
            height: "300px",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              sx={{ fontSize: "25px", fontFamily: "poppins", color: "#1d1d3a" }}
            >
              Te Fundit
            </Typography>
            <Typography
              sx={{ fontSize: "25px", fontFamily: "poppins", color: "#c1ac40" }}
            >
              123
            </Typography>
          </Box>

          <Box></Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "25px",
          gap: "5px",
          padding: "20px",
          height: "300px",
          backgroundColor: "#1d1d3a",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: "25px", fontFamily: "poppins", color: "#c1ac40" }}
          >
            Te Fundit
          </Typography>
          <Typography
            sx={{
              fontSize: "25px",
              fontFamily: "poppins",
              color: "#c1ac40",
              fontWeight: "600",
            }}
          >
            123
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            pb: "5px",
            borderBottom: "1px solid #c1ac40",
            mt: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography
              sx={{ fontFamily: "poppins", fontSize: "16px", color: "#c1ac40" }}
            >
              daily
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "20px",
                fontWeight: "600",
                color: "#c1ac40",
              }}
            >
              75.887$
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography
              sx={{ fontFamily: "poppins", fontSize: "16px", color: "#c1ac40" }}
            >
              daily
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "20px",
                fontWeight: "600",
                color: "#c1ac40",
              }}
            >
              75.887$
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography
              sx={{ fontFamily: "poppins", fontSize: "16px", color: "#c1ac40" }}
            >
              daily
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "20px",
                fontWeight: "600",
                color: "#c1ac40",
              }}
            >
              75.887$
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            pb: "5px",
            borderBottom: "1px solid #c1ac40",
            mt: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography
              sx={{ fontFamily: "poppins", fontSize: "16px", color: "#c1ac40" }}
            >
              daily
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "20px",
                fontWeight: "600",
                color: "#c1ac40",
              }}
            >
              75.887$
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography
              sx={{ fontFamily: "poppins", fontSize: "16px", color: "#c1ac40" }}
            >
              daily
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "20px",
                fontWeight: "600",
                color: "#c1ac40",
              }}
            >
              75.887$
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography
              sx={{ fontFamily: "poppins", fontSize: "16px", color: "#c1ac40" }}
            >
              daily
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "20px",
                fontWeight: "600",
                color: "#c1ac40",
              }}
            >
              75.887$
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailedInfoSection;
