import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 30,
      width: "80%",
      backgroundColor: "white",
      position: "relative",
      overflow: "auto",
      // maxHeight: 400,
      margin: "auto",
    },
    divStyle: {
      marginTop: 15,
    },
  })
);
