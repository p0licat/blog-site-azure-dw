import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    cardStyle: {
      marginTop: 15,
      maxWidth: "40vw",
      margin: "auto",
    },
    iconListStyle: {
      width: "90vw",
      maxWidth: 360,
      minWidth: "50%",
      height: "80px",
      minHeight: "40px",
      marginTop: "5px",
      margin: "auto",
      display: "flex",
      flexDirection: "row",
      padding: 0,
    },
    profilePic: {
      width: "200px",
      height: "200px",
    },
  })
);
