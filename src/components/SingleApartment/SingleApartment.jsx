import { Box, Button, Typography } from "@mui/material";
import React from "react";

const SingleApartment = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          gap: "15px",
        }}
      >
        <Button
          sx={{
            width: "190px",
            border: "1px solid #C1AC40",
            fontFamily: "poppins",
            fontSize: "15px",
            fontWeight: "600",
            color: "#1d1d3a",
            backgroundColor: "white",
            borderRadius: "50px",
            textTransform: "capitalize",
          }}
        >
          3D Plan
        </Button>

        <Button
          sx={{
            width: "190px",
            border: "1px solid #1d1d3a",
            fontFamily: "poppins",
            fontSize: "15px",
            fontWeight: "600",
            color: "white",
            backgroundColor: "#1d1d3a",
            borderRadius: "50px",
            textTransform: "capitalize",
          }}
        >
          <img
            src="/assets/images/vector.png"
            alt=""
            style={{ marginRight: "6px" }}
          />{" "}
          360 Tour
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "6",
            width: "100%",
            borderTop: "1px solid #C1AC40",
            borderBottom: "1px solid #C1AC40",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "400",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              Siperfaqja
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "600",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              100m2
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "400",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              Tipi
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "600",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              2+1
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "400",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              Kati
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "600",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              6
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "400",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              Siperfaqja
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "600",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              100m2
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "400",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              Tipi
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "600",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              2+1
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "400",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              Kati
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "600",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              6
            </Typography>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default SingleApartment;
