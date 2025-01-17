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
import React, { forwardRef, useState } from "react";
import { planimetrite } from "../../utils/server";
import Logo from "../../assets/svg/logo";
import SingleViewIcon from "@mui/icons-material/ViewAgenda"; // Icon for single card view
import GridViewIcon from "@mui/icons-material/ViewModule"; // Icon for grid view
import { useSelector } from "react-redux";
import { getAllApartmentSvgData } from "../../features/apartment/ApartmentSlice";
import { mainUrl, planmetricImageUrl } from "../../utils/consts";

const PlanimetriCards = forwardRef((props, ref) => {
  const isSmallDev = useMediaQuery("(max-width:768px)");
  const isMidDev = useMediaQuery("(max-width:1024px)");
  const [columns, setColumns] = useState(2); // Default to 2 columns for mobile

  const handleSingleView = () => setColumns(1);
  const handleGridView = () => setColumns(2);
  const buildingData = useSelector(getAllApartmentSvgData);
  const data = buildingData?.map(item => item.apartmentList).flat();

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
            <SingleViewIcon />
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
            <GridViewIcon />
          </IconButton>
        </Box>
      )}

      <Grid
        container
        spacing={isSmallDev ? 1 : isMidDev ? 2 : 5}
        justifyContent="center"
      >
        {data?.map((property) => (
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
                height={isSmallDev ? (columns === 1 ? "300" : "200") : "300"}
                image={`${mainUrl}${planmetricImageUrl}${property.imageUrl}`}
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
                      fontFamily: "poppins",
                    }}
                  >
                    Sipërfaqja
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "white", fontFamily: "poppins" }}
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
                      fontFamily: "poppins",
                    }}
                  >
                    Tipi
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "white", fontFamily: "poppins" }}
                  >
                    {property.rooms}
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
                      fontFamily: "poppins",
                    }}
                  >
                    Kati
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "white", fontFamily: "poppins" }}
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
                    sx={{
                      color: "#C1AC40",
                      textTransform: "capitalize",
                      fontFamily: "poppins",
                      cursor: "pointer",
                      zIndex: 2,
                      border: "1px solid #c1ac40",
                      borderRadius: "50px",
                      ":hover": {
                        backgroundColor: "#c1ac40",
                        color: "#1d1d3a",
                        transition: "0.7s",
                      },
                    }}
                  >
                    <img
                      src="/assets/images/vector.png"
                      alt=""
                      style={{ marginRight: "7px" }}
                    />
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
        ))}
      </Grid>
    </Box>
  );
});

export default PlanimetriCards;

