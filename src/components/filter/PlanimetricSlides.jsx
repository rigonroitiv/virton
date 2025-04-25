import React, { forwardRef, useEffect, useRef, useState } from "react";
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
import {
  fetchApartmentsAll,
  getObjectSvgDataAll,
} from "../../features/apartment/ApartmentAPI";

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

const PlanimetricSlides = ({ building, type }) => {
  const isSmallDev = useMediaQuery("(max-width:768px)");
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [columns, setColumns] = useState(2); // Default to 2 columns for mobile
  const swiperRef = useRef(null);

  const buildingData = useSelector(getAllApartmentSvgData);
  const navigate = useNavigate();

  // First useEffect to handle the 'single' prop and fetching data
  useEffect(() => {
    if (building) dispatch(getObjectSvgDataAll(building));
  }, [dispatch, building]); // Also depend on buildingData to account for changes

  useEffect(() => {
    if (buildingData) {
      const a = buildingData?.filter((it) => it.buildingName !== '').map((it) => {
        return it.apartmentList
          ?.filter((apartment) => apartment.rooms === type)
          .map((apartment) => {
            return {
              square: apartment.square,
              building: apartment.building,
              buildingName: apartment.buildingName,
              buildingId: apartment.buildingId,
              rooms: apartment.rooms,
              floorNumber: apartment.floorNumber,
              imageUrl: apartment.imageUrl,
              image3dUrl: apartment.image3dUrl,
              id: apartment.id,
            };
          });
      });

      setData(a.flat(2));
    }
  }, [buildingData]);
  console.log(buildingData?.filter((it) => it.buildingName !== ''))

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = ".custom-prev";
      swiperRef.current.swiper.params.navigation.nextEl = ".custom-next";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "white",
        marginTop: "50px",
        padding: isSmallDev ? "0px" : "0px 30px",
      }}
    >
      <div className="swiper-button-prev custom-prev"></div>
      <div className="swiper-button-next custom-next"></div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={isSmallDev ? 1 : 4}
        onSwiper={(swiper) => (swiperRef.current = { swiper })}

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
                image={`${mainUrl}${planmetricImageUrl}${property?.image3dUrl}`}
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
                      navigate(`/${building}/apartment/${property.id}`);
                    }}
                    sx={{
                      color: "#C1AC40",
                      textTransform: "capitalize",
                      fontFamily: "Poppins",
                      zIndex: "2",
                      border: "1px solid white",
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
};

export default PlanimetricSlides;
