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
            Personal bio
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "800px", pt: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "600", mt: 5 }}>
            <i>Tell us about yourself</i>
          </Typography>
          <Typography sx={{ mb: 2, mt: 1 }}>
            <b>Where were you born?</b>
            <br />I was born in India. I love the food there, because it is very
            unique and delicious.
          </Typography>
          <Typography sx={{ mb: 2, mt: 1 }}>
            <b>
              Tell us about your family. Are there any interesting facts,
              struggles, or accomplishments that have helped shape who you are
            </b>
            <br />
            Unfortunately, I do not have any siblings or pets 😔. My parents are
            from India as well. They are very supportive and loving. They have
            helped me a lot in my life and I am very grateful for them.
          </Typography>

          <Typography sx={{ mb: 2, mt: 1 }}>
            <b>
              What are some of your beliefs and values. What type of person do
              you want to be?
            </b>
            <br />I believe that everyone should be treated equally. I want to
            be a kind, caring, and a person that everyone likes to be with. I
            also hope to
          </Typography>
        </Box>
      </Box>
    </>
  );
}
