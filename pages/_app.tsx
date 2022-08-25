import React from "react";
import "../styles/globals.css";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as colors from "@mui/material/colors";

function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.orange[500],
      },
    },
    components: {
      MuiPaper: {
        defaultProps: { elevation: 0 },
      },
      MuiButton: {
        styleOverrides: {
          root: {
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
          borderBottom: "1px solid rgba(255,255,255,.1)",
        }}
        elevation={0}
      >
        <Toolbar>
          <Button>Manu's digital portfolio</Button>
        </Toolbar>
      </AppBar>
      <Box>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
