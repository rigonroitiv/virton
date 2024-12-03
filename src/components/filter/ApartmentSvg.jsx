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

const ApartmentSvg = () => {
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
  const [roomRange, setRoomRange] = useState('all');
  const filterState = useSelector(getFilterState);
  const [contextMenu, setContextMenu] = useState({
    anchorEl: null,
    open: false,
    data: {}
  });
  const [popup, setPopup] = useState({
    x: 0,
    y: 0,
    open: false,
    data: {}
  })
  const [limited, setLimited] = useState(false)

  useEffect(() => {
    if (id) {
      dispatch(getObjectSvgDataAll(id));
    }
  }, [dispatch, id])

  // useEffect(() => {
  //   dispatch(getWishlistDataFromStorage());
  // }, [dispatch]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + (limited ? 2 : 1)) % buildingData.length); //1
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - (limited ? 2 : 1) + buildingData.length) % buildingData.length); //1
  };

  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const getSvgHeight = () => {
    return '100%';
  };

  const handleContextMenu = (e, data) => {
    e.preventDefault();
    setContextMenu({
      anchorEl: e.currentTarget,
      open: true,
      data: data
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "relative",
      }}
    >
      {
            buildingData?.map((building, index) =>
              <div
                key={building.buildingName}
                style={{
                  height: index === currentIndex ? getSvgHeight() : "0px",
                  opacity: currentIndex === index ? 1 : 0,
                  transition: "opacity 0.1s ease-in-out",
                  width: '100%',
                  position: 'absolute',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width={"100%"}
                  height={"100%"}
                  // preserveAspectRatio="xMidYMid slice"
                  style={{ transform: isSmallDev && 'scale(1.9) translateX(20px)' }}
                  viewBox={building.viewBoxStyle}
                >
                  <image
                    xlinkHref={`${imagePath}${building.buildingNr}-${building.buildingSide}.jpg`}
                    alt=""
                    width={building.imgWidth} height={building.imgHeight}
                    transform={building.imgTransform}
                  />
                  {building?.apartmentList?.map((apartment) => {
                    if (apartment.pointsType === 'path') {
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
                              parseInt(apartment.floorNumber) >=
                                floorRange[0] &&
                              parseInt(apartment.floorNumber) <=
                                floorRange[1] &&
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
                    if (apartment.pointsType === 'polygon') {
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
                  })
                  }
                </svg>
              </div>
            )
          }
      <Box onClick={handleNext} sx={{ position: "absolute", display: "flex", top: "50%", left: 5, cursor: 'pointer' }}>
        <svg
          width={isSmallDev ? "25px" : "40px"}
          height="40"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="27" cy="27" r="27" fill="#1D1D3A" />
          <path
            d="M31.9597 38.815C31.7349 38.8162 31.512 38.7732 31.3038 38.6881C31.0957 38.6031 30.9064 38.4779 30.7468 38.3195L20.4968 28.0695C20.1786 27.7495 20 27.3165 20 26.8652C20 26.4138 20.1786 25.9809 20.4968 25.6608L30.7468 15.4108C31.0736 15.1309 31.494 14.9847 31.9239 15.0013C32.3539 15.0179 32.7617 15.1961 33.0659 15.5004C33.3702 15.8046 33.5484 16.2125 33.565 16.6424C33.5816 17.0723 33.4354 17.4927 33.1555 17.8195L24.1184 26.8566L33.1555 35.8937C33.3954 36.1316 33.5594 36.4353 33.6266 36.7664C33.6939 37.0975 33.6615 37.4411 33.5335 37.7538C33.4055 38.0665 33.1877 38.3342 32.9075 38.5231C32.6274 38.712 32.2975 38.8135 31.9597 38.815Z"
            fill="#C1AC40"
          />
        </svg>
      </Box>

      <Box onClick={handlePrevious} sx={{ position: "absolute", display: "flex", top: "50%", right: 5, cursor: 'pointer' }}>
        <svg
          width={isSmallDev ? "25px" : "40px"}
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#1D1D3A" />
          <path
            d="M16.075 11.1111C16.2415 11.1101 16.4066 11.1421 16.5608 11.205C16.715 11.268 16.8552 11.3608 16.9735 11.4781L24.566 19.0707C24.8017 19.3078 24.934 19.6285 24.934 19.9628C24.934 20.2971 24.8017 20.6178 24.566 20.8549L16.9735 28.4475C16.7314 28.6548 16.42 28.7632 16.1015 28.7509C15.783 28.7386 15.4809 28.6065 15.2555 28.3812C15.0302 28.1558 14.8982 27.8537 14.8859 27.5352C14.8736 27.2167 14.9819 26.9053 15.1892 26.6633L21.8833 19.9691L15.1892 13.275C15.0115 13.0987 14.8901 12.8738 14.8402 12.6285C14.7904 12.3833 14.8144 12.1287 14.9092 11.8971C15.004 11.6655 15.1654 11.4672 15.3729 11.3273C15.5804 11.1874 15.8247 11.1121 16.075 11.1111Z"
            fill="#C1AC40"
          />
        </svg>
      </Box>
      <ContextMenu menu={contextMenu} setMenu={setContextMenu}/>
      <AdmApartmentModal />
    </Box>
  );
};

export default ApartmentSvg;
