import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const PrivacyPolicy = () => {
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
          Politika e Privatësisë
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
          1. Mbledhja e informacionit
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Ne mbledhim informacione personale kur ju regjistroheni, vendosni një
          porosi, ose përdorni faqen tonë të internetit. Këto informacione
          përfshijnë emrin tuaj, adresën e email-it dhe të dhënat e kontaktit.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          2. Përdorimi i informacionit
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Informacioni i mbledhur përdoret për të përmirësuar përvojën tuaj, për
          të personalizuar shërbimet tona dhe për të siguruar mbështetje më të
          mirë.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          3. Mbrojtja e të dhënave
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Ne përdorim masa të sigurta për të mbrojtur të dhënat tuaja personale
          dhe për të parandaluar aksesin e paautorizuar.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          4. Shkëmbimi i informacionit
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Ne nuk ndajmë informacionin tuaj personal me palët e treta, përveç
          rasteve kur kërkohet me ligj ose kur është e nevojshme për të
          përmbushur një shërbim.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          5. Cookies
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Faqja jonë përdor cookies për të analizuar trafikun dhe për të
          personalizuar përmbajtjen në bazë të preferencave tuaja.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          6. Të drejtat tuaja
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Ju keni të drejtë të aksesoni, modifikoni ose fshini informacionet
          tuaja personale në çdo kohë duke na kontaktuar.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          7. Ndryshimet në politikë
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Ne rezervojmë të drejtën për të përditësuar këtë politikë në çdo kohë
          dhe do t’ju njoftojmë për çdo ndryshim përmes faqes sonë të
          internetit.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          8. Kontakti
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "Poppins",
          }}
        >
          Për çdo pyetje lidhur me politikën e privatësisë, ju lutemi na
          kontaktoni përmes detajeve të ofruara në faqen tonë të internetit.
        </p>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
