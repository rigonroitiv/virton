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
import React from "react";
import { planimetrite } from "../utils/server";
import PlanimetriCards from "./filter/PlanimetriCards";
import Logo from "../assets/svg/logo";

const PlanFilter = () => {
  const [value, setValue] = React.useState([20, 37]);
  const isSmallDev = useMediaQuery("(max-width: 768px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: isSmallDev ? "50px 20px" : "50px ",
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
        Filtro Apartamentet...
      </Typography>

      <Box
        sx={{
          position: "absolute",
          right: "-120px",
          top: "-140px",
          overflow: "hidden",
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
          gap: isSmallDev ? "20px" : "70px",
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
            <option value={"Objekti"}>Patundshmeria</option>
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
            <option value={"Objekti"}>Patundshmeria</option>
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
          gap: isSmallDev ? "20px" : "70px",
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
            Siperfaqja
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
            Siperfaqja
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
