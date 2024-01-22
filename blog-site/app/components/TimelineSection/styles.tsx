import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: "pink",
  },
  primaryTail: {
    backgroundColor: "blue",
  },
  timelineRoot: {
    minWidth: 1200,
    //overflow: "scroll",
  },
  divRoot: {
    width: "90%",
    margin: "auto",
    overflow: "scroll",
  },
}));
