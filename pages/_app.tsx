import React from "react";
import "../styles/globals.css";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as colors from "@mui/material/colors";
import { About } from "../components/About";
import { Classes } from "../components/Classes";

function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.green["A700"],
      },
    },
    components: {
      MuiPaper: {
        defaultProps: { elevation: 0 },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "15px",
            transition: "none",
            textTransform: "none",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        sx={{
          background: "transparent",
          backdropFilter: "blur(10px)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          borderBottom: "1px solid rgba(255,255,255,.1)",
        }}
        elevation={0}
      >
        <Toolbar>
          <Button>Manu&apos;s digital portfolio</Button>
          <Box sx={{ flexGrow: 1 }} />
          <About />
          <Classes />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
