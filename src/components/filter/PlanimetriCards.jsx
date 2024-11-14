import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const PlanimetriCards = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "50px 100px",
        backgroundColor: "white",
        marginTop: "50px",
      }}
    >
      <Grid container spacing={5} justifyContent="center">
        {planimetrite.map((property) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={property.id}
            display="flex"
            justifyContent="center"
          >
            <Card
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                backgroundColor: "#1c1c3d",
                border: "10px solid #1c1c3d",
                borderRadius: "5px",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
                height="300"
                image={property.image}
                alt={`${property.tipi} image`}
              />
              <CardContent
                sx={{
                  padding: 1,
                  height: "180px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="start"
                  sx={{ marginBottom: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#C1AC40",
                      fontWeight: "400",
                    }}
                  >
                    Siperfaqja
                  </Typography>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    {property.siperfaqja}
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ marginBottom: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#C1AC40",
                      fontWeight: "400",
                    }}
                  >
                    Tipi
                  </Typography>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    {property.tipi}
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#C1AC40",
                      fontWeight: "400",
                    }}
                  >
                    Kati
                  </Typography>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    {property.kati}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginTop: "15px",
                  }}
                >
                  <Button
                    sx={{ color: "#C1AC40", textTransform: "capitalize" }}
                  >
                    <img
                      src="/assets/images/vector.png"
                      alt=""
                      style={{ marginRight: "7px" }}
                    />
                    Me Shume...
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlanimetriCards;
