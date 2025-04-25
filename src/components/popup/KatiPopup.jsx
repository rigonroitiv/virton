import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/svg/logo";
import LogoPopup from "../../assets/svg/LogoPopup";
import { isAuthorized } from "../../features/auth/AuthSlice";

const KatiPopup = ({ anchorEl, setPopupMenu, data, open }) => {
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
          height: "70px",
          padding: "20px",
          border: "1px solid #C1AC40",
          borderRadius: "5px",
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
            height: "100%",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              color: "white",
              fontSize: "22px",
            }}
          >
            Kati
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              color: "white",
              fontSize: "35px",
            }}
          >
            {data.floorNumber}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            position: "absolute",
            top: "10%",
          }}
        >
          <LogoPopup width={"170px"} height={"100px"} />
        </Box>
      </Box>
    </div>
  );
};

export default KatiPopup;
