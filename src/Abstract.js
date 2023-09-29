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
import pipelineImage from "./imgs/pipeline.png";

export default function Abstract() {
  //   function handleButtonPress(demo_name) {
  //     setDisplayDemo(demo_name);
  //   }

  //   let currentDemos = DEMO_CODES[displayDemo];

  return (
    <main>
      <Container maxWidth="md">
        <Box marginTop="30px">
          <Typography variant="h4" align="center">
            Abstract
          </Typography>
          <Typography
            marginTop="15px"
            variant="body2"
            align="justify"
            sx={{
              fontFamily: "sans-serif",
              fontWeight: 400,
              fontSize: "1.2em",
              color: "#4a4a4a",
            }}
            // style={{ lineHeight: "1.5" }}
          >
            Tool use is a hallmark of advanced intelligence, exemplified in both
            animal behavior and robotic capabilities. This paper investigates
            the feasibility of imbuing robots with the ability to creatively use
            tools in tasks that involve long-term planning and implicit physical
            constraints. Leveraging Large Language Models (LLMs), we develop a
            system that accepts natural language instructions and outputs
            executable code for controlling robots in both simulated and
            real-world environments. Our framework incorporates four pivotal
            components: (i) an “Analyzer” that interprets natural language to
            discern crucial task-related concepts, (ii) a “Planner” that
            generates comprehensive strategies based on the input and key
            concepts, (iii) a “Calculator” that computes target positions for
            each goal-specific policy, and (iv) a “Coder” that translates these
            plans into executable code. Our results show that LLMs can not only
            comprehend implicit physical constraints and environmental factors
            but also demonstrate innovative tool use. Unlike traditional Task
            and Motion Planning (TAMP) methods that rely on explicit
            optimization and are confined to formal logic, our LLM-based system
            offers a more flexible, efficient, and user-friendly solution for
            complex robotics tasks. Through extensive experimentation, we
            validate that our system is proficient in handling tasks that would
            otherwise be infeasible without the creative use of tools, thereby
            expanding the capabilities of robotic systems.
          </Typography>
        </Box>
      </Container>
    </main>
  );
}
