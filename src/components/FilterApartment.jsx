import {
  Box,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  Slider,
  SliderValueLabel,
  Typography,
} from "@mui/material";
import React from "react";

const FilterApartment = () => {
  const [value, setValue] = React.useState([20, 37]);

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
        padding: "50px 100px",
        backgroundColor: "#1D1D3A",
      }}
    >
      <Typography
        sx={{
          fontFamily: "poppins",
          fontSize: "70px",
          fontWeight: "600",
          color: "#C1AC40",
          marginBottom: "50px",
        }}
      >
        Filtro Apartamentet...
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "70px",
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
          flexDirection: "row",
          gap: "70px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            marginTop: "50px",
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
            marginTop: "50px",
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
            marginTop: "50px",
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
            width: "150px",
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
            width: "150px",
          }}
        >
          Filtro
        </Button>
      </Box>
    </Box>
  );
};

export default FilterApartment;