import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import React, { forwardRef, useEffect, useState } from "react";
import Logo from "../../assets/svg/logo";
import { useDispatch, useSelector } from "react-redux";
import { getAllApartmentSvgData } from "../../features/apartment/ApartmentSlice";
import { mainUrl, planmetricImageUrl } from "../../utils/consts";
import {
  getRegularFloorFilter,
  getRegularRoomFilter,
  getRegularSquareFilter,
} from "../../features/filter/FilterSlice";
import { fetchApartmentsAll } from "../../features/apartment/ApartmentAPI";
import { useNavigate, useParams } from "react-router-dom";
import GridIcon from "../../assets/svg/GridIcon";
import SingleIcon from "../../assets/svg/SingleIcon";

const PlanimetriCards = forwardRef(({ single, ...props }, ref) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isSmallDev = useMediaQuery("(max-width:768px)");
  const isMidDev = useMediaQuery("(max-width:1024px)");
  const [columns, setColumns] = useState(1); // Default to 2 columns for mobile
  const squareFilter = useSelector(getRegularSquareFilter);
  const roomFilter = useSelector(getRegularRoomFilter);
  const [data, setData] = useState();
  const floorFilter = useSelector(getRegularFloorFilter);
  const buildingData = useSelector(getAllApartmentSvgData);
  const navigate = useNavigate();

  const handleSingleView = () => setColumns(1);
  const handleGridView = () => setColumns(2);

  // First useEffect to handle the 'single' prop and fetching data
  useEffect(() => {
    if (!single) {
      dispatch(fetchApartmentsAll());
    }
  }, [single, dispatch]);

  // Update data when buildingData or single prop changes
  useEffect(() => {
    if (single) {
      // Flatten buildingData into individual apartments
      const flattenedData =
        buildingData?.flatMap((building) => building.apartmentList) || [];
      setData(flattenedData);
    } else {
      // Use buildingData as-is for grouped view
      setData(buildingData);
    }
  }, [single, buildingData]);

  return (
    <Box
      ref={ref}
      sx={{
        flexGrow: 1,
        backgroundColor: "white",
        marginTop: isSmallDev ? "20px" : "50px",
      }}
    >
      {/* Display toggle icons only on mobile */}
      {isSmallDev && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            marginBottom: "10px",
            gap: "5px",
          }}
        >
          <IconButton
            onClick={handleSingleView}
            sx={{
              color: columns === 2 ? "#1d1d3a" : "#c1ac40", // Text/icon color
              border: `1px solid ${columns === 2 ? "#1d1d3a" : "#c1ac40"}`, // Border matches the color
              borderRadius: "50px", // Optional: Add rounded corners
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)", // Optional hover effect
              },
            }}
          >
            <SingleIcon />
          </IconButton>
          <IconButton
            onClick={handleGridView}
            sx={{
              color: columns === 2 ? "#c1ac40" : "#1d1d3a", // Text/icon color
              border: `1px solid ${columns === 2 ? "#c1ac40" : "#1d1d3a"}`, // Border matches the color
              borderRadius: "50px", // Optional: Add rounded corners
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)", // Optional hover effect
              },
            }}
          >
            <GridIcon />
          </IconButton>
        </Box>
      )}

      <Grid
        container
        spacing={isSmallDev ? 1 : isMidDev ? 2 : 5}
        justifyContent="center"
      >
        {data?.map((property) => {
          if (
            squareFilter.startVal <= parseFloat(property?.square) &&
            squareFilter.endVal >= parseFloat(property?.square) &&
            (roomFilter.includes(property?.rooms) ||
              roomFilter.includes("all")) &&
            floorFilter.startVal <= parseInt(property?.floorNumber) &&
            floorFilter.endVal >= parseInt(property?.floorNumber)
          ) {
            return (
              <Grid
                item
                xs={isSmallDev ? 12 / columns : 3} // Adjust dynamically for mobile, 3 (4 cards) for desktop
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
                      padding: "15px",
                      borderRadius: "5px",
                    }}
                    height={
                      isSmallDev ? (columns === 1 ? "300" : "200") : "300"
                    }
                    image={`${mainUrl}${planmetricImageUrl}${property.image3dUrl}`}
                    alt={`${property.rooms} image`}
                  />
                  <CardContent
                    sx={{
                      padding: 1,
                      height: "180px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                      zIndex: "2",
                    }}
                  >
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="start"
                      sx={{ marginBottom: 1, marginTop: 3 }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          color: "#C1AC40",
                          fontWeight: "400",
                          fontFamily: "Poppins",
                        }}
                      >
                        Sipërfaqja
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "white", fontFamily: "Poppins" }}
                      >
                        {property.square}
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
                          fontFamily: "Poppins",
                        }}
                      >
                        Tipi
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "white", fontFamily: "Poppins" }}
                      >
                        {property.rooms}+1
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
                          fontFamily: "Poppins",
                        }}
                      >
                        Kati
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "white", fontFamily: "Poppins" }}
                      >
                        {property.floorNumber}
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
                        onClick={() => {
                          navigate(`/${id}/apartment/${property.id}`);
                        }}
                        sx={{
                          color: "#C1AC40",
                          textTransform: "capitalize",
                          fontFamily: "Poppins",
                          cursor: "pointer",
                          zIndex: 2,
                          border: "1px solid white",
                          borderRadius: "50px",
                          ":hover": {
                            backgroundColor: "#c1ac40",
                            color: "#1d1d3a",
                            transition: "0.7s",
                          },
                        }}
                      >
                        {/* <img
                          src="/projektet/assets/images/vector.png"
                          alt=""
                          style={{ marginRight: "7px" }}
                        /> */}
                        Më Shumë...
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "-100px",
                        left: "-140px",
                        zIndex: "1",
                      }}
                    >
                      <Logo height={"290px"} width={"290px"} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          }
        })}
      </Grid>
    </Box>
  );
});

export default PlanimetriCards;
