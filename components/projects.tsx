import React from "react";
import Head from "next/head";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { cyan, green } from "@mui/material/colors";

export default function Projects() {
return (
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
              name: "Popvote (Coming soon)",
              description: "Create and share polls with your class/workplace",
              url: "https://popvote.ml",
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
)
}
