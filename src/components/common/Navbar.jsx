import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawing from "../../assets/svg/Drawing";
import Hamburger from "../../assets/svg/Hamburger";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallDev = useMediaQuery("(max-width: 768px)");

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "#1d1d3a", // Black overlay with 50% opacity
          padding: isSmallDev ? "20px" : "20px 50px",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link to="/">
            <img src={""} alt="Virton Logo" style={{ width: "150px" }} />
          </Link>
          {/* Menu Button */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", gap: "15px" }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "18px",
                  fontWeight: "400",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              >
                Apartamentet
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "18px",
                  fontWeight: "400",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/afarizmi")}
              >
                Afarizmi
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "18px",
                  fontWeight: "400",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/parking")}
              >
                Parkingjet
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  marginRight: 1,
                  fontFamily: "poppins",
                  fontSize: "18px",
                }}
              >
                Menu
              </Typography>
              <IconButton
                edge="end"
                color="inherit"
                onClick={toggleDrawer}
                aria-label="menu"
              >
                <Hamburger />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Full-Page Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%",
            backgroundColor: "#121b1d",
            color: "white",
            overflow: "hidden",
            padding: isSmallDev ? "20px" : "0px 50px",
          },
        }}
      >
        <Box
          sx={{
            height: isSmallDev ? "100vh" : "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: isSmallDev ? "20px" : "30px 20px",
          }}
        >
          {/* Close Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              onClick={toggleDrawer}
              sx={{
                color: "white",
                "&:hover": { color: "rgba(255,255,255,0.7)" },
              }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Menu Items */}
          <Box>
            <List>
              {[
                "Ballina",
                "Rreth Nesh",
                "Gallery",
                "Projects",
                "Kontakt",
                "Apartamentet",
                "Afarizmi",
                "Parkingjet",
              ].map((text) => (
                <ListItem button key={text} sx={{ paddingTop: "0" }}>
                  <ListItemText
                    primary={text}
                    sx={{
                      paddingTop: "0px",
                      paddingBottom: "0px",
                      "& .MuiListItemText-primary": {
                        fontSize: isSmallDev ? "25px" : "30px",
                        fontFamily: "poppins",
                        fontWeight: text === "Rreth Nesh" ? "bold" : "normal",

                        color:
                          text === "Rreth Nesh"
                            ? "white"
                            : "rgba(255,255,255,0.7)",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Box
              sx={{
                position: "absolute",
                top: "15%",
                right: isSmallDev ? "0%" : "13%",
              }}
            >
              <Drawing />
            </Box>
          </Box>

          {/* Bottom Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: isSmallDev ? "30px" : "120px",
              padding: "20px 20px",
              borderTop: "1px solid #FFFFFF30",
            }}
          >
            {" "}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <Typography
                variant="body1"
                sx={{
                  marginBottom: 1,
                  fontFamily: "poppins",
                  fontSize: isSmallDev ? "10px" : "18px",
                }}
              >
                {" "}
                TELEFONONI ZYRËN TONË{" "}
              </Typography>{" "}
              <Typography
                variant="h6"
                sx={{
                  marginBottom: 2,
                  fontFamily: "poppins",
                  fontSize: isSmallDev ? "10px" : "18px",
                }}
              >
                {" "}
                +38344460405{" "}
              </Typography>{" "}
            </Box>{" "}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <Typography
                variant="body1"
                sx={{
                  marginBottom: 1,
                  fontFamily: "poppins",
                  fontSize: isSmallDev ? "10px" : "18px",
                }}
              >
                {" "}
                DËRGO NJË MESAZH{" "}
              </Typography>{" "}
              <Typography
                variant="h6"
                style={{
                  fontFamily: "poppins",
                  fontSize: isSmallDev ? "10px" : "18px",
                }}
              >
                info@virtoninvest.com
              </Typography>{" "}
            </Box>{" "}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
