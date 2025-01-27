import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/svg/logo";
import LogoPopup from "../../assets/svg/LogoPopup";
import { isAuthorized } from "../../features/auth/AuthSlice";

const ApartmentPopup = ({ anchorEl, setPopupMenu, data, open }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (anchorEl && open) {
        const rect = anchorEl.getBoundingClientRect();
        const componentHeight = 250;
        const windowHeight = window.innerHeight;

        const calculatedTop = rect.top;
        const calculatedLeft = rect.right;

        const isOverflowing = calculatedTop + componentHeight > windowHeight;
        const adjustedTop = isOverflowing
          ? windowHeight - componentHeight
          : calculatedTop;

        setPosition({
          top: adjustedTop,
          left: calculatedLeft,
        });
      }
    };

    updatePosition();

    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, [anchorEl, open]);

  if (!open) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        pointerEvents: "none",
        top: position.top + 2 + "px",
        left: position.left + 2 + "px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "200px",
          height: "250px",
          padding: "20px",
          border: "1px solid #C1AC40",
          borderRadius: "15px",
          backgroundColor: "#1d1d3a",
        }}
      >
        {data.isSold && isAuthorized() && (
          <Box
            sx={{
              position: "absolute",
              zIndex: 0,
              color: "red",
              opacity: 0.3,
              transform: "rotate(45deg)",
              top: "40%",
            }}
          >
            <Typography variant="h2">SOLD</Typography>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Syne",
              fontWeight: "400",
              color: "white",
              fontSize: "25px",
            }}
          >
            {data.name}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Syne",
              fontWeight: "600",
              color: "white",
              fontSize: "14px",
            }}
          >
            Sipërfaqja
          </Typography>
          <Typography
            sx={{
              fontFamily: "Syne",
              fontWeight: "400",
              color: "white",
              fontSize: "14px",
            }}
          >
            {data.square}m2
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Syne",
              fontWeight: "600",
              color: "white",
              fontSize: "14px",
            }}
          >
            Kati
          </Typography>
          <Typography
            sx={{
              fontFamily: "Syne",
              fontWeight: "400",
              color: "white",
              fontSize: "14px",
            }}
          >
            {data.floorNumber}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Syne",
              fontWeight: "600",
              color: "white",
              fontSize: "14px",
            }}
          >
            Dhoma
          </Typography>
          <Typography
            sx={{
              fontFamily: "Syne",
              fontWeight: "400",
              color: "white",
              fontSize: "14px",
            }}
          >
            {data.rooms}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            position: "absolute",
            top: "20%",
          }}
        >
          <LogoPopup width={"150px"} height={"150px"} />
        </Box>
      </Box>
    </div>
  );
};

export default ApartmentPopup;
