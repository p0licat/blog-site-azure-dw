import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "70%",
      backgroundColor: "white",
      position: "relative",
      overflow: "auto",
      maxHeight: 200,
      margin: "auto",
      display: "flex",
      flexDirection: "column-reverse",
    },
    divStyle: {
      marginTop: 15,
    },
    typography: {
      fontSize: "0.7rem",
      fontFamily: "'Ubuntu Mono', monospace",
    },
  })
);
