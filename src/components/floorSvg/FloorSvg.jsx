import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const FloorSvg = () => {
  const totalFloors = 15; // Total number of floors
  const floors = Array.from({ length: totalFloors }, (_, i) => totalFloors - i); // Floors in descending order
  const [activeFloor, setActiveFloor] = useState(floors[0]); // Default active floor
  const visibleRange = 5; // Number of floors visible at a time
  const [startIndex, setStartIndex] = useState(0); // Start index for the visible floors

  // Adjust visible floors based on the active floor
  const updateVisibleFloors = (newActiveFloor) => {
    const newStartIndex = Math.max(
      0,
      Math.min(
        floors.indexOf(newActiveFloor) - Math.floor(visibleRange / 2),
        floors.length - visibleRange
      )
    );
    setStartIndex(newStartIndex);
  };

  // Scroll Up: Move to the next floor
  const scrollUp = () => {
    const currentIndex = floors.indexOf(activeFloor);
    if (currentIndex < floors.length - 1) {
      const newActiveFloor = floors[currentIndex + 1];
      setActiveFloor(newActiveFloor);
      updateVisibleFloors(newActiveFloor);
    }
  };

  // Scroll Down: Move to the previous floor
  const scrollDown = () => {
    const currentIndex = floors.indexOf(activeFloor);
    if (currentIndex > 0) {
      const newActiveFloor = floors[currentIndex - 1];
      setActiveFloor(newActiveFloor);
      updateVisibleFloors(newActiveFloor);
    }
  };

  // Content for each floor
  const floorContent = floors.reduce((acc, floor) => {
    acc[floor] = {
      title: `Kati ${floor}`,
      image: `path_to_floor_${floor}_image`,
    };
    return acc;
  }, {});

  return (
    <Box display="flex" height="100vh" bgcolor="#1D1D3A">
      {/* Left Side: Vertical Slider */}
      <Box
        width="12%"
        bgcolor="#1D1D3A"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        padding={1}
      >
        {/* Scroll Up Button */}
        <Button
          onClick={scrollUp}
          disabled={activeFloor === floors[floors.length - 1]} // Disable if no higher floors
          sx={{
            width: "40px",
            height: "60px",
            // marginBottom: "8px",
            backgroundColor: "#C1AC40",
            color: "#1D1D3A",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#1D1D3A",
              color: "#C1AC40",
            },
          }}
        >
          ↑
        </Button>

        {/* Floors List */}
        <List>
          {floors.slice(startIndex, startIndex + visibleRange).map((floor) => (
            <ListItem key={floor} disablePadding>
              <ListItemButton
                onClick={() => setActiveFloor(floor)}
                sx={{
                  backgroundColor:
                    activeFloor === floor ? "#C1AC40" : "transparent",
                  color: activeFloor === floor ? "#1D1D3A" : "#C1AC40",
                  borderRadius: "4px",
                  marginBottom: "8px",
                  fontWeight: activeFloor === floor ? "bold" : "normal",
                }}
              >
                <ListItemText
                  primary={floor}
                  primaryTypographyProps={{
                    align: "center",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Scroll Down Button */}
        <Button
          onClick={scrollDown}
          disabled={activeFloor === floors[0]} // Disable if no lower floors
          sx={{
            width: "40px",
            height: "60px",
            // marginTop: "8px",
            backgroundColor: "#C1AC40",
            color: "#1D1D3A",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#1D1D3A",
              color: "#C1AC40",
            },
          }}
        >
          ↓
        </Button>
      </Box>

      {/* Right Side: Title, Image, and Button */}
      <Box
        width="88%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor="white"
        padding={4}
      >
        {/* Title */}
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            color: "#C1AC40",
            textAlign: "center",
          }}
        >
          {floorContent[activeFloor].title}
        </Typography>

        {/* Floor Plan Image */}
        <Box
          component="img"
          src={floorContent[activeFloor].image}
          alt={`Floor ${activeFloor}`}
          width="80%"
          sx={{
            border: "2px solid #C1AC40",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        />

        {/* Back Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#C1AC40",
            color: "#1D1D3A",
            "&:hover": {
              backgroundColor: "#1D1D3A",
              color: "#C1AC40",
            },
          }}
        >
          KTHEHU
        </Button>
      </Box>
    </Box>
  );
};

export default FloorSvg;
