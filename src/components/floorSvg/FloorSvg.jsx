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
import Toparrow from "../../assets/svg/Toparrow";
import Bottomarrow from "../../assets/svg/Bottomarrow";
import { useTransition, animated } from "@react-spring/web"; // Import for animation

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

  // Transitions for List items with slower and smoother effect
  const transitions = useTransition(
    floors.slice(startIndex, startIndex + visibleRange),
    {
      from: { opacity: 0, transform: "translateY(20px)" },
      enter: { opacity: 1, transform: "translateY(0px)" },
      leave: { opacity: 0, transform: "translateY(-20px)" },
      config: { tension: 100, friction: 30 }, // Lower tension and higher friction for slower animation
    }
  );

  return (
    <Box
      sx={{ userSelect: "none" }}
      display="flex"
      height="100vh"
      bgcolor="#1D1D3A"
    >
      {/* Left Side: Vertical Slider */}
      <Box
        width="12%"
        bgcolor="#1D1D3A"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={1}
      >
        {/* Scroll Up Button */}
        <Button
          onClick={scrollDown}
          disabled={activeFloor === floors[0]} // Disable if no higher floors
          sx={{
            width: "50px",
            minWidth: "0px",
            height: "50px",
            border: "1px solid #c1ac40",
            backgroundColor: "#C1AC40",
            color: "#1D1D3A",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#1D1D3A",
              color: "#C1AC40",
            },
          }}
        >
          <Toparrow />
        </Button>

        {/* Floors List with Smooth Transition */}
        <List>
          {transitions((style, floor) => (
            <animated.div style={style} key={floor}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => setActiveFloor(floor)}
                  sx={{
                    backgroundColor:
                      activeFloor === floor ? "#C1AC40" : "transparent",
                    color: activeFloor === floor ? "#1D1D3A" : "#C1AC40",
                    borderRadius: "50px",
                    minWidth: "0px",
                    width: "50px",
                    height: "50px",
                    marginBottom: "8px",
                    fontWeight: activeFloor === floor ? "bold" : "normal",
                    fontFamily: "poppins",
                  }}
                >
                  <ListItemText
                    primary={floor}
                    primaryTypographyProps={{
                      align: "center",
                      color: "white",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </animated.div>
          ))}
        </List>

        {/* Scroll Down Button */}
        <Button
          onClick={scrollUp}
          disabled={activeFloor === floors[floors.length - 1]} // Disable if no lower floors
          sx={{
            width: "50px",
            minWidth: "0px",
            height: "50px",
            border: "1px solid #c1ac40",
            backgroundColor: "#C1AC40",
            color: "#1D1D3A",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#1D1D3A",
              color: "#C1AC40",
            },
          }}
        >
          <Bottomarrow />
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "88%",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              color: "#C1AC40",
              textAlign: "center",
              fontFamily: "poppins",
              fontWeight: "600",
            }}
          >
            {floorContent[activeFloor].title}
          </Typography>

          {/* Back Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#C1AC40",
              color: "#1D1D3A",
              fontFamily: "poppins",
              width: "200px",
              borderRadius: "50px",
              height: "40px",
              "&:hover": {
                backgroundColor: "#1D1D3A",
                color: "#C1AC40",
              },
            }}
          >
            KTHEHU
          </Button>
        </Box>

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
      </Box>
    </Box>
  );
};

export default FloorSvg;
