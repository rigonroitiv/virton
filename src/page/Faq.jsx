import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const Faq = () => {
  const isSmallDev = useMediaQuery("(max-width:768px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: isSmallDev ? "20px" : "50px",
        backgroundColor: "#1d1d3a",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          backgroundColor: "#C1AC40",
          borderRadius: "50px",
          marginBottom: "30px",
        }}
      >
        <Typography
          sx={{
            fontSize: isSmallDev ? "35px" : "50px",
            color: "white",
            fontFamily: "Poppins",
          }}
        >
          FAQ
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: isSmallDev ? "100%" : "60%",
        }}
      >
        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "Poppins",
          }}
        >
          1. Kush jemi ne?
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Ne jemi Virton, një kompani e dedikuar për ndërtimin e apartamenteve
          cilësore në Podujevë, Kosovë.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          2. Cilat shërbime ofrojmë?
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Ofrojmë ndërtimin e apartamenteve moderne dhe të qëndrueshme, të
          dizajnuara për komoditetin tuaj.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          3. Ku ndodhemi?
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Zyra jonë kryesore ndodhet në Podujevë, Kosovë, dhe operojmë në të
          gjithë rajonin.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          4. Pse të na zgjidhni ne?
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Me një fokus në cilësi dhe inovacion, ne sigurojmë që çdo projekt të
          përmbushë standardet më të larta.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          5. A ofrojmë mbështetje pas shitjes?
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Po, ne ofrojmë mbështetje të plotë pas shitjes për çdo klient, duke
          siguruar kënaqësi dhe përkushtim të vazhdueshëm.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          6. Sa kohë zgjasin projektet tona?
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Kohëzgjatja e projekteve tona ndryshon në varësi të kompleksitetit,
          por gjithmonë angazhohemi për dorëzim në kohë.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          7. Si mund të na kontaktoni?
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Mund të na kontaktoni përmes telefonit, email-it, ose të na vizitoni
          në zyrën tonë në Podujevë.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          8. A bashkëpunojmë me kompani të tjera?
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Po, bashkëpunojmë me kompani të tjera për të siguruar cilësi dhe
          ekspertizë në çdo hap të ndërtimit.
        </p>
      </Box>
    </Box>
  );
};

export default Faq;
