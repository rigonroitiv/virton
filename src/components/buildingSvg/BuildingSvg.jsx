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
import KatiPopup from "../popup/KatiPopup";

const maxFloor = 14;
const minFloor = 1;
const maxSquare = 720;
const minSquare = 40;

const BuildingSvg = ({ setFloorId, setFloorPlan }) => {
  const isSmallDev = useMediaQuery("(max-width:768px)");
  const isMidDev = useMediaQuery("(max-width:1024px)");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const { projectid, id } = useParams();
  const buildingData = useSelector(getAllApartmentSvgData);
  const [dataForSelection, setDataForSelection] = useState(null);
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
    anchorEl: null,
    data: {},
    open: true,
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
    if (buildingData) {
      const toUpdate = buildingData.filter((item) => item.hasFloor);
      setDataForSelection(toUpdate);
    }
  }, [buildingData]);
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
    return isSmallDev ? "100%" : "auto";
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
        height: isSmallDev ? "60vh" : "100%",
        position: "relative",
        overflow: "auto",
      }}
    >
      {dataForSelection?.map((building, index) => {
        return (
          <div
            key={building.buildingName}
            style={{
              height: index === currentIndex ? getSvgHeight() : "0px",
              opacity: currentIndex === index ? 1 : 0,
              transition: "opacity 0.1s ease-in-out",
              width: isSmallDev ? "250%" : "100%",
              position: isMidDev ? "" : "absolute",
              display: "flex",
              justifyContent: "center",
              overflow: isSmallDev ? "auto" : "",
              backgroundColor: "#fff",
            }}
          >
            <svg
              width={"100%"}
              height={"100%"}
              preserveAspectRatio="none"
              style={{
                // transform: isSmallDev && "scale(1.9) translateX(20px)",
                borderRadius: "5px",
                objectFit: "cover ",
              }}
              viewBox={building.viewBoxStyle}
            >
              <image
                xlinkHref={`${imagePath}${building.buildingNr}-${building.buildingSide}.jpg`}
                alt=""
                width={building.imgWidth}
                height={building.imgHeight}
                transform={building.imgTransform}
                style={{ objectFit: "cover" }}
              />
              {building?.floorList?.map((apartment) => {
                if (apartment.pointsType === "path") {
                  return (
                    <path
                      d={apartment.path}
                      onContextMenu={(e) => handleContextMenu(e, apartment)}
                      className={"st0"}
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
                        // if (
                        //   parseInt(apartment.floorNumber) >= floorRange[0] &&
                        //   parseInt(apartment.floorNumber) <= floorRange[1] &&
                        //   (roomRange.includes(apartment.rooms) ||
                        //     roomRange.includes("all")) &&
                        //   parseInt(apartment.square) >= sizeRange[0] &&
                        //   parseInt(apartment.square) <= sizeRange[1] &&
                        //   !apartment.isSold
                        // ) {
                        //   setFloorId(apartment.floorNumber);
                        //   console.log(apartment.floorNumber);
                        //   setFloorPlan(true)
                        // }
                        // setFloorId(apartment.id);
                        // console.log(apartment.floorNumber);
                        // setFloorPlan(true);
                        navigate(
                          `/${projectid}/building/${id}/floor/${apartment.floorName}`
                        );
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
                      onClick={() => {
                        setFloorId(apartment.id);
                        setFloorPlan(true);
                        console.log(apartment.floorNumber);
                      }}
                    />
                  );
                }
              })}
            </svg>
          </div>
        );
      })}
      <ContextMenu menu={contextMenu} setMenu={setContextMenu} />
      <AdmApartmentModal />
      {popup.anchorEl && (
        <KatiPopup
          anchorEl={popup.anchorEl}
          data={popup.data}
          open={popup.open}
        />
      )}
    </Box>
  );
};

export default BuildingSvg;
