import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
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

import DEMO_CODES from "./llmCodes";

function DemoBlock(demo) {
  // get demo name from the args
  //   const demo_name = args["demo_name"];
  //   const demo_dict = DEMO_CODES[demo_name];
  const demo_video_url = demo["video_url"];
  const demo_code = demo["code"];

  // get the demo video link and LLM code from the dictionary

  //   console.log(11111, demo_name, demo_video_url);
  return (
    <Grid
      container
      xs={12}
      spacing={1}
      justifyContent="space-between"
      marginTop="20px"
    >
      <Grid item container xs={12} md={6} justifyContent="center">
        <Grid item container xs={12} justifyContent="center">
          <iframe
            width="410px"
            height="250px"
            src={demo_video_url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Grid>
      </Grid>
      <Grid item container xs={12} md={6} justifyContent="center">
        <Box
          sx={{
            width: "410px",
            height: "250px",
            overflowY: "auto",
            backgroundColor: "rgba(0,0,0,0.04)", // You can choose your own color
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            //   width: "150px",
            //   overflowWrap: "break-word",
            //   textOverflow: "ellipsis",
            //   overflowX: "auto",
          }}
        >
          <Typography
            variant="body2"
            component="pre"
            // nowrap
            sx={{
              // maxWidth: 200,
              // overflowWrap: "break-word",
              fontFamily: "Monospace",
              // fontSize: ""
            }}
          >
            {demo_code}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default function Demo() {
  const [displayDemo, setDisplayDemo] = React.useState("sequential");

  function handleButtonPress(demo_name) {
    setDisplayDemo(demo_name);
  }

  let currentDemos = DEMO_CODES[displayDemo];

  return (
    <main>
      {/* Hero unit */}
      <Container maxWidth="md">
        {/* Display creative tool use with robotic arm */}
        {/* <Grid container> */}
        {/* <ButtonGroup
          fullWidth
          variant="outlined"
          aria-label="outlined primary button group"
        > */}
        <Grid container spacing={2} marginTop="20px" justifyContent="center">
          <Grid item xs={10} md={4}>
            <Button
              fullWidth
              variant={displayDemo === "sequential" ? "contained" : "outlined"}
              onClick={() => handleButtonPress("sequential")}
            >
              Sequential Tool Use
            </Button>
          </Grid>
          <Grid item xs={10} md={4}>
            <Button
              fullWidth
              variant={displayDemo === "creative" ? "contained" : "outlined"}
              onClick={() => handleButtonPress("creative")}
            >
              Creative Tool Use
            </Button>
          </Grid>
          <Grid item xs={10} md={4}>
            <Button
              fullWidth
              variant={displayDemo === "manufacture" ? "contained" : "outlined"}
              onClick={() => handleButtonPress("manufacture")}
            >
              Tool Manufacture
            </Button>
          </Grid>
        </Grid>

        {/* <Button onClick={() => handleButtonPress("legRobot_surfboard")}>
          Creative Use
        </Button>
        <Button onClick={() => handleButtonPress("legRobot_chair")}>
          Tool Manufacture
        </Button> */}
        {/* </ButtonGroup> */}
        {/* </Grid> */}
      </Container>

      <Container maxWidth="md">
        {currentDemos.map((demo) => DemoBlock(demo))}
        {/* <DemoBlock demo_name={displayDemo} /> */}
      </Container>
    </main>
  );
}
