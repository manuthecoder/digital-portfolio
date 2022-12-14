import React from "react";
import Head from "next/head";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { cyan, green } from "@mui/material/colors";
import Projects from "../components/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Box sx={{ p: { xs: 3, sm: 7 } }}>
        <Box
          sx={{
            "@keyframes this": {
              "0%": {
                boxShadow: "0 0 30px " + cyan["900"],
              },
              "50%": {
                boxShadow: "0 0 50px " + cyan["900"],
              },
              "100%": {
                boxShadow: "0 0 30px " + cyan["900"],
              },
            },
            p: 5,
            mt: 2,
            py: 8,
            textAlign: "center",
            backdropFilter: "blur(10px)",
            borderRadius: 5,
            border: "2px solid " + cyan["A700"],
            // transition: "box-shadow .5s",
            animation: "this 5s infinite",
            color: cyan["A400"],
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "800" }}>
            Interests and activities
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "800px", pt: 4 }}>
          <Typography sx={{ mb: 2, mt: 1 }}>
            <b>I enjoy software development!</b>
            <br />I literally code until 3AM every day!
          </Typography>
          <Projects />
        </Box>
      </Box>
    </>
  );
}
