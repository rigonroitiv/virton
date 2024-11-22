import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const TermsConditions = () => {
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
            fontFamily: "poppins",
          }}
        >
          Kushtet dhe Rregullat
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
            fontFamily: "poppins",
          }}
        >
          1. Qëllimi i dokumentit
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "poppins",
          }}
        >
          Ky dokument përcakton kushtet dhe rregullat për përdorimin e
          shërbimeve tona.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "poppins",
            marginTop: "20px",
          }}
        >
          2. Përdorimi i shërbimeve
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "poppins",
          }}
        >
          Përdorimi i shërbimeve tona nënkupton pranimin e kushteve të
          përcaktuara këtu.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "poppins",
            marginTop: "20px",
          }}
        >
          3. Kufizimi i përgjegjësisë
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "poppins",
          }}
        >
          Ne nuk mbajmë përgjegjësi për dëmet që mund të shkaktohen nga
          përdorimi i pasaktë i shërbimeve tona.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "poppins",
            marginTop: "20px",
          }}
        >
          4. Të drejtat e pronësisë intelektuale
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "poppins",
          }}
        >
          Të gjitha materialet dhe përmbajtjet janë pronë e kompanisë sonë dhe
          nuk mund të riprodhohen pa leje.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "poppins",
            marginTop: "20px",
          }}
        >
          5. Ndryshimet në kushte
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "poppins",
          }}
        >
          Ne rezervojmë të drejtën për të ndryshuar këto kushte në çdo kohë, pa
          paralajmërim paraprak.
        </p>

        <Typography
          style={{
            color: "white",
            fontSize: isSmallDev ? "25px" : "35px",
            fontFamily: "poppins",
            marginTop: "20px",
          }}
        >
          6. Kontakt
        </Typography>
        <p
          style={{
            color: "white",
            fontSize: isSmallDev ? "14px" : "18px",
            fontFamily: "poppins",
          }}
        >
          Për çdo pyetje ose çështje, ju lutemi na kontaktoni përmes detajeve të
          kontaktit të ofruara në faqen tonë.
        </p>
      </Box>
    </Box>
  );
};

export default TermsConditions;
