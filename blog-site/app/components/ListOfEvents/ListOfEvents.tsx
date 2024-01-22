import { List, ListItem, Typography, createTheme } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { store } from "../../../lib/redux/store";
import {
  fetchItems,
  selectFetchStatus,
  selectListOfEvents,
} from "../../../lib/redux/slices/ListOfEventsSlice/ListOfEventsSlice";
import { PersonalEvent } from "../../../lib/redux/slices/ListOfEventsSlice/types";
import { useStyles } from "./styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
    background: {
      paper: "ffffff",
    },
  },
});

export interface ListOfEventsProps {}

export function ListOfEvents(props: ListOfEventsProps) {
  const dispatch = useAppDispatch();
  const classes = useStyles(theme);
  const storeEvents = useAppSelector(selectListOfEvents);
  const fetchStatus = useAppSelector(selectFetchStatus);

  // useEffect(() => {
  //   if (fetchStatus === "idle") {
  //     store.dispatch<any>(fetchItems()).then(() => {
  //       console.log("Fetched all events.");
  //     });
  //   }
  // }, [fetchStatus, dispatch]);

  return (
    <div className={classes.divStyle}>
      <List className={classes.root}>
        {storeEvents.map((i: PersonalEvent) => {
          return (
            <ListItem key={i.key}>
              <Typography variant="h6">
                {i.date.toDateString()} | {i.description}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
