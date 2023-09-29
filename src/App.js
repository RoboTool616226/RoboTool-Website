import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { blueGrey } from "@mui/material/colors";
import { ButtonGroup } from "@mui/material";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import bgImage from "./imgs/background.png";

import Demo from "./Demos";
import Intro from "./Intro";
import Abstract from "./Abstract";
import Prompts from "./Prompts";
import "./App.css";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
  },
  palette: {
    primary: {
      main: "#448aff",
      dark: "#536dfe",
    },
    // secondary: {
    //   main: '#ff9800',  // Change as per your need
    // },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            RoboTool
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}

        <Box
          sx={{
            // bgcolor: blueGrey[50],
            // bgImage: { bgImage },
            pt: 8,
            pb: 6,
          }}
          className="background"
          // style={{
          //   backgroundImage: `url(${bgImage})`,
          //   backgroundSize: "cover", // Cover the viewport
          //   backgroundPosition: "center", // Center the image
          //   height: "300px",
          //   filter: "blur(8px)",
          // }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{ color: "white" }}
              style={{ fontWeight: "bold" }}
            >
              RoboTool
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{ color: "white" }}
              style={{ fontWeight: "bold" }}
              paragraph
            >
              Creative Robot Tool Use with Large Language Models
            </Typography>
          </Container>
        </Box>
      </main>

      <Intro />
      <Abstract />
      <Demo />
      <Prompts />

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright /> */}
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
