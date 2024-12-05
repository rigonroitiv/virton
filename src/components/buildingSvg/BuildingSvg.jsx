import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getObjectSvgDataAll } from "../../features/apartment/ApartmentAPI";
import { getAllApartmentSvgData } from "../../features/apartment/ApartmentSlice";
import { getWishlistCount } from "../../features/wishList/WishlistSlice";
import { getFilterState } from "../../features/filter/FilterSlice";
import { imagePath } from "../../utils/consts";
import ContextMenu from "../common/contextMenu/ContextMenu";
import AdmApartmentModal from "../admin/apartments/AdmApartmentModal";

const maxFloor = 6;
const minFloor = -2;
const maxSquare = 720;
const minSquare = 40;

const BuildingSvg = () => {
  const isSmallDev = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const { id } = useParams();
  const buildingData = useSelector(getAllApartmentSvgData);
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
    if (id) {
      dispatch(getObjectSvgDataAll(id));
    }
  }, [dispatch, id]);

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

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        // objectFit: "cover",
        position: "relative",
      }}
    >
      {buildingData?.map((building, index) => (
        <div
          key={building.buildingName}
          style={{
            height: index === currentIndex ? getSvgHeight() : "0px",
            opacity: currentIndex === index ? 1 : 0,
            transition: "opacity 0.1s ease-in-out",
            width: "100%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
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
   xmlnsSvg="http://www.w3.org/2000/svg">
<image
   width="1920"
   height="1080"
   xlinkHref={`${imagePath}a1-f1.jpg`}>
</image>
<path
className="ft0"
   d="M 11,58 H 648 V 526 H 11 Z" />
<path
className="ft0"
   d="m 648,58 h 643 V 526 H 648 Z" />
<path
className="ft0"
   d="m 1291,58 h 613 v 468 h -613 z" />
<path
className="ft0"
   d="M 1112,999 V 775 h 105 V 625 h 155 v -99 h 532 v 473 z" />
<path
className="ft0"
   d="M 11,526 V 999 H 917 V 823 H 814 V 624 H 554 v -98 z" />
</svg>

        </div>
      ))}
      <ContextMenu menu={contextMenu} setMenu={setContextMenu}/>
      <AdmApartmentModal />
    </Box>
  );
};

export default BuildingSvg;
