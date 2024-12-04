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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawing from "../../assets/svg/Drawing";
import Hamburger from "../../assets/svg/Hamburger";
import virtonLogo from "/assets/images/virtonlogo.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
          padding: "20px 50px",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <img src={virtonLogo} alt="Virton Logo" style={{ width: "150px" }} />
          {/* Menu Button */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                marginRight: 1,
                fontFamily: "poppins",
                fontSize: "20px",
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
            padding: "0px 50px",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "30px 20px",
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
              {["Ballina", "Rreth Nesh", "Gallery", "Projects", "Kontakt"].map(
                (text) => (
                  <ListItem button key={text} sx={{ paddingTop: "0" }}>
                    <ListItemText
                      primary={text}
                      sx={{
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        "& .MuiListItemText-primary": {
                          fontSize: "50px",
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
                )
              )}
            </List>

            <Box sx={{ position: "absolute", top: "15%", right: "13%" }}>
              <Drawing />
            </Box>
          </Box>

          {/* Bottom Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "120px",
              padding: "20px 20px",
              borderTop: "1px solid #FFFFFF30",
            }}
          >
            {" "}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, fontFamily: "poppins" }}
              >
                {" "}
                TELEFONONI ZYRËN TONË{" "}
              </Typography>{" "}
              <Typography
                variant="h6"
                sx={{ marginBottom: 2, fontFamily: "poppins" }}
              >
                {" "}
                +383 44 460 405{" "}
              </Typography>{" "}
            </Box>{" "}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <Typography
                variant="body1"
                sx={{ marginBottom: 1, fontFamily: "poppins" }}
              >
                {" "}
                DËRGO NJË MESAZH{" "}
              </Typography>{" "}
              <Typography variant="h6" style={{ fontFamily: "poppins" }}>
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
