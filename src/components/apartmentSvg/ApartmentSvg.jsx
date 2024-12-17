import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getObjectSvgDataAll } from "../../features/apartment/ApartmentAPI";
import { getAllApartmentSvgData } from "../../features/apartment/ApartmentSlice";
import { getWishlistCount } from "../../features/wishList/WishlistSlice";
import { getFilterState } from "../../features/filter/FilterSlice";
import { imagePath } from "../../utils/consts";
import ContextMenu from "../common/contextMenu/ContextMenu";
import AdmApartmentModal from "../admin/apartments/AdmApartmentModal";
import ApartmentPopup from "../popup/ApartmentPopup";

const ApartmentSvg = ( { sizeRange, floorRange}) => {
  const isSmallDev = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const { id } = useParams();
  const buildingData = useSelector(getAllApartmentSvgData);
  const [dataForSelection, setDataForSelection] = useState(null)
  const wishListItemCount = useSelector(getWishlistCount);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  // const [sizeRange, setSizeRange] = useState([minSquare, maxSquare]);
  // const [floorRange, setFloorRange] = useState([minFloor, maxFloor]);
  const [roomRange, setRoomRange] = useState("all");
  const filterState = useSelector(getFilterState);
  const [contextMenu, setContextMenu] = useState({
    anchorEl: null,
    open: false,
    data: {},
  });
  const [popup, setPopup] = useState({
    anchorEl: null,
    data: {},
    open: false
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

  useEffect(() => {
    if(buildingData){
      const toUpdate = buildingData.filter((item) => !item.hasFloor)
      setDataForSelection(toUpdate)
    } 
  }, [buildingData])
  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + (limited ? 2 : 1)) % dataForSelection.length
    ); //1
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - (limited ? 2 : 1) + dataForSelection.length) %
        dataForSelection.length
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
      {dataForSelection?.map((building, index) => {
        if(!building.hasFloor) {
          return (
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
                              ? "st0"
                              : "ft0"
                            : "st3"
                        }
                        id={apartment.apartmentId}
                        onMouseEnter={(e) => {
                          e.preventDefault();
                          setPopup({
                            data: apartment,
                            anchorEl: e.currentTarget,
                            open: true,
                          });
                        }}
                        onMouseLeave={(e) => {
                          e.preventDefault();
                          setPopup({
                            anchorEl: null,
                            data: {},
                            open: false,
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
              </svg>
            </div>
          )
        }
      })}
      <Box
        onClick={handlePrevious}
        sx={{
          position: "absolute",
          display: "flex",
          top: "50%",
          left: 5,
          cursor: "pointer",
          width: "45px",
          height: "45px",
          backgroundColor: "white",
          justifyContent: "center",
          borderRadius: "50px",
          "&:hover": {
            backgroundColor: "#1D1D3A",
            transform: "scale(1.1)",
          },
        }}
      >
        <img
          style={{ width: "18px", objectFit: "contain" }}
          src="/assets/images/leftvirton.png"
          alt=""
        />
      </Box>

      <Box
        onClick={handlePrevious}
        sx={{
          position: "absolute",
          display: "flex",
          top: "50%",
          right: 5,
          cursor: "pointer",
          width: "45px",
          height: "45px",
          backgroundColor: "white",
          justifyContent: "center",
          borderRadius: "50px",
          "&:hover": {
            backgroundColor: "#1D1D3A",
            transform: "scale(1.1)",
          },
        }}
      >
        <img
          style={{ width: "18px", objectFit: "contain" }}
          src="/assets/images/rightvirton.png"
          alt=""
        />
      </Box>
      <ContextMenu menu={contextMenu} setMenu={setContextMenu}/>
      <AdmApartmentModal />
      {popup.anchorEl && <ApartmentPopup anchorEl={popup.anchorEl} data={popup.data} open={popup.open} />}
    </Box>
  );
};

export default ApartmentSvg;
