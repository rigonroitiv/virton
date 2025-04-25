import { Avatar, Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { mainUrl, planmetricImageUrl } from "../../utils/consts";

const SingleApartment = ({ data }) => {
  const isSmallDev = useMediaQuery("(max-width: 768px)");
  const isMidDev = useMediaQuery("(max-width: 1024px)");
  const [threedSelected, setThreedSelected] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: isSmallDev ? "50px 0px" : "100px 0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          gap: "15px",
          padding: "0px 20px",
        }}
      >
        <Button
          onClick={() => setThreedSelected(false)}
          sx={{
            width: isSmallDev ? "100%" : isMidDev ? "100px" : "190px",
            border: "1px solid #C1AC40",
            fontFamily: "Poppins",
            fontSize: isSmallDev ? "10px" : "15px",
            fontWeight: "400",
            color: !threedSelected ? "white" : "#1d1d3a",
            backgroundColor: !threedSelected ? "#1d1d3a" : "white",
            borderRadius: "50px",
            textTransform: "capitalize",
            height: isSmallDev ? "35px" : "40px",
          }}
        >
          <img
            style={{ width: "25px", marginRight: "7px" }}
            src="/projektet/assets/images/tile.png"
            alt=""
          />
          2D Plan
        </Button>
        <Button
          onClick={() => setThreedSelected(true)}
          sx={{
            width: isSmallDev ? "100%" : isMidDev ? "100px" : "190px",
            border: "1px solid #C1AC40",
            fontFamily: "Poppins",
            fontSize: isSmallDev ? "10px" : "15px",
            fontWeight: "400",
            color: threedSelected ? "white" : "#1d1d3a",
            backgroundColor: threedSelected ? "#1d1d3a" : "white",
            borderRadius: "50px",
            textTransform: "capitalize",
            height: isSmallDev ? "35px" : "40px",
          }}
        >
          <img
            style={{ width: "25px", marginRight: "7px" }}
            src="/projektet/assets/images/tile.png"
            alt=""
          />
          3D Plan
        </Button>
        <Button
          onClick={() => {
            window.open(data?.vtourUrl, "_blank");
          }}
          sx={{
            width: isSmallDev ? "100%" : isMidDev ? "100px" : "190px",
            border: "1px solid #1d1d3a",
            fontFamily: "Poppins",
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
            src="/projektet/assets/images/vector.png"
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
            flex: "3",
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
                fontFamily: "Poppins",
                fontWeight: "400",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              Sipërfaqja
            </Typography>
            <Typography
              sx={{
                fontSize: isSmallDev ? "20px" : "25px",
                fontFamily: "Poppins",
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
                fontFamily: "Poppins",
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
                fontFamily: "Poppins",
                fontWeight: "600",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              {data?.rooms}+1
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
                fontFamily: "Poppins",
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
                fontFamily: "Poppins",
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
                fontFamily: "Poppins",
                fontWeight: "400",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              Terasa
            </Typography>
            <Typography
              sx={{
                fontSize: isSmallDev ? "20px" : "25px",
                fontFamily: "Poppins",
                fontWeight: "600",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              {data?.balconySquare}
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
                fontFamily: "Poppins",
                fontWeight: "400",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              Objekti
            </Typography>
            <Typography
              sx={{
                fontSize: isSmallDev ? "20px" : "25px",
                fontFamily: "Poppins",
                fontWeight: "600",
                color: "#1d1d3a",
                textTransform: "capitalize",
              }}
            >
              {data?.object}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "end",
              width: "100%",
              borderTop: "1px solid #c1ac40",
              paddingTop: "30px",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                width: isSmallDev ? "100%" : isMidDev ? "100px" : "190px",
                fontFamily: "Poppins",
                fontSize: isSmallDev ? "10px" : isMidDev ? "15px" : "15px",
                fontWeight: "600",
                color: "#1d1d3a",
                backgroundColor: "#C1AC40",
                textTransform: "capitalize",
                borderRadius: "50px",
                height: isSmallDev ? "35px" : "40px",
              }}
            >
              <img
                src="/projektet/assets/images/shkarkopdf.png"
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
                width: isSmallDev ? "100%" : isMidDev ? "100px" : "190px",
                fontFamily: "Poppins",
                fontSize: isSmallDev ? "10px" : isMidDev ? "15px" : "15px",

                fontWeight: "600",
                color: "#C1AC40",
                backgroundColor: "#1d1d3a",
                textTransform: "capitalize",
                borderRadius: "50px",
                height: isSmallDev ? "35px" : "40px",
              }}
            >
              <img
                src="/projektet/assets/images/vector.png"
                alt=""
                style={{
                  marginRight: "7px",
                  width: isSmallDev ? "20px" : "25px",
                }}
              />{" "}
              Pyet Për Cmimin
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: "9",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!threedSelected ? (
            <img
              style={{
                width: isSmallDev ? "100%" : "80%",
                height: isSmallDev ? "100%" : "80%",
                objectFit: "contain",
                padding: isSmallDev ? "20px" : "50px",
              }}
              src={`${mainUrl}${planmetricImageUrl}${data?.imageUrl}`}
              alt=""
            />
          ) : (
            <img
              style={{
                width: isSmallDev ? "100%" : "80%",
                height: isSmallDev ? "100%" : "80%",
                objectFit: "contain",
                padding: isSmallDev ? "20px" : "0px",
              }}
              src={`${mainUrl}${planmetricImageUrl}${data?.image3dUrl}`}
              alt=""
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SingleApartment;
