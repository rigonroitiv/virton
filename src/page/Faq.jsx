import { Box, Typography } from "@mui/material";
import React from "react";

const Faq = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "50px",
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
            fontSize: "50px",
            color: "white",
            fontFamily: "poppins",
          }}
        >
          FAQ
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
        }}
      >
        <Typography
          style={{ color: "white", fontSize: "35px", fontFamily: "poppins" }}
        >
          1. Kush jemi ne?
        </Typography>
        <p style={{ color: "white", fontSize: "18px", fontFamily: "poppins" }}>
          Ne jemi Virton, një kompani e dedikuar për ndërtimin e apartamenteve
          cilësore në Podujevë, Kosovë.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: "35px",
            fontFamily: "poppins",
            marginTop: "20px",
          }}
        >
          2. Cilat shërbime ofrojmë?
        </Typography>
        <p style={{ color: "white", fontSize: "18px", fontFamily: "poppins" }}>
          Ofrojmë ndërtimin e apartamenteve moderne dhe të qëndrueshme, të
          dizajnuara për komoditetin tuaj.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: "35px",
            fontFamily: "poppins",
            marginTop: "20px",
          }}
        >
          3. Ku ndodhemi?
        </Typography>
        <p style={{ color: "white", fontSize: "18px", fontFamily: "poppins" }}>
          Zyra jonë kryesore ndodhet në Podujevë, Kosovë, dhe operojmë në të
          gjithë rajonin.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: "35px",
            fontFamily: "poppins",
            marginTop: "20px",
          }}
        >
          4. Pse të na zgjidhni ne?
        </Typography>
        <p style={{ color: "white", fontSize: "18px", fontFamily: "poppins" }}>
          Me një fokus në cilësi dhe inovacion, ne sigurojmë që çdo projekt të
          përmbushë standardet më të larta.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: "35px",
            fontFamily: "poppins",
            marginTop: "20px",
          }}
        >
          5. A ofrojmë mbështetje pas shitjes?
        </Typography>
        <p style={{ color: "white", fontSize: "18px", fontFamily: "poppins" }}>
          Po, ne ofrojmë mbështetje të plotë pas shitjes për çdo klient, duke
          siguruar kënaqësi dhe përkushtim të vazhdueshëm.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: "35px",
            fontFamily: "poppins",
            marginTop: "20px",
          }}
        >
          6. Sa kohë zgjasin projektet tona?
        </Typography>
        <p style={{ color: "white", fontSize: "18px", fontFamily: "poppins" }}>
          Kohëzgjatja e projekteve tona ndryshon në varësi të kompleksitetit,
          por gjithmonë angazhohemi për dorëzim në kohë.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: "35px",
            fontFamily: "poppins",
            marginTop: "20px",
          }}
        >
          7. Si mund të na kontaktoni?
        </Typography>
        <p style={{ color: "white", fontSize: "18px", fontFamily: "poppins" }}>
          Mund të na kontaktoni përmes telefonit, email-it, ose të na vizitoni
          në zyrën tonë në Podujevë.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: "35px",
            fontFamily: "poppins",
            marginTop: "20px",
          }}
        >
          8. A bashkëpunojmë me kompani të tjera?
        </Typography>
        <p style={{ color: "white", fontSize: "18px", fontFamily: "poppins" }}>
          Po, bashkëpunojmë me kompani të tjera për të siguruar cilësi dhe
          ekspertizë në çdo hap të ndërtimit.
        </p>
      </Box>
    </Box>
  );
};

export default Faq;
