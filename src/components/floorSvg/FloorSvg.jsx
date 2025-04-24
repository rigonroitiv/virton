import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllApartmentsByFloorId,
  getObjectSvgDataAll,
  getFloorByBuilding,
} from "../../features/apartment/ApartmentAPI";
import {
  getAllApartmentSvgData,
  getAllFloorSvgData,
  getFloorApartmentsSvgData,
} from "../../features/apartment/ApartmentSlice";
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
import { isAuthorized } from "../../features/auth/AuthSlice";
import Rightarrow from "../../assets/svg/Rightarrow";
import Leftarrow from "../../assets/svg/Leftarrow";

const maxFloor = 14;
const minFloor = 1;
const maxSquare = 720;
const minSquare = 40;

const FloorSvg = ({ floorId }) => {
  const isSmallDev = useMediaQuery("(max-width:768px)");
  const { projectid, id, name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const floorData = useSelector(getFloorApartmentsSvgData);
  const wishListItemCount = useSelector(getWishlistCount);
  
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

  // useEffect(() => {
  //   if (floorId) {
  //     dispatch(getAllApartmentsByFloorId(floorId));
  //   }
  // }, [dispatch, floorId]);

  useEffect(() => {
    dispatch(getFloorByBuilding(id));
  }, [dispatch, id]);

  // useEffect(() => {
  //   dispatch(getWishlistDataFromStorage());
  // }, [dispatch]);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + (limited ? 2 : 1)) % floorData.length
    ); //1
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - (limited ? 2 : 1) + floorData.length) %
        floorData.length
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

  const totalFloors = 9; // Total number of floors
  const floors = Array.from({ length: totalFloors }, (_, i) => totalFloors - i); // Floors in descending order
  const [activeFloor, setActiveFloor] = useState(1); // Default active floor
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
        flexDirection: "column",
      }}
    >
      <Box
        width="100%"
        bgcolor="#1D1D3A"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        overflow={"hidden"}
        height={"40vh"}
        gap={"10px"}
      >
        <Typography sx={{ color: "white", fontSize: "25px" }}>
          Objekti 4
        </Typography>
        {/* Scroll Up Button */}
        <Button
          onClick={scrollDown}
          // disabled={activeFloor === floors[0]} // Disable if no higher floors
          sx={{
            width: "50px",
            minWidth: "0px",
            height: "50px",
            border: "1px solid #c1ac40",
            backgroundColor: "#C1AC40",
            color: "#1D1D3A",
            cursor: "pointer",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#1D1D3A",
              color: "#C1AC40",
            },
          }}
        >
          <Leftarrow />
        </Button>

        {/* Floors List with Smooth Transition */}
        <Box sx={{ display: "flex", gap: "4px" }}>
          {floors.reverse().slice(startIndex, startIndex + visibleRange).map((floor) => {
            return (<button
            onClick={() => {
              setActiveFloor(floor);
              updateVisibleFloors(floor);
            }}
              style={{
                height: "55px",
                width: "55px",
                borderRadius: "55px",
                backgroundColor: activeFloor !== floor ? '#1d1d3a' : "#c1ac40",
                color: "white",
                border: activeFloor !== floor ? '1px solid #c1ac40' : "1px solid #1d1d3a",
              }}
            >
              {floor}
            </button>)
          })}
        </Box>
        {/* Scroll Down Button */}
        <Button
          onClick={scrollUp}
          // disabled={activeFloor === floors[floors.length - 1]} // Disable if no lower floors
          sx={{
            width: "50px",
            minWidth: "0px",
            height: "50px",
            border: "1px solid #c1ac40",
            backgroundColor: "#C1AC40",
            color: "#1D1D3A",
            cursor: "pointer",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#1D1D3A",
              color: "#C1AC40",
            },
          }}
        >
          <Rightarrow />
        </Button>
      </Box>
      <div
        key={floorData?.buildingName}
        style={{
          height: getSvgHeight(),
          transition: "opacity 0.1s ease-in-out",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          // position: "absolute",
          // left: "28%",
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
                  width={floorData && floorData[activeFloor]?.imageWidth}
                  height={floorData && floorData[activeFloor]?.imageHeight}
                  transform={floorData && floorData[activeFloor]?.imageTransform}
                  xlinkHref={
                    floorData &&
                    `${imagePath}floor/f-${floorData[activeFloor]?.buildingId?.toLowerCase()}-${name}.png`
                  }
                  
                ></image>
                {floorData?.map((floor) => {
                  if (parseInt(floor.floorNumber) === activeFloor && floor.name === name) {
                    return floor.apartmentList?.map((apartment) => {
                      console.log(floor)
                      return (
                        <path
                        id={floor.id}
                          onClick={() => {
                            if (apartment.isSold) return;
                            navigate(`/apartment/${apartment.id}`);
                          }}
                          onContextMenu={(e) => handleContextMenu(e, apartment)}
                          className={
                            apartment.isSold
                              ? 'st1'
                              : "ft0"
                          }
                          d={apartment.path}
                          // onMouseEnter={() => setHoveredId(apartment.id)}
                          // onMouseMove={handleMouseMove}
                          // onMouseLeave={() => setHoveredId(null)}
                        />
                      );
                    });
                  } else return <h1>{floor.floorNumber}</h1>;
                })}
        </svg>
      </div>
      <ContextMenu menu={contextMenu} setMenu={setContextMenu} />
      <AdmApartmentModal />
    </Box>
  );
};

export default FloorSvg;
