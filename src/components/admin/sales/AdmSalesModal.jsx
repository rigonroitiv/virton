import { Box, Button, Grid, Modal, TextField } from "@mui/material";
import React from "react";

const AdmSalesModal = () => {
  return (
    <Modal
      open={apartmentEditState}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        ":focus-visible": {
          outline: "none",
        },
      }}
    >
      <Box sx={style}>
        <Box display={"flex"} gap={1} p={4}>
          <Box flex={2}>
            <Box display={"flex"} justifyContent={"center"} mt={2}></Box>
            <Box
              maxHeight={130}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              height={130}
              overflow={"auto"}
            ></Box>
          </Box>
          <Divider
            variant="fullWidth"
            orientation="vertical"
            flexItem
            sx={{ marginX: 2 }}
          />
          <Box flex={5}>
            <Grid container spacing={1} marginTop={1}>
              <Grid item sm={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  value={apartmentData.square}
                  onChange={(e) => {
                    setApartmentData((prev) => ({
                      ...prev,
                      square: e.target.value,
                    }));
                  }}
                  name="client"
                  label="Klienti"
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  name="apartment"
                  value={apartmentData.floorNumber}
                  onChange={(e) => {
                    setApartmentData((prev) => ({
                      ...prev,
                      floorNumber: e.target.value,
                    }));
                  }}
                  label="Banesa"
                />
              </Grid>

              <Grid item sm={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  name="total"
                  value={apartmentData.name}
                  onChange={(e) => {
                    setApartmentData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }));
                  }}
                  label="Totali"
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  name="paid"
                  value={apartmentData.apartmentNumber}
                  onChange={(e) => {
                    setApartmentData((prev) => ({
                      ...prev,
                      apartmentNumber: e.target.value,
                    }));
                  }}
                  label="Pagoi"
                />
              </Grid>

              <Grid item sm={12} md={12} lg={12} xl={12}>
                <TextField
                  fullWidth
                  size={"large"}
                  name="description"
                  label="Pershkrimi"
                  value={apartmentData.apartmentId}
                  onChange={(e) => {
                    setApartmentData((prev) => ({
                      ...prev,
                      apartmentId: e.target.value,
                    }));
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box display={"flex"} gap={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1d1d3a",
              ":hover": {
                backgroundColor: "#c1ac40",
              },
            }}
            onClick={handleSubmit}
          >
            Ruaj
          </Button>
          <Button
            onClick={() => {
              toast.warn("Ndryshimet u anuluan.", {
                position: "top-right",
              });
              dispatch(setApartmentEditModalState(false));
              resetApartmentData();
            }}
            variant="contained"
            sx={{
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
    </Modal>
  );
};

export default AdmSalesModal;
