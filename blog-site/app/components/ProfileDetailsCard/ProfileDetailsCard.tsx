import {
  Card,
  Grid,
  ListItem,
  ListItemIcon,
  Typography,
  List,
  Link,
  createTheme,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHub from "@mui/icons-material/GitHub";
import YouTube from "@mui/icons-material/YouTube";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";

import { motion } from "framer-motion";
import { useStyles } from "./styles";

export interface ProfileDetailsCardProps {
  fullName: string;
  fullTitle: string;
  fullLocation: string;
  fullEmail: string;
}

const theme = createTheme();

export function ProfileDetailsCard(props: ProfileDetailsCardProps) {
  const classes = useStyles();
  return (
    <Card className={classes.cardStyle}>
      <Grid container>
        <Grid item xs={4}>
          <motion.div>
            <Card
              style={{ border: "none", boxShadow: "none", overflow: "overlay" }}
            >
              <img
                src={"/static/profile4.jpg"}
                alt={"My avatar"}
                className={classes.profilePic}
              ></img>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={8}>
          <Card
            style={{ border: "none", boxShadow: "none", overflow: "overlay" }}
          >
            <Typography variant="h4">{props.fullName}</Typography>
            <Typography variant="h6">{props.fullTitle}</Typography>
            <Typography variant="h6">{props.fullLocation}</Typography>
            <Typography variant="h6">{props.fullEmail}</Typography>
            <Card
              style={{ border: "none", boxShadow: "none", overflow: "overlay" }}
            >
              <List className={classes.iconListStyle}>
                <ListItem>
                  <Link href="https://github.com/p0licat">
                    <ListItemIcon>
                      <GitHub />
                    </ListItemIcon>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://www.linkedin.com/in/septimiu-calin-bodica/">
                    <ListItemIcon>
                      <LinkedInIcon />
                    </ListItemIcon>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="http://www.youtube.com/@septimiubodica">
                    <YouTube></YouTube>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://www.credly.com/users/septimiu-bodica/badges">
                    <CastForEducationIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://twitter.com/tbodica">
                    <ListItemIcon>
                      <TwitterIcon />
                    </ListItemIcon>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://gitlab.com/tbodica">
                    <ListItemIcon>
                      <GitHub />
                    </ListItemIcon>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://bitbucket.org/tbodica/">
                    <ListItemIcon>
                      <GitHub />
                    </ListItemIcon>
                  </Link>
                </ListItem>
              </List>
            </Card>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
}
