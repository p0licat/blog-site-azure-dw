import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 30,
      width: "80vw",
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      overflow: "hidden",
      //maxHeight: 400,
      margin: "auto",
    },
    root2: {
      marginTop: 30,
      width: "100vw",
      backgroundColor: theme.palette.background.paper,
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
