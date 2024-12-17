import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllApartmentsByFloorId, getObjectSvgDataAll } from "../../features/apartment/ApartmentAPI";
import { getAllApartmentSvgData, getAllFloorSvgData } from "../../features/apartment/ApartmentSlice";
import { getWishlistCount } from "../../features/wishList/WishlistSlice";
import { getFilterState } from "../../features/filter/FilterSlice";
import { imagePath } from "../../utils/consts";
import ContextMenu from "../common/contextMenu/ContextMenu";
import AdmApartmentModal from "../admin/apartments/AdmApartmentModal";
import Toparrow from "../../assets/svg/Toparrow";
import Bottomarrow from "../../assets/svg/Bottomarrow";
import { useTransition, animated } from "@react-spring/web"; // Import for animation
import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const maxFloor = 6;
const minFloor = -2;
const maxSquare = 720;
const minSquare = 40;

const FloorSvg = ( { floorId}) => {
  const isSmallDev = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const buildingData = useSelector(getAllFloorSvgData);
  const wishListItemCount = useSelector(getWishlistCount);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [sizeRange, setSizeRange] = useState([minSquare, maxSquare]);
  const [floorRange, setFloorRange] = useState([minFloor, maxFloor]);
  const [roomRange, setRoomRange] = useState("all");
  const filterState = useSelector(getFilterState);
  const [contextMenu, setContextMenu] = useState({
    anchorEl: null,
    open: false,
    data: {},
  });
  const [popup, setPopup] = useState({
    x: 0,
    y: 0,
    open: false,
    data: {},
  });
  const [limited, setLimited] = useState(false);

  useEffect(() => {
    if (floorId) {
      dispatch(getAllApartmentsByFloorId(floorId));
    }
  }, [dispatch, floorId]);

  // useEffect(() => {
  //   dispatch(getWishlistDataFromStorage());
  // }, [dispatch]);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + (limited ? 2 : 1)) % buildingData.length
    ); //1
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - (limited ? 2 : 1) + buildingData.length) %
        buildingData.length
    ); //1
  };

  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const getSvgHeight = () => {
    return "100%";
  };

  const handleContextMenu = (e, data) => {
    e.preventDefault();
    setContextMenu({
      anchorEl: e.currentTarget,
      open: true,
      data: data,
    });
  };

  //Diari

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
      config: { tension: 0, friction: 0 }, // Lower tension and higher friction for slower animation
    }
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        // objectFit: "cover",
        position: "relative",
        display: "flex",
      }}
    >
      <Box
        width="20%"
        bgcolor="#1D1D3A"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={0}
        height={"71vh"}
        maxHeight={"71vh"}
        position={"absolute"}
        overflow={'hidden'}
        top={"10%"}
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
      <div
          key={buildingData?.buildingName}
          style={{
            height: getSvgHeight(),
            transition: "opacity 0.1s ease-in-out",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            left: "28%",
          }}
        >
          {/* Buils
          <svg
            width={"100%"}
            height={"100%"}
            preserveAspectRatio="none"
            style={{
              transform: isSmallDev && "scale(1.9) translateX(20px)",
              borderRadius: "5px",
            }}
            viewBox={building.viewBoxStyle}
          >
            <image
              xlinkHref={`${imagePath}${building.buildingNr}-${building.buildingSide}.jpg`}
              alt=""
              width={building.imgWidth}
              height={building.imgHeight}
              transform={building.imgTransform}
            />
            {building?.apartmentList?.map((apartment) => {
              if (apartment.pointsType === "path") {
                return (
                  <path
                    d={apartment.path}
                    onContextMenu={(e) => handleContextMenu(e, apartment)}
                    className={
                      parseInt(apartment.floorNumber) >= floorRange[0] &&
                      parseInt(apartment.floorNumber) <= floorRange[1] &&
                      (roomRange.includes(apartment.rooms) ||
                        roomRange.includes("all")) &&
                      parseInt(apartment.square) >= sizeRange[0] &&
                      parseInt(apartment.square) <= sizeRange[1]
                        ? apartment.isSold
                          ? "st1"
                          : filterState
                          ? "st2"
                          : "st0"
                        : "st3"
                    }
                    id={apartment.apartmentId}
                    onMouseEnter={(e) => {
                      setPopup({
                        data: apartment,
                        open: true,
                        x: e.clientX + 10,
                        y: e.clientY + 10,
                      });
                    }}
                    onMouseLeave={() => {
                      setPopup({
                        x: 0,
                        y: 0,
                        open: false,
                        data: {},
                      });
                    }}
                    onClick={() => {
                      if (
                        parseInt(apartment.floorNumber) >= floorRange[0] &&
                        parseInt(apartment.floorNumber) <= floorRange[1] &&
                        (roomRange.includes(apartment.rooms) ||
                          roomRange.includes("all")) &&
                        parseInt(apartment.square) >= sizeRange[0] &&
                        parseInt(apartment.square) <= sizeRange[1] &&
                        !apartment.isSold
                      ) {
                        navigate(`/apartment/${apartment.id}`);
                      }
                    }}
                  />
                );
              }
              if (apartment.pointsType === "polygon") {
                return (
                  <polygon
                    key={apartment.id}
                    points={apartment.path}
                    className={"st0"}
                    id={apartment.apartmentId}
                    onClick={() => navigate(`/apartment/${apartment.id}`)}
                  />
                );
              }
            })}
          </svg> */}
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 1920 1080"
            xmlSpace="preserve"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsSvg="http://www.w3.org/2000/svg"
          >
            <image
              width="1920"
              height="1080"
              xlinkHref={`${imagePath}a1-f1.jpg`}
            ></image>
            {/* <path className="ft0" d="M 11,58 H 648 V 526 H 11 Z" />
            <path className="ft0" d="m 648,58 h 643 V 526 H 648 Z" />
            <path className="ft0" d="m 1291,58 h 613 v 468 h -613 z" />
            <path
              className="ft0"
              d="M 1112,999 V 775 h 105 V 625 h 155 v -99 h 532 v 473 z"
            />
            <path
              className="ft0"
              d="M 11,526 V 999 H 917 V 823 H 814 V 624 H 554 v -98 z"
            /> */}
            {buildingData?.apartmentDTO?.map((apartment) => {
              return <path className={apartment.isSold ? 'st1' : "ft0"} d={apartment.path}/>
            })}
          </svg>
        </div>
      <ContextMenu menu={contextMenu} setMenu={setContextMenu} />
      <AdmApartmentModal />
    </Box>
  );
};

export default FloorSvg;
