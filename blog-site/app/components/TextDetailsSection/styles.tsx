import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    cardStyle: {
      marginTop: 15,
      maxWidth: "69%",
      margin: "auto",
    },
  })
);
