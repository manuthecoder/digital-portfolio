import React from "react";
import Head from "next/head";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { cyan, green } from "@mui/material/colors";

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
            Academic history
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "800px", pt: 4 }}>
          <Typography sx={{ mb: 2, mt: 1 }}>
            <b>Strengths: What are your best subjects? What are your strongest skills? Describe an academic moment in which you were proud of yourself</b>
            <br />I am good at Science, and my strongest skills are technology. I was proud of myself when I once scored 100% on a summative assessment 
          </Typography>
          <Typography sx={{ mb: 2, mt: 1 }}>
            <b>Weaknesses: What subjects are the most challenging for you? What sills do you hope to improve on?</b>
            <br />I am not that great at writing. I hope to improve on writing essays 
          </Typography>
          <Typography sx={{ mb: 2, mt: 1 }}>
            <b>Goals / Academic risks: What are some academic goals you can set for yourself? How will achieving these goals help you in the future. What academic risk are you willing to take?</b>
            <br />I will take a risk when it comes to reading novels, doing essays, and more to get good grades. These academic goals will help me in the future. I am willing to take a year, probably
          </Typography>
        </Box>
      </Box>
    </>
  );
}
