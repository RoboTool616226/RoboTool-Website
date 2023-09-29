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
// import Link from "@mui/material/Link";x
// import { createTheme, ThemeProvider } from "@mui/material/styles";

import DEMO_CODES from "./llmCodes";

function DemoBlock(demo, displayDemo) {
  // get demo name from the args
  //   const demo_name = args["demo_name"];
  //   const demo_dict = DEMO_CODES[demo_name];
  const demo_video_url = demo["video_url"];
  // const demo_code = demo["code"];
  const demo_file = demo["file_path"];
  const demo_name = demo["task_name"];

  const [fileContent, setFileContent] = React.useState("");
  React.useEffect(() => {
    // Define the file path here
    const filePath = demo_file;
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        setFileContent(data);
      });
  }, [displayDemo]);

  // get the demo video link and LLM code from the dictionary

  //   console.log(11111, demo_name, demo_video_url);
  return (
    <Grid
      container
      xs={12}
      spacing={2}
      justifyContent="space-evenly"
      marginTop="10px"
    >
      <Grid item xs={12}>
        <Typography variant="h6">{demo_name}</Typography>
      </Grid>
      <Grid item xs={12} md={4} justifyContent="center">
        <Grid item container xs={12} justifyContent="center">
          <iframe
            width="410px"
            height="280px"
            src={demo_video_url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Grid>
      </Grid>
      <Grid item xs={12} md={8} justifyContent="center">
        <Box
          fullWidth
          sx={{
            // width: "410px",
            height: "280px",
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
            fullWidth
            // nowrap
            sx={{
              // maxWidth: 200,
              // overflowWrap: "break-word",
              fontFamily: "Monospace",
              // fontSize: ""
            }}
          >
            {fileContent}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default function Demo() {
  const [displayDemo, setDisplayDemo] = React.useState("selection");

  function handleButtonPress(demo_name) {
    setDisplayDemo(demo_name);
  }

  let currentDemos = DEMO_CODES[displayDemo];

  return (
    <main>
      {/* Hero unit */}
      <Container maxWidth="lg">
        {/* Display creative tool use with robotic arm */}
        {/* <Grid container> */}
        {/* <ButtonGroup
          fullWidth
          variant="outlined"
          aria-label="outlined primary button group"
        > */}
        <Grid
          container
          spacing={2}
          marginTop="20px"
          justifyContent="space-evenly"
        >
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Experiment Videos and Generated Code
            </Typography>
          </Grid>
          <Grid item xs={10} md={4}>
            <Button
              fullWidth
              variant={displayDemo === "selection" ? "contained" : "outlined"}
              onClick={() => handleButtonPress("selection")}
            >
              Tool Selection
            </Button>
          </Grid>
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
              variant={displayDemo === "manufacture" ? "contained" : "outlined"}
              onClick={() => handleButtonPress("manufacture")}
            >
              Tool Manufacturing
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

      <Container maxWidth="lg">
        {currentDemos.map((demo) => DemoBlock(demo, displayDemo))}
        {/* <DemoBlock demo_name={displayDemo} /> */}
      </Container>
    </main>
  );
}
