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
import {
  handleFilterState,
  setRegularFloorFilter,
  setRegularRoomFilter,
  setRegularSquareFilter,
} from "../features/filter/FilterSlice";

const object = {
  '1': ['A', 'B', 'C', 'D', 'G'],
  '2': ['ABC', 'DE', 'F'],
};

const PlanFilter = () => {
  const isSmallDev = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const minFloor = 1;
  const maxFloor = 14;
  const minSquare = 40.0;
  const maxSquare = 150.0;

  const [floorRange, setFloorRange] = useState([minFloor, maxFloor]);
  const [squareRange, setSquareRange] = useState([minSquare, maxSquare]);
  const [selectedProject, setSelectedProject] = useState("1");
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
          fontFamily: "Poppins",
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
          onChange={(e) => setSelectedProject(parseInt(e.target.value))}
            defaultValue="projekti"
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            sx={{
              "&:before": {
                borderBottom: "2px solid #c1ac40", // Underline color
              },
              "&:after": {
                borderBottom: "2px solid #c1ac40", // Focused underline color
              },
              "& .MuiNativeSelect-select": {
                color: "#c1ac40", // Selected option text color
                fontFamily: "Poppins, sans-serif",
                fontSize: "20px",
                backgroundColor: "#1d1d3a", // Background color
                padding: "8px 12px", // Padding for better readability
                borderRadius: "4px", // Rounded corners
              },
              "& .MuiNativeSelect-icon": {
                color: "#c1ac40", // Dropdown icon color
              },
            }}
          >
            <option value="projekti" style={{ color: "#c1ac40" }}>
              Projekti
            </option>
            <option value={1} style={{ color: "#1d1d3a" }}>
              River Residence 1
            </option>
            <option value={2} style={{ color: "#1d1d3a" }}>
            River Residence 2
            </option>
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
            defaultValue="objekti"
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            sx={{
              "&:before": {
                borderBottom: "2px solid #c1ac40",
              },
              "&:after": {
                borderBottom: "2px solid #c1ac40",
              },
              "& .MuiNativeSelect-select": {
                color: "#c1ac40",
                fontFamily: "Poppins, sans-serif",
                fontSize: "18px",
                backgroundColor: "#1d1d3a",
                padding: "8px 12px",
                borderRadius: "4px",
              },
              "& .MuiNativeSelect-icon": {
                color: "#c1ac40",
              },
              "& .MuiNativeSelect-root": {
                backgroundColor: "#1d1d3a",
              },
              "& .MuiList-root": {
                backgroundColor: "#1d1d3a",
                border: "1px solid #c1ac40",
                borderRadius: "4px",
              },
              "& .MuiListItem-root": {
                color: "#c1ac40",
                "&:hover": {
                  backgroundColor: "#c1ac40",
                  color: "#1d1d3a",
                },
              },
            }}
          >
            <option value="objekti" disabled style={{ color: "#c1ac40" }}>
              Objekti
            </option>
           {object[selectedProject].map((item) => (
              <option value={item} style={{ color: "#1d1d3a" }}>
                {item}
              </option>
            ))}
          </NativeSelect>
        </FormControl>

        {/* <FormControl fullWidth>
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
            defaultValue="Objekti"
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            sx={{
              "&:before": {
                borderBottom: "2px solid #c1ac40", // Underline color
              },
              "&:after": {
                borderBottom: "2px solid #c1ac40", // Focused underline color
              },
              "& .MuiNativeSelect-select": {
                color: "#c1ac40", // Selected option text color
                fontFamily: "Poppins",
                fontSize: "20px",
                backgroundColor: "#1d1d3a", // Background color
                padding: "8px 12px", // Padding for better readability
                borderRadius: "4px", // Rounded corners
              },
              "& .MuiNativeSelect-icon": {
                color: "#c1ac40", // Dropdown icon color
              },
            }}
          >
            <option value="Objekti" style={{ color: "#c1ac40" }}>
              Patundshmëria
            </option>
            <option value={20} style={{ color: "#1d1d3a" }}>
              1
            </option>
            <option value={30} style={{ color: "#1d1d3a" }}>
              2
            </option>
          </NativeSelect>
        </FormControl> */}
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
              fontFamily: "Poppins",
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
                fontFamily: "Poppins",
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
                fontFamily: "Poppins",
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
              fontFamily: "Poppins",
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
                fontFamily: "Poppins",
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
                fontFamily: "Poppins",
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
              fontFamily: "Poppins",
              color: "white",
            }}
          >
            Tipi
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100%",
                gap: "8px",
                marginTop: "10px",
              }}
            >
              <Button
                onClick={() => handleRoomFilter("1+1")}
                sx={{
                  border: "1px solid #C1AC40",
                  backgroundColor: room.includes("1+1")
                    ? "#C1AC40"
                    : "transparent",
                  fontSize: isSmallDev ? "10px" : "13px",
                  color: "white",
                  width: "max-content",
                  borderRadius: "50px",
                  fontFamily: "Poppins",
                }}
              >
                1+1
              </Button>
              <Button
                onClick={() => handleRoomFilter("2+1")}
                sx={{
                  border: "1px solid #C1AC40",
                  backgroundColor: room.includes("2+1")
                    ? "#C1AC40"
                    : "transparent",
                  fontSize: isSmallDev ? "10px" : "13px",
                  color: "white",
                  width: "max-content",
                  borderRadius: "50px",
                  fontFamily: "Poppins",
                }}
              >
                2+1
              </Button>
              <Button
                onClick={() => handleRoomFilter("3+1")}
                sx={{
                  border: "1px solid #C1AC40",
                  backgroundColor: room.includes("3+1")
                    ? "#C1AC40"
                    : "transparent",
                  fontSize: isSmallDev ? "10px" : "13px",
                  color: "white",
                  width: "max-content",
                  borderRadius: "50px",
                  fontFamily: "Poppins",
                }}
              >
                3+1
              </Button>
              <Button
                onClick={() => handleRoomFilter("4+1")}
                sx={{
                  border: "1px solid #C1AC40",
                  backgroundColor: room.includes("4+1")
                    ? "#C1AC40"
                    : "transparent",
                  fontSize: isSmallDev ? "10px" : "13px",
                  color: "white",
                  width: "max-content",
                  borderRadius: "50px",
                  fontFamily: "Poppins",
                }}
              >
                4+1
              </Button>
              <Button
                onClick={() => handleRoomFilter("5+1")}
                sx={{
                  border: "1px solid #C1AC40",
                  backgroundColor: room.includes("5+1")
                    ? "#C1AC40"
                    : "transparent",
                  fontSize: isSmallDev ? "10px" : "13px",
                  color: "white",
                  width: "max-content",
                  borderRadius: "50px",
                  fontFamily: "Poppins",
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
                  fontFamily: "Poppins",
                }}
              >
                Penthouse
              </Button>
            </Box>
          </Box>
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
            fontFamily: "Poppins",
            fontSize: "15px",
            color: "white",
            width: isSmallDev ? "40%" : "150px",
          }}
        >
          Reseto
        </Button>

        <Button
          onClick={applyFilter}
          sx={{
            backgroundColor: "#C1AC40",
            border: "1px solid #C1AC40",
            borderRadius: "20px",
            color: "white",
            fontFamily: "Poppins",
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
