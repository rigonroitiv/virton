import React, { useState } from "react";
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import axiosInstance from "../../auth/axiosInstance";
import { BASE_URL, EURO_SYMBOL } from "../../../utils/consts";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -45%)",
  width: 900,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 40,
  p: 4,
};

const AdmPaymentModal = ({ open, onClose, sale }) => {
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    // Allow only numeric values
    const numericValue = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setValue(numericValue);
  };

  const addNewKesti = () => {
    axiosInstance
      .put(`${BASE_URL}/api/v1/sales?id=${sale.id}&paid=${value}`)
      .then((res) => {
        toast.success("U rregullua me sukses");
      })
      .catch((error) => {
        toast.error("Diqka shkoi gabim!");
      });
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        ":focus-visible": {
          outline: "none",
        },
      }}
    >
      <Box sx={style}>
        <Box display={"flex"} gap={2} flexDirection={"column"}>
          <Typography sx={{ fontSize: "25px" }}>
            Totali: {sale?.total}
            {EURO_SYMBOL}{" "}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {" "}
            <Typography sx={{ fontSize: "25px" }}>
              Shuma e paguar: {sale?.paid}
              {EURO_SYMBOL}
            </Typography>
            <Typography sx={{ fontSize: "25px" }}>
              Shuma e mbetur: {sale?.remainingAmount}
              {EURO_SYMBOL}
            </Typography>
          </Box>
          <TextField
            value={value}
            size="medium"
            label="Kesti radhes"
            type="number"
            onChange={(e) => {
              let newValue = e.target.value;

              if (/^[1-9]\d*$/.test(newValue) || newValue === "") {
                setValue(newValue);
              }
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              width: "50%",
            }}
          >
            <Button
              variant="contained"
              onClick={addNewKesti}
              sx={{
                width: "50%",
                backgroundColor: "#1d1d3a",
                ":hover": {
                  backgroundColor: "#c1ac40",
                },
              }}
            >
              Ruaj
            </Button>
            <Button
              onClick={onClose}
              variant="contained"
              sx={{
                width: "50%",

                backgroundColor: "#1d1d3a",
                ":hover": {
                  backgroundColor: "#c1ac40",
                },
              }}
            >
              Anulo
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AdmPaymentModal;
