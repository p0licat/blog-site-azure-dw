import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import BuildIcon from "@mui/icons-material/Build";
import FunctionsIcon from "@mui/icons-material/Functions";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import WifiIcon from "@mui/icons-material/Wifi";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import WorkIcon from "@mui/icons-material/Work";
import React from "react";
import { useStyles } from "./styles";

export interface TimelineSectionProps {}

export function TimelineSection(props: TimelineSectionProps) {
  const classes = useStyles();

  return (
    <div className={classes.divRoot}>
      <Timeline position="alternate" className={classes.timelineRoot}>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              01/08/2016, Cluj-Napoca, Romania
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                BABEȘ-BOLYAI UNIVERSITY, Cluj-Napoca, Romania
              </Typography>
              <Typography>Started my studentship.</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              01/08/2016 – 01/01/2017, Cluj-Napoca, Romania
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <WifiIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                IT ASSISTANT, BABEȘ-BOLYAI UNIVERSITY, Cluj-Napoca, Romania
              </Typography>
              <Typography>
                During my studentship I worked part time as a system
                administrator helper at DTIC, a department at the university
                which manages all network and ICT infrastructure.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              07/2017 – 09/2017 (3 months) – Cluj-Napoca, Romania
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                JUNIOR SOFTWARE ENGINEER – BITDEFENDER
              </Typography>
              <Typography>
                Internship as a junior software engineer, with a focus on low
                level programming(C/C++, x86 ASM), python, malware analysis and
                reverse engineering, virtual machine security, network security.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              07/2019 – 04/2020 (11 months undergraduate) – Bistrița, Romania
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <BuildIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                ASSISTANT PROGRAMMER – RCB ELECTRO 97 S.A.
              </Typography>
              <Typography>
                Network and server infrastructure maintenance. I learned to
                develop applications in a time-critical environment, while
                offering IT support across multiple factory locations. I
                developed a dashboard using Web frameworks like django,
                automating with Python, data visualization, while studying
                remotely on Coursera. Managed a repository consisting of Jupyter
                notebooks and other self-made network solutions. Developed an
                embedded solution to expand my electronics knowledge while
                focusing on software and data science.
                (https://gitlab.com/tbodica/battery-tester)
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              01/06/2021 – 01/09/2021 (3 months) – Cluj-Napoca, Romania
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Apprenticeship, YEAR 2 – Universitatea Babeș-Bolyai
              </Typography>
              <Typography>
                Full Stack developer apprenticeship for 3 months in React, .NET
                and Azure.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              02/10/2021 – Cluj-Napoca, Romania
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <FunctionsIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                BACHELOR OF COMPUTER SCIENCE, YEAR 2 – Universitatea
                Babeș-Bolyai
              </Typography>
              <Typography>Finished year 2 with 82 ECTS credits.</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              06/2022 – Cluj-Napoca, Romania
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <FunctionsIcon />
            </TimelineDot>
            <TimelineConnector className={classes.primaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                BACHELOR OF COMPUTER SCIENCE - Universitatea Babeș-Bolyai
              </Typography>
              <Typography>Graduated with grade 8.41 on final exams.</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              09/2022 (3 months) – Cluj-Napoca, Romania
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector className={classes.primaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Java Developer Bootcamp - IBM Romania
              </Typography>
              <Typography>
                Studied Java Spring, got Azure certified (AZ-900), and
                comprehensively prepared on Java language building blocks using
                the OCP-17 framework.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              03/2023 (4 months) – Luxembourg
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Trainee - European Investment Bank, Luxembourg
              </Typography>
              <Typography>
                Was part of a Python web application development project which
                had data visualization using Plotly and Dash.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
