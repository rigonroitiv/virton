import { Add } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setNewsModalStatus } from "../../../features/news/NewsSlice";

const AdmSalesHeader = () => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1 style={{ color: "#c1ac40" }}>Kërko</h1>
      <TextField
        id="outlined-basic"
        label="Kërko shitjën"
        variant="outlined"
        size="small"
      />
    </Box>
  );
};
export default AdmSalesHeader;
