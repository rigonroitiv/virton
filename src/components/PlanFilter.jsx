import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  Slider,
  SliderValueLabel,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { planimetrite } from "../utils/server";
import PlanimetriCards from "./filter/PlanimetriCards";
import Logo from "../assets/svg/logo";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const PlanFilter = () => {
  const [value, setValue] = React.useState([20, 37]);
  const isSmallDev = useMediaQuery("(max-width: 768px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const minFloor = 1;
  const maxFloor = 9;
  const minSquare = 40.0;
  const maxSquare = 150.0;

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
        justifyContent: "center",
        alignItems: "center",
        padding: isSmallDev ? "100px 20px" : "150px 50px ",
        backgroundColor: "#1D1D3A",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontFamily: "poppins",
          width: "100%",
          fontSize: isSmallDev ? "40px" : "70px",
          fontWeight: "600",
          color: "#C1AC40",
          marginBottom: "50px",
        }}
      >
        <span style={{ color: "white" }}>Filtro </span> Apartamentet...
      </Typography>

      <Box
        sx={{
          position: "absolute",
          right: "-120px",
          top: "-140px",
          overflow: "hidden",
          zIndex: "-1",
        }}
      >
        <Logo height={"444px"} width={"444px"} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: "-200px",
          bottom: "-100px",
          overflow: "hidden",
        }}
      >
        <Logo height={"444px"} width={"444px"} />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: isSmallDev ? "column" : "row",
          gap: isSmallDev ? "50px" : "70px",
        }}
      >
        <FormControl fullWidth>
          <InputLabel
            variant="standard"
            htmlFor="uncontrolled-native"
            sx={{
              color: "#C1AC40",
              "&.Mui-focused": {
                color: "#C1AC40",
              },
            }}
          ></InputLabel>
          <NativeSelect
            defaultValue={"Objekti"}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            sx={{
              "&:before": {
                borderBottom: "2px solid #C1AC40", // Normal underline color
              },
              "&:after": {
                borderBottom: "2px solid #C1AC40", // Focused underline color
              },
              "& .MuiNativeSelect-select": {
                color: "white ", // Option text color
                fontFamily: "poppins",
                fontSize: "20px",
              },
            }}
          >
            <option value={"Objekti"}>Objekti</option>
            <option value={20}>1</option>
            <option value={30}>2</option>
          </NativeSelect>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel
            variant="standard"
            htmlFor="uncontrolled-native"
            sx={{
              color: "#C1AC40",
              "&.Mui-focused": {
                color: "#C1AC40",
              },
            }}
          ></InputLabel>
          <NativeSelect
            defaultValue={"Objekti"}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            sx={{
              "&:before": {
                borderBottom: "2px solid #C1AC40", // Normal underline color
              },
              "&:after": {
                borderBottom: "2px solid #C1AC40", // Focused underline color
              },
              "& .MuiNativeSelect-select": {
                color: "white", // Option text color
                fontFamily: "poppins",
                fontSize: "20px",
              },
            }}
          >
            <option value={"Objekti"}>Patundshmëria</option>
            <option value={20}>1</option>
            <option value={30}>2</option>
          </NativeSelect>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel
            variant="standard"
            htmlFor="uncontrolled-native"
            sx={{
              color: "#C1AC40",
              "&.Mui-focused": {
                color: "#C1AC40",
              },
            }}
          ></InputLabel>
          <NativeSelect
            defaultValue={"Objekti"}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            sx={{
              "&:before": {
                borderBottom: "2px solid #C1AC40", // Normal underline color
              },
              "&:after": {
                borderBottom: "2px solid #C1AC40", // Focused underline color
              },
              "& .MuiNativeSelect-select": {
                color: "white", // Option text color
                fontFamily: "poppins",
                fontSize: "20px",
              },
            }}
          >
            <option value={"Objekti"}>Patundshmëria</option>
            <option value={20}>1</option>
            <option value={30}>2</option>
          </NativeSelect>
        </FormControl>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: isSmallDev ? "column" : "row",
          gap: isSmallDev ? "50px" : "70px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            marginTop: isSmallDev ? "30px" : "80px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              fontFamily: "poppins",
              color: "white",
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
              marginTop: "10px",
              zIndex: "1",
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
            justifyContent: "start",
            marginTop: isSmallDev ? "0px" : "80px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              fontFamily: "poppins",
              color: "white",
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
              marginTop: "10px",
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
            flexDirection: "column",
            justifyContent: "start",
            marginTop: isSmallDev ? "0px" : "80px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              fontFamily: "poppins",
              color: "white",
            }}
          >
            Sipërfaqja
          </Typography>

          <Slider
            defaultValue={[20, 37]}
            getAriaLabel={() => "Temperature range"}
            min={0}
            max={100}
            sx={{
              color: "#C1AC40", // Line color
              "& .MuiSlider-thumb": {
                backgroundColor: "#ffffff", // Thumb (circle) color
                border: "2px solid #C1AC40", // Optional border around the thumb
              },
              "& .MuiSlider-track": {
                border: "none",
              },
              "& .MuiSlider-rail": {
                color: "#C1AC40", // Rail color for the inactive part
                opacity: 0.5,
              },
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "end",
          gap: "10px",
          marginTop: "50px",
          width: "100%",
        }}
      >
        <Button
          sx={{
            backgroundColor: "transparent",
            border: "1px solid #C1AC40",
            borderRadius: "20px",
            fontFamily: "poppins",
            fontSize: "15px",
            color: "white",
            width: isSmallDev ? "40%" : "150px",
          }}
        >
          Reseto
        </Button>

        <Button
          sx={{
            backgroundColor: "#C1AC40",
            border: "1px solid #C1AC40",
            borderRadius: "20px",
            color: "white",
            fontFamily: "poppins",
            fontSize: "15px",
            width: isSmallDev ? "40%" : "150px",
          }}
        >
          <img
            src="/assets/images/vector1.png"
            alt=""
            style={{ marginRight: "5px", width: "25px" }}
          />
          Filtro
        </Button>
      </Box>
    </Box>
  );
};

export default PlanFilter;
