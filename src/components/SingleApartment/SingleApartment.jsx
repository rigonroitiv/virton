import { Avatar, Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

const SingleApartment = ( { data } ) => {
  const isSmallDev = useMediaQuery("(max-width: 768px)");
  const isMidDev = useMediaQuery("(max-width: 1024px)");
  const [threedSelected, setThreedSelected] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          gap: "15px",
        }}
      >
        <Button
        onClick={() => setThreedSelected(!threedSelected)}
          sx={{
            width: isSmallDev ? "100%" : isMidDev ? "100px" : "190px",
            border: "1px solid #C1AC40",
            fontFamily: "poppins",
            fontSize: isSmallDev ? "10px" : "15px",
            fontWeight: "400",
            color: "#1d1d3a",
            backgroundColor: threedSelected ? '#C1AC40' : "white",
            borderRadius: "50px",
            textTransform: "capitalize",
            height: isSmallDev ? "35px" : "40px",
          }}
        >
          <img
            style={{ width: "25px", marginRight: "7px" }}
            src="/assets/images/tile.png"
            alt=""
          />
          3D Plan
        </Button>
        <Button
          sx={{
            width: isSmallDev ? "100%" : isMidDev ? "100px" : "190px",
            border: "1px solid #1d1d3a",
            fontFamily: "poppins",
            fontSize: isSmallDev ? "10px" : "15px",
            fontWeight: "400",
            color: "white",
            backgroundColor: "#1d1d3a",
            borderRadius: "50px",
            textTransform: "capitalize",
            height: isSmallDev ? "35px" : "40px",
          }}
        >
          <img
            src="/assets/images/vector.png"
            alt=""
            style={{ width: "20px", marginRight: "6px" }}
          />{" "}
          360 Tour
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallDev ? "column-reverse" : "row",
          width: "100%",
          gap: "20px",
          justifyContent: "start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "5",
            width: "100%",
            gap: "20px",
            padding: isSmallDev
              ? "20px"
              : isMidDev
              ? "20px"
              : "50px 100px 50px 50px",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderTop: "1px solid #c1ac40",
              paddingTop: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: isSmallDev ? "20px" : "25px",
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
                fontSize: isSmallDev ? "20px" : "25px",
                fontFamily: "poppins",
                fontWeight: "600",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              {data?.square}m<sup>2</sup>
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
                fontSize: isSmallDev ? "20px" : "25px",
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
                fontSize: isSmallDev ? "20px" : "25px",
                fontFamily: "poppins",
                fontWeight: "600",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              {data?.rooms}
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
                fontSize: isSmallDev ? "20px" : "25px",
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
                fontSize: isSmallDev ? "20px" : "25px",
                fontFamily: "poppins",
                fontWeight: "600",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              {data?.floorNumber}
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
                fontSize: isSmallDev ? "20px" : "25px",
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
                fontSize: isSmallDev ? "20px" : "25px",
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
                fontSize: isSmallDev ? "20px" : "25px",
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
                fontSize: isSmallDev ? "20px" : "25px",
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
              paddingBottom: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: isSmallDev ? "20px" : "25px",
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
                fontSize: isSmallDev ? "20px" : "25px",
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
              width: "100%",
              borderTop: "1px solid #c1ac40",
              paddingTop: "30px",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                width: isSmallDev ? "100%" : isMidDev ? "100px" : "100%",
                fontFamily: "poppins",
                fontSize: isSmallDev ? "10px" : isMidDev ? "15px" : "20px",
                fontWeight: "600",
                color: "#1d1d3a",
                backgroundColor: "#C1AC40",
                textTransform: "capitalize",
                borderRadius: "50px",
                height: isSmallDev ? "35px" : "50px",
              }}
            >
              <img
                src="/assets/images/shkarkopdf.png"
                alt=""
                style={{
                  marginRight: "7px",
                  width: isSmallDev ? "20px" : "25px",
                }}
              />{" "}
              Shkarko PDF
            </Button>

            <Button
              sx={{
                width: isSmallDev ? "100%" : isMidDev ? "100px" : "100%",
                fontFamily: "poppins",
                fontSize: isSmallDev ? "10px" : isMidDev ? "15px" : "20px",

                fontWeight: "600",
                color: "#C1AC40",
                backgroundColor: "#1d1d3a",
                textTransform: "capitalize",
                borderRadius: "50px",
                height: isSmallDev ? "35px" : "50px",
              }}
            >
              <img
                src="/assets/images/vector.png"
                alt=""
                style={{
                  marginRight: "7px",
                  width: isSmallDev ? "20px" : "25px",
                }}
              />{" "}
              Pyet Per Cmimin
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: "6",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              padding: isSmallDev ? "20px" : "60px",
            }}
            src="/assets/images/plani.jpg"
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SingleApartment;
