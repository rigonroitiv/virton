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
} from "@mui/material";
import React from "react";
import { planimetrite } from "../utils/server";

const FilterApartment = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "5% 100px",
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
              marginTop: "80px",
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
              marginTop: "80px",
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
              marginTop: "80px",
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
            <img
              src="/assets/images/vector1.png"
              alt=""
              style={{ marginRight: "5px", width: "25px" }}
            />
            Filtro
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          padding: "50px 100px",
          backgroundColor: "white",
          marginTop: "50px",
        }}
      >
        <Grid container spacing={5} justifyContent="center">
          {planimetrite.map((property) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={property.id}
              display="flex"
              justifyContent="center"
            >
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  backgroundColor: "#1c1c3d",
                  border: "10px solid #1c1c3d",
                  borderRadius: "5px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    backgroundColor: "white",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  height="300"
                  image={property.image}
                  alt={`${property.tipi} image`}
                />
                <CardContent
                  sx={{
                    padding: 1,
                    height: "180px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="start"
                    sx={{ marginBottom: 1 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        color: "#C1AC40",
                        fontWeight: "400",
                      }}
                    >
                      Siperfaqja
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white" }}>
                      {property.siperfaqja}
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ marginBottom: 1 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        color: "#C1AC40",
                        fontWeight: "400",
                      }}
                    >
                      Tipi
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white" }}>
                      {property.tipi}
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        color: "#C1AC40",
                        fontWeight: "400",
                      }}
                    >
                      Kati
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white" }}>
                      {property.kati}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "end",
                      marginTop: "15px",
                    }}
                  >
                    <Button
                      sx={{ color: "#C1AC40", textTransform: "capitalize" }}
                    >
                      <img
                        src="/assets/images/vector.png"
                        alt=""
                        style={{ marginRight: "7px" }}
                      />
                      Me Shume...
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FilterApartment;
