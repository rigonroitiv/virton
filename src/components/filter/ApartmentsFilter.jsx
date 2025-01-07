import { Box, Button, Slider, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../assets/svg/logo";
import { useDispatch } from "react-redux";
import {
  handleFilterState,
  setRegularFloorFilter,
  setRegularRoomFilter,
  setRegularSquareFilter,
} from "../../features/filter/FilterSlice";

const minFloor = 1;
const maxFloor = 9;
const minSquare = 40.0;
const maxSquare = 150.0;

const ApartmentsFilter = () => {
  const isSmallDev = useMediaQuery("(max-width:768px)");
  const [floorRange, setFloorRange] = useState([minFloor, maxFloor]);
  const [squareRange, setSquareRange] = useState([minSquare, maxSquare]);
  const [room, setRoom] = useState(["all"]);
  const dispatch = useDispatch();

  const handleSizeChange = (event, newSizeRange) => {
    setSquareRange(newSizeRange);
  };

  const handleFloorChange = (event, newFloorRange) => {
    setFloorRange(newFloorRange);
  };

  const applyFilter = () => {
    dispatch(setRegularSquareFilter(squareRange));
    dispatch(setRegularFloorFilter(floorRange));
    dispatch(handleFilterState(true));
    dispatch(setRegularRoomFilter(room));
  };

  const handleRoomFilter = (actionPayload) => {
    if (actionPayload === "all") {
      setRoom(["all"]);
    } else {
      const exists = room.includes(actionPayload);
      if (exists) {
        // Remove the room from the array
        setRoom((prevRooms) => {
          const updatedRooms = prevRooms.filter(
            (item) => item !== actionPayload
          );
          // If no rooms left, reset to ['all']
          if (updatedRooms.length === 0) {
            return ["all"];
          }
          return updatedRooms;
        });
      } else {
        // Add the room to the array
        setRoom((prevRooms) => {
          const updatedRooms = [...prevRooms, actionPayload];
          // Remove 'all' if it's already in the array and other rooms exist
          if (updatedRooms.includes("all") && updatedRooms.length > 1) {
            return updatedRooms.filter((item) => item !== "all");
          }
          return updatedRooms;
        });
      }
    }
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
      <Box sx={{ position: "absolute", top: "-140px", right: "-120px" }}>
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
        <span style={{ color: "white" }}>Filtro</span> Apartmentet
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
            flexWrap: "wrap",
            width: "100%",
            gap: "8px",
          }}
        >
          <Button
            onClick={() => handleRoomFilter("1+1")}
            sx={{
              border: "1px solid #C1AC40",
              backgroundColor: room.includes("1+1") ? "#C1AC40" : "transparent",
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
            onClick={() => handleRoomFilter("2+1")}
            sx={{
              border: "1px solid #C1AC40",
              backgroundColor: room.includes("2+1") ? "#C1AC40" : "transparent",
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
            onClick={() => handleRoomFilter("3+1")}
            sx={{
              border: "1px solid #C1AC40",
              backgroundColor: room.includes("3+1") ? "#C1AC40" : "transparent",
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
            onClick={() => handleRoomFilter("4+1")}
            sx={{
              border: "1px solid #C1AC40",
              backgroundColor: room.includes("4+1") ? "#C1AC40" : "transparent",
              fontSize: isSmallDev ? "10px" : "13px",
              color: "white",
              width: "max-content",
              borderRadius: "50px",
              fontFamily: "poppins",
            }}
          >
            4+1
          </Button>
          <Button
            onClick={() => handleRoomFilter("5+1")}
            sx={{
              border: "1px solid #C1AC40",
              backgroundColor: room.includes("5+1") ? "#C1AC40" : "transparent",
              fontSize: isSmallDev ? "10px" : "13px",
              color: "white",
              width: "max-content",
              borderRadius: "50px",
              fontFamily: "poppins",
            }}
          >
            5+1
          </Button>
          <Button
            onClick={() => handleRoomFilter("penthouse")}
            sx={{
              border: "1px solid #C1AC40",
              backgroundColor: room.includes("penthouse")
                ? "#C1AC40"
                : "transparent",
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
          Sipërfaqja
        </Typography>

        <Slider
          aria-label="Default"
          min={minSquare}
          step={0.1}
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
          <input
            value={squareRange[0]}
            onChange={(e) => {
              if (parseFloat(e.currentTarget.value)) {
                setSquareRange([
                  parseFloat(e.currentTarget.value),
                  squareRange[1],
                ]);
              }
            }}
            className="filter-input"
            placeholder="prej"
            style={{
              border: "1px solid #C1AC40",
              backgroundColor: "transparent",
              fontSize: isSmallDev ? "10px" : "13px",
              color: "white",
              width: "30%",
              height: isSmallDev ? "30px" : "35px",
              borderRadius: "50px",
              fontFamily: "poppins",
              padding: "8px",
            }}
          />

          <input
            placeholder="deri"
            onChange={(e) => {
              if (parseFloat(e.currentTarget.value)) {
                setSquareRange([
                  squareRange[0],
                  parseFloat(e.currentTarget.value),
                ]);
              }
            }}
            value={squareRange[1]}
            className="filter-input"
            style={{
              border: "1px solid #C1AC40",
              backgroundColor: "transparent",
              fontSize: isSmallDev ? "10px" : "13px",
              color: "white",
              width: "30%",
              height: isSmallDev ? "30px" : "35px",
              borderRadius: "50px",
              fontFamily: "poppins",
              padding: "8px",
            }}
          />
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
          <input
            value={floorRange[0]}
            type="number"
            onChange={(e) => {
              if (parseFloat(e.currentTarget.value)) {
                setFloorRange([
                  parseFloat(e.currentTarget.value),
                  floorRange[1],
                ]);
              }
            }}
            className="filter-input"
            placeholder="prej"
            style={{
              border: "1px solid #C1AC40",
              backgroundColor: "transparent",
              fontSize: isSmallDev ? "10px" : "13px",
              color: "white",
              width: "30%",
              height: isSmallDev ? "30px" : "35px",
              borderRadius: "50px",
              fontFamily: "poppins",
              zIndex: 99,
              padding: "8px",
            }}
          ></input>

          <input
            value={floorRange[1]}
            type="number"
            onChange={(e) => {
              if (parseFloat(e.currentTarget.value)) {
                setFloorRange([
                  floorRange[0],
                  parseFloat(e.currentTarget.value),
                ]);
              }
            }}
            className="filter-input"
            placeholder="deri"
            style={{
              border: "1px solid #C1AC40",
              backgroundColor: "transparent",
              fontSize: isSmallDev ? "10px" : "13px",
              color: "white",
              width: "30%",
              height: isSmallDev ? "30px" : "35px",
              borderRadius: "50px",
              fontFamily: "poppins",
              zIndex: 99,
              padding: "8px",
            }}
          ></input>
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
          onClick={() => {
            dispatch(handleFilterState(false));
          }}
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
          onClick={applyFilter}
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
