import { Box, Popover, Typography } from "@mui/material";
import React from "react";

const ApartmentPopup = ({ anchorEl, setPopupMenu, data }) => {
  const open = new Boolean(anchorEl);
  return (
    <Popover open={open} anchorEl={anchorEl} sx={{ pointerEvents: "none" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "200px",
          height: "250px",
          padding: "20px",
          border: "3px solid #C1AC40",
          backgroundColor: "#1d1d3a",
        }}
      >
        <Typography
          sx={{ fontFamily: "poppins", fontWeight: "400", color: "white" }}
        >
          {data.name}{" "}
        </Typography>
        <Typography
          sx={{ fontFamily: "poppins", fontWeight: "400", color: "white" }}
        >
          {data.square}
        </Typography>
        <Typography
          sx={{ fontFamily: "poppins", fontWeight: "400", color: "white" }}
        >
          {data.floorNumber}
        </Typography>
        <Typography
          sx={{ fontFamily: "poppins", fontWeight: "400", color: "white" }}
        >
          {data.rooms}
        </Typography>
      </Box>
    </Popover>
  );
};

export default ApartmentPopup;
