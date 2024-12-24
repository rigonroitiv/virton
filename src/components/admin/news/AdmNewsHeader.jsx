import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setNewsModalStatus } from "../../../features/news/NewsSlice";

const AdmNewsHeader = () => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <h1 style={{ color: "#c1ac40" }}>Lajmet</h1>
      <Button
        onClick={() => dispatch(setNewsModalStatus(true))}
        sx={{
          bgcolor: "#1d1d3a",
          ":hover": { bgcolor: "#c1ac40" },
        }}
        startIcon={<Add />}
        variant="contained"
      >
        Lajm i ri
      </Button>
    </Box>
  );
};
export default AdmNewsHeader;
