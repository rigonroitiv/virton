import { Box, Button, Slider, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Logo from "../../assets/svg/logo";

const ApartmentsFilter = ( { 
  minFloor,
  maxFloor,
  minSquare,
  maxSquare,
  floorRange,
  setFloorRange,
  squareRange,
  setSquareSquare,
} ) => {
  const isSmallDev = useMediaQuery("(max-width:768px)");

  const handleSizeChange = (event, newSizeRange) => {
    setSquareSquare(newSizeRange);
  };

  const handleFloorChange = (event, newFloorRange) => {
    setFloorRange(newFloorRange);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "start",
        fontFamily: "poppins",
        padding: isSmallDev ? "20px" : "30px",
        backgroundColor: "#1D1D3A",
        borderRadius: "5px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute", top: "-120px", right: "-120px" }}>
        {" "}
        <Logo height={"350px"} width={"350px"} />
      </Box>

      <Box sx={{ position: "absolute", bottom: "-100px", left: "-150px" }}>
        {" "}
        <Logo height={"350px"} width={"350px"} />
      </Box>

      <Typography
        sx={{
          color: "#C1AC40",
          fontSize: isSmallDev ? "20px" : "30px",
          marginBottom: "20px",
          fontWeight: "600",
          fontFamily: "poppins",
        }}
      >
        Filtro Apartmentet
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: isSmallDev ? "14px" : "20px",
            color: "white",
            fontWeight: "600",
            fontFamily: "poppins",
          }}
        >
          Tipi
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: "8px",
          }}
        >
          <Button
            sx={{
              border: "1px solid #C1AC40",
              backgroundColor: "transparent",
              fontSize: isSmallDev ? "10px" : "13px",
              color: "white",
              width: "max-content",
              borderRadius: "50px",
              fontFamily: "poppins",
            }}
          >
            1+1
          </Button>
          <Button
            sx={{
              border: "1px solid #C1AC40",
              backgroundColor: "transparent",
              fontSize: isSmallDev ? "10px" : "13px",
              color: "white",
              width: "max-content",
              borderRadius: "50px",
              fontFamily: "poppins",
            }}
          >
            2+1
          </Button>
          <Button
            sx={{
              border: "1px solid #C1AC40",
              backgroundColor: "transparent",
              fontSize: isSmallDev ? "10px" : "13px",
              color: "white",
              width: "max-content",
              borderRadius: "50px",
              fontFamily: "poppins",
            }}
          >
            3+1
          </Button>
          <Button
            sx={{
              border: "1px solid #C1AC40",
              backgroundColor: "transparent",
              fontSize: isSmallDev ? "10px" : "13px",
              color: "white",
              width: "max-content",
              borderRadius: "50px",
              fontFamily: "poppins",
            }}
          >
            Penthouse
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: isSmallDev ? "14px" : "20px",
            color: "white",
            fontWeight: "600",
            fontFamily: "poppins",
          }}
        >
          Siperfaqja
        </Typography>

        <Slider
          aria-label="Default"
          min={minSquare}
          max={maxSquare}
          value={squareRange}
          onChange={handleSizeChange}
          valueLabelDisplay="auto"
          sx={{
            color: "#C1AC40", // Sets the line color
            "& .MuiSlider-thumb": {
              // Styles the thumb (circle)
              backgroundColor: "#ffffff",
              border: "2px solid #C1AC40", // Optional: adds a border to match the line color
            },
            "& .MuiSlider-track": {
              // Styles the filled portion of the line
              color: "#C1AC40",
            },
            "& .MuiSlider-rail": {
              // Styles the unfilled portion of the line
              color: "#C1AC40",
            },
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: "8px",
          }}
        >
          <Button
            sx={{
              border: "1px solid #C1AC40",
              backgroundColor: "transparent",
              fontSize: isSmallDev ? "10px" : "13px",
              color: "white",
              width: "max-content",
              borderRadius: "50px",
              fontFamily: "poppins",
            }}
          >
            Content
          </Button>

          <Button
            sx={{
              border: "1px solid #C1AC40",
              backgroundColor: "transparent",
              fontSize: isSmallDev ? "10px" : "13px",
              color: "white",
              width: "max-content",
              borderRadius: "50px",
              fontFamily: "poppins",
            }}
          >
            Content
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: isSmallDev ? "14px" : "20px",
            color: "white",
            fontWeight: "600",
            fontFamily: "poppins",
          }}
        >
          Kati
        </Typography>

        <Slider
          min={minFloor}
          max={maxFloor}
          value={floorRange}
          onChange={handleFloorChange}
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{
            color: "#C1AC40", // Sets the line color
            "& .MuiSlider-thumb": {
              // Styles the thumb (circle)
              backgroundColor: "#ffffff",
              border: "2px solid #C1AC40", // Optional: adds a border to match the line color
            },
            "& .MuiSlider-track": {
              // Styles the filled portion of the line
              color: "#C1AC40",
            },
            "& .MuiSlider-rail": {
              // Styles the unfilled portion of the line
              color: "#C1AC40",
            },
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: "8px",
          }}
        >
          <Button
            sx={{
              border: "1px solid #C1AC40",
              backgroundColor: "transparent",
              fontSize: isSmallDev ? "10px" : "13px",
              color: "white",
              width: "max-content",
              borderRadius: "50px",
              fontFamily: "poppins",
            }}
          >
            Content
          </Button>

          <Button
            sx={{
              border: "1px solid #C1AC40",
              backgroundColor: "transparent",
              fontSize: isSmallDev ? "10px" : "13px",
              color: "white",
              width: "max-content",
              borderRadius: "50px",
              fontFamily: "poppins",
            }}
          >
            Content
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "end",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        <Button
          sx={{
            border: "1px solid #C1AC40",
            backgroundColor: "transparent",
            color: "white",
            width: isSmallDev ? "35%" : "140px",
            borderRadius: "50px",
            fontFamily: "poppins",
            height: isSmallDev ? "30px" : "35px",
          }}
        >
          Reseto
        </Button>

        <Button
          sx={{
            border: "1px solid #C1AC40",
            backgroundColor: "#C1AC40",
            color: "white",
            width: isSmallDev ? "35%" : "140px",
            borderRadius: "50px",
            fontFamily: "poppins",
            height: isSmallDev ? "30px" : "35px",
          }}
        >
          <img
            style={{ marginRight: "10px", width: isSmallDev ? "20px" : "20px" }}
            src="/assets/images/vector1.png"
            alt=""
          />{" "}
          Filtro
        </Button>
      </Box>
    </Box>
  );
};

export default ApartmentsFilter;
