import { Box, Popover, Typography } from "@mui/material";
import React from "react";

const ApartmentPopup = ({ anchorEl, setPopupMenu, data }) => {
  const open = new Boolean(anchorEl);
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      sx={{ pointerEvents: "none", borderRadius: "15px" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "200px",
          height: "250px",
          padding: "20px",
          border: "3px solid #C1AC40",
          borderRadius: "15px",
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

        <Box
          sx={{
            display: "flex",
            position: "absolute",
            top: "20%",
          }}
        >
          <svg
            width="155"
            height="155"
            viewBox="0 0 444 444"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M329.328 249.091L385.793 192.627C386.834 191.586 388.536 191.586 389.577 192.627L443.219 246.267C443.98 247.028 444.18 248.15 443.84 249.091H329.328ZM114.681 194.929L58.2158 251.393C57.1746 252.434 55.4727 252.434 54.4315 251.393L0.789711 197.753C0.0288346 196.992 -0.191419 195.89 0.168996 194.929H114.681ZM4.11354 190.624L62.3206 132.399C62.8412 131.878 63.542 131.618 64.2228 131.618H230.294L172.067 189.844C171.546 190.364 170.886 190.624 170.205 190.624H4.13356H4.11354ZM119.727 127.313L176.192 70.849C177.233 69.8078 178.935 69.8078 179.976 70.849L233.618 124.49C234.379 125.251 234.579 126.352 234.239 127.313H119.727ZM249.076 114.679L192.611 58.2147C191.569 57.1735 191.569 55.4716 192.611 54.4304L246.272 0.789695C247.033 0.0288341 248.135 -0.191415 249.096 0.168993V114.679H249.076ZM253.381 4.11346L311.608 62.3393C312.128 62.8599 312.389 63.5407 312.389 64.2415V115.439V230.309L254.161 172.084C253.641 171.563 253.381 170.902 253.381 170.221V4.13348V4.11346ZM439.895 253.375L381.668 311.601C381.148 312.122 380.447 312.382 379.766 312.382H213.675L271.902 254.156C272.422 253.636 273.083 253.375 273.764 253.375H439.875H439.895ZM324.282 316.687L267.817 373.151C266.776 374.192 265.074 374.192 264.033 373.151L210.391 319.51C209.63 318.749 209.41 317.648 209.77 316.687H324.302H324.282ZM194.933 329.321L251.398 385.785C252.439 386.826 252.439 388.528 251.398 389.57L197.757 443.21C196.996 443.971 195.874 444.191 194.933 443.831V329.321ZM190.628 439.887L132.401 381.661C131.881 381.14 131.62 380.459 131.62 379.758V328.561V213.691L189.847 271.916C190.368 272.437 190.628 273.098 190.628 273.779V439.887ZM127.315 324.276L70.8504 267.812C69.8092 266.771 69.8092 265.069 70.8504 264.028L124.492 210.387C125.253 209.626 126.354 209.406 127.315 209.766V324.276ZM316.714 119.744L373.178 176.208C374.22 177.249 374.22 178.951 373.178 179.992L319.537 233.633C318.776 234.394 317.675 234.594 316.714 234.254V119.744Z"
              fill="#C1AC40"
              fill-opacity="0.3"
            />
          </svg>
        </Box>
      </Box>
    </Popover>
  );
};

export default ApartmentPopup;
