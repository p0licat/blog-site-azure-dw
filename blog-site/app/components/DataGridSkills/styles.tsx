import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 30,
      width: "80vw",
      backgroundColor: "pink",
      position: "relative",
      overflow: "hidden",
      //maxHeight: 400,
      margin: "auto",
    },
    root2: {
      marginTop: 30,
      width: "100vw",
      backgroundColor: "none",
      position: "relative",
      overflow: "hidden",
      maxHeight: 700,
      margin: "auto",
    },
    divStyle: {
      marginTop: 15,
    },
  })
);
