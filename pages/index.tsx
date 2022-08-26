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
            Manu G.
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Welcome to my high-school English class portfolio!
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "600", mt: 5 }}>
          Quick links: My websites & apps
        </Typography>
        <Typography sx={{ mb: 2, mt: 1 }}>
          Here are some of the websites and apps I&apos;ve made:
        </Typography>
        <Grid container spacing={2}>
          {[
            {
              name: "Smartlist",
              description: "Smart home inventory and budgeting",
              url: "https://smartlist.tech",
            },
            {
              name: "Pollcast (Coming soon)",
              description: "Create and share polls with your class/workplace",
              url: "https://smartlist.tech",
            },
            {
              name: "Classpage (Coming soon)",
              description:
                "The easier alternative for Google classroom r Canvas",
              url: "https://classpage-beta.manuthecoder.ml",
            },
          ].map((site, id) => (
            <Grid item xs={4} key={id.toString()}>
              <Card
                key={site.name}
                sx={{
                  height: "100%",
                  display: "flex",
                  background: "rgba(200,200,200,.1)",
                  borderRadius: 5,
                  backdropFilter: "blur(10px)",
                  border: "2px solid " + green["A700"],
                  color: green["A400"],
                  "& *": { transition: "none!important" },
                }}
                color="inherit"
              >
                <CardActionArea
                  onClick={() => {
                    window.open(site.url);
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">{site.name}</Typography>
                    <Typography>{site.description}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h5" sx={{ fontWeight: "600", mt: 5, mb: 3 }}>
          Featured articles
        </Typography>
        <Grid container spacing={2}>
          {[
            {
              name: "Python: Is it worth learning in 2022?",
              description:
                "Many developers choose to learn Python because it’s a backend language. JavaScript can be used for the frontend and backend, too. Python is a programming language developed in the late 1980s by Guido van Rossum. Its structure emphasizes code readabi...",
              url: "https://blog.manuthecoder.ml/python-is-it-worth-learning-in-2022",
            },
            {
              name: "Why is Node.js amazing?",
              description:
                "Node.js (Node) is an open source development platform for executing JavaScript code server-side. ... js is intended to run on a dedicated HTTP server and to employ a single thread with one process at a time. Node. js applications are event-based and run asynchronously... ",
              url: "https://blog.manuthecoder.ml/why-nodejs-is-awesome",
            },
            {
              name: "Really simple encryption in PHP",
              description:
                "Have you ever wanted to improve your app's security by hiding everything in your database? Let's make a simple encryption and decryption script in PHP using the openssl_encrypt and openssl_decrypt function",
              url: "https://blog.manuthecoder.ml/really-simple-encryption-in-php",
            },
          ].map((article, id) => (
            <Grid item xs={4} key={id.toString()}>
              <Card
                sx={{
                  height: "100%",
                  background: "rgba(200,200,200,.1)",
                  borderRadius: 5,
                  backdropFilter: "blur(10px)",
                  border: "2px solid " + green["A700"],
                  color: green["A400"],
                  "& *": { transition: "none!important" },
                }}
                color="inherit"
              >
                <CardActionArea
                  onClick={() => {
                    window.open(article.url);
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">{article.name}</Typography>
                    <Typography>{article.description}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
