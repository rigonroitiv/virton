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
import CloseIcon from "@mui/icons-material/Close";
import Drawing from "../../assets/svg/Drawing";
import Hamburger from "../../assets/svg/Hamburger";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallDev = useMediaQuery("(max-width: 768px)");

  const navItems = [
    { text: "Ballina", href: "https://virtoninvest.com" },
    { text: "Rreth Nesh", href: "https://virtoninvest.com/about/" },
    { text: "Gallery", href: "https://virtoninvest.com/projects/" },
    {
      text: "Projects",
      href: "https://virtoninvest.com/portfolio/river-residence/",
    },
    { text: "Kontakt", href: "https://virtoninvest.com/contact/" },
    {
      text: "Apartamentet",
      href: "https://virton.roitiv.com/projektet/#/floor-plan-page",
    },
    { text: "Afarizmi", href: "/services" },
    { text: "Parkingjet", href: "/parking" },
  ];

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
          padding: isSmallDev ? "20px" : "20px 20px",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Link to="/">
            <img
              src={"/projektet/assets/images/virtonlogo.png"}
              alt="Virton Logo"
              style={{ width: isSmallDev ? "100px" : "150px" }}
            />
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
            <Box
              sx={{
                display: isSmallDev ? "none" : "flex",
                flexDirection: "row",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "400",
                  cursor: "pointer",
                  border: "1px solid #C1AC40",
                  padding: "5px 15px",
                  borderRadius: "50px",
                  ":hover": {
                    backgroundColor: "#c1ac40",
                    color: "#1d1d3a",
                    transition: "0.7s",
                  },
                }}
                onClick={() => navigate("/")}
              >
                Apartamentet
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "400",
                  cursor: "pointer",
                  border: "1px solid #C1AC40",
                  padding: "5px 15px",
                  borderRadius: "50px",
                  ":hover": {
                    backgroundColor: "#c1ac40",
                    color: "#1d1d3a",
                    transition: "0.7s",
                  },
                }}
                onClick={() => navigate("/afarizmi")}
              >
                Afarizmi
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "400",
                  cursor: "pointer",
                  border: "1px solid #C1AC40",
                  padding: "5px 15px",
                  borderRadius: "50px",
                  ":hover": {
                    backgroundColor: "#c1ac40",
                    color: "#1d1d3a",
                    transition: "0.7s",
                  },
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
                  fontFamily: "Poppins",
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
            padding: isSmallDev ? "20px" : "0px 30px",
          },
        }}
      >
        <Box
          sx={{
            height: isSmallDev ? "100vh" : "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: isSmallDev ? "20px" : "30px 0px",
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
              {navItems.map(({ text, href }) => (
                <ListItem onClick={() => {
                  setIsDrawerOpen(false)
                  window.location.replace(href)
                }} key={text} sx={{ paddingTop: "0" }}>
                  <a
                    style={{
                      textDecoration: "none",
                      width: "100%",
                      zIndex: "2",
                    }}
                  >
                    <ListItemText
                      primary={text}
                      sx={{
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        "& .MuiListItemText-primary": {
                          fontSize: isSmallDev ? "25px" : "30px",
                          fontFamily: "Poppins",
                          fontWeight: text === "Rreth Nesh" ? "bold" : "normal",
                          color:
                            text === "Rreth Nesh"
                              ? "white"
                              : "rgba(255,255,255,0.7)",
                        },
                        ":hover": {
                          color: "white",
                          fontWeight: "bold",
                        },
                      }}
                    />
                  </a>
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
                  fontFamily: "Poppins",
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
                  fontFamily: "Poppins",
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
                  fontFamily: "Poppins",
                  fontSize: isSmallDev ? "10px" : "18px",
                }}
              >
                {" "}
                DËRGO NJË MESAZH{" "}
              </Typography>{" "}
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Poppins",
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
