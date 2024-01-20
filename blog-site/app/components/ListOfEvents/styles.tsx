import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "70%",
      backgroundColor: theme.palette.background.paper,
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
      fontSize: 8,
      fontFamily: "'Ubuntu Mono', monospace",
    },
  })
);
