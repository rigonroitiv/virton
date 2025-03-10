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
    axios.get(`${BASE_URL}/api/v1/parking?id=parking`).then(
      res => setParkingData(res.data)
    ).catch(err => console.log(err))
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
        pt: 13
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
              width: "100%",
              position: isMidDev ? "" : "absolute",
              display: "flex",
            }}
          >
            <svg
              width={"100%"}
              height={"100%"}
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
                            : apartment.isRent ? 'parking-rent' : apartment.isReserved ? 'parking-reserved' : "ft0"
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
      <Box
        onClick={handlePrevious}
        sx={{
          position: "absolute",
          display: isSmallDev ? "none" : "flex",
          top: "50%",
          left: 5,
          cursor: "pointer",
          width: "45px",
          height: "45px",
          backgroundColor: "white",
          justifyContent: "center",
          borderRadius: "50px",
        }}
      >
        <svg
          id="fi_2985161"
          enable-background="new 0 0 128 128"
          height="45"
          viewBox="0 0 128 128"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Left_Arrow_4_"
            d="m84 108c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656l40-40c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-37.172 37.172 37.172 37.172c1.563 1.563 1.563 4.094 0 5.656-.781.781-1.805 1.172-2.828 1.172z"
          ></path>
        </svg>
      </Box>

      <Box
        onClick={handlePrevious}
        sx={{
          position: "absolute",
          display: isSmallDev ? "none" : "flex",
          top: "50%",
          right: 5,
          cursor: "pointer",
          width: "45px",
          height: "45px",
          backgroundColor: "white",
          justifyContent: "center",
          borderRadius: "50px",
        }}
      >
        <svg
          id="fi_2985179"
          enable-background="new 0 0 128 128"
          height="45"
          viewBox="0 0 128 128"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Right_Arrow_4_"
            d="m44 108c-1.023 0-2.047-.391-2.828-1.172-1.563-1.563-1.563-4.094 0-5.656l37.172-37.172-37.172-37.172c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l40 40c1.563 1.563 1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"
          ></path>
        </svg>
      </Box>
      <Box
        sx={{
          display: isSmallDev ? "flex" : "none",
          flexDirection: "row",
          justifyContent: "end",
          padding: "10px 0px",
          gap: "15px",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#C1AC40",
            borderRadius: "50px",
            minWidth: "10px",
            width: "50px",
            height: "50px",
          }}
          onClick={handlePrevious}
        >
          <svg
            id="fi_2985161"
            enable-background="new 0 0 128 128"
            height="45"
            viewBox="0 0 128 128"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Left_Arrow_4_"
              d="m84 108c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656l40-40c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-37.172 37.172 37.172 37.172c1.563 1.563 1.563 4.094 0 5.656-.781.781-1.805 1.172-2.828 1.172z"
            ></path>
          </svg>
        </Button>
        <Button
          sx={{
            backgroundColor: "#C1AC40",
            borderRadius: "50px",
            minWidth: "10px",
            width: "50px",
            height: "50px",
          }}
          onClick={handlePrevious}
        >
          <svg
            id="fi_2985179"
            enable-background="new 0 0 128 128"
            height="45"
            viewBox="0 0 128 128"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Right_Arrow_4_"
              d="m44 108c-1.023 0-2.047-.391-2.828-1.172-1.563-1.563-1.563-4.094 0-5.656l37.172-37.172-37.172-37.172c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l40 40c1.563 1.563 1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"
            ></path>
          </svg>
        </Button>
      </Box>
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