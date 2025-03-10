import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getObjectSvgDataAll } from "../../features/apartment/ApartmentAPI";
import { getAllApartmentSvgData } from "../../features/apartment/ApartmentSlice";
import { getWishlistCount } from "../../features/wishList/WishlistSlice";
import {
  getFilterState,
  getRegularFloorFilter,
  getRegularRoomFilter,
  getRegularSquareFilter,
} from "../../features/filter/FilterSlice";
import { BASE_URL, imagePath } from "../../utils/consts";
import ContextMenu from "../common/contextMenu/ContextMenu";
import AdmApartmentModal from "../admin/apartments/AdmApartmentModal";
import ApartmentPopup from "../popup/ApartmentPopup";
import { isAuthorized } from "../../features/auth/AuthSlice";
import ApartmentsFilter from "../filter/ApartmentsFilter";
import SalesModal from "../sales/SalesModal";
import axios from "axios";
import AdmParkingModal from "../admin/parking/AdmParkingModal";
import ContextMenuParking from "../admin/contextMenu/ContextMenuParking";

const ParkingSvg = () => {
  const isSmallDev = useMediaQuery("(max-width:768px)");
  const isMidDev = useMediaQuery("(max-width:1024px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [parkingData, setParkingData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [contextMenu, setContextMenu] = useState({
    anchorEl: null,
    open: false,
    data: {},
  });
  const [popup, setPopup] = useState({
    anchorEl: null,
    data: {},
    open: false,
  });
  const [limited, setLimited] = useState(false);

  // useEffect(() => {
  //   if (id) {
  //     dispatch(getObjectSvgDataAll(id));
  //   }
  // }, [dispatch, id]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/parking?id=parking`)
      .then((res) => setParkingData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   dispatch(getWishlistDataFromStorage());
  // }, [dispatch]);

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

  const getSvgHeight = () => {
    return isSmallDev ? "auto" : isMidDev ? "auto" : "auto";
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
        position: "relative",
        pt: 13,
        overflow: isSmallDev ? "auto" : "",
      }}
    >
      {parkingData?.map((building, index) => {
        return (
          <div
            key={building.buildingName}
            style={{
              height: index === currentIndex ? getSvgHeight() : "0px",
              opacity: currentIndex === index ? 1 : 0,
              transition: "opacity 0.1s ease-in-out",
              width: isSmallDev ? "200%" : "100%",
              position: isMidDev ? "" : "absolute",
              display: "flex",
              overflow: "hidden",
            }}
          >
            <svg
              width={isSmallDev ? "200%" : "100%"}
              height={"100%"}
              objectFit="cover"
              preserveAspectRatio="none"
              style={{
                borderRadius: "5px",
              }}
              viewBox={building.viewBoxStyle}
            >
              <image
                xlinkHref={`${imagePath}${building.buildingNr}-${building.buildingSide}.png`}
                alt=""
                width={building.imgWidth}
                height={building.imgHeight}
                transform={building.imgTransform}
                objectFit="cover"
              />
              {building?.parkingList?.map((apartment) => {
                if (apartment.pointsType === "path") {
                  return (
                    <path
                      d={apartment.path}
                      onContextMenu={(e) => handleContextMenu(e, apartment)}
                      className={
                        apartment.isSold
                          ? isAuthorized()
                            ? "st1"
                            : "ft0"
                          : apartment.isRent
                          ? "parking-rent"
                          : apartment.isReserved
                          ? "parking-reserved"
                          : "ft0"
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
                        navigate(`/apartment/${apartment.id}`);
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
        );
      })}

      <ContextMenuParking menu={contextMenu} setMenu={setContextMenu} />
      <AdmParkingModal />
      {popup.anchorEl && (
        <ApartmentPopup
          anchorEl={popup.anchorEl}
          data={popup.data}
          open={popup.open}
        />
      )}
    </Box>
  );
};

export default ParkingSvg;
