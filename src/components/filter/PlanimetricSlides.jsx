import React, { forwardRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { mainUrl, planmetricImageUrl } from "../../utils/consts";
import {
  getRegularFloorFilter,
  getRegularRoomFilter,
  getRegularSquareFilter,
} from "../../features/filter/FilterSlice";
import { getAllApartmentSvgData } from "../../features/apartment/ApartmentSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchApartmentsAll } from "../../features/apartment/ApartmentAPI";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { planimetrite } from "../../utils/server";
import Logo from "../../assets/svg/logo";
import "./pslides.css";
import { useNavigate } from "react-router-dom";

const PlanimetriCards = forwardRef(({ single, ...props }, ref) => {
  const isSmallDev = useMediaQuery("(max-width:768px)");

  const dispatch = useDispatch();
  const squareFilter = useSelector(getRegularSquareFilter);
  const roomFilter = useSelector(getRegularRoomFilter);
  const [data, setData] = useState();
  const floorFilter = useSelector(getRegularFloorFilter);
  const [columns, setColumns] = useState(2); // Default to 2 columns for mobile

  const buildingData = useSelector(getAllApartmentSvgData);
  const navigate = useNavigate();

  const fetchData = () => {
    if (single) {
      const dataToUpdate = buildingData
        ?.map((item) => item.apartmentList)
        .flat();
      setData(dataToUpdate); // Set the flattened data when 'single' is true
    } else {
      dispatch(fetchApartmentsAll()); // Fetch apartments if 'single' is false
    }
  };

  // First useEffect to handle the 'single' prop and fetching data
  useEffect(() => {
    fetchData(); // Trigger fetchData whenever 'single' prop changes
  }, [single, buildingData]); // Also depend on buildingData to account for changes

  // Second useEffect to update 'data' when buildingData changes
  useEffect(() => {
    if (!single) {
      setData(buildingData); // If not 'single', set the data to buildingData
    }
  }, [buildingData, single]);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        marginTop: "50px",
        padding: isSmallDev ? "0px" : "0px 30px",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={isSmallDev ? 1 : 4}
        navigation
        // breakpoints={{
        //   1024: { slidesPerView: 2, slidesPerGroup: 1 },
        //   768: { slidesPerView: 1, slidesPerGroup: 1 },
        // }}
      >
        {data?.map((property) => (
          <SwiperSlide key={property.id}>
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
                      navigate(`/apartment/${property.id}`);
                    }}
                    sx={{
                      color: "#C1AC40",
                      textTransform: "capitalize",
                      fontFamily: "Poppins",
                      zIndex: "2",
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
                    />{" "}
                    Më Shumë...
                  </Button>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "-100px",
                    left: "-120px",
                  }}
                >
                  <Logo height={"290px"} width={"290px"} />
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
});

export default PlanimetriCards;
