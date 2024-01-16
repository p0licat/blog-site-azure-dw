import { List, ListItem, Typography } from "@material-ui/core";
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

export interface ListOfEventsProps {}

export function ListOfEvents(props: ListOfEventsProps) {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const storeEvents = useAppSelector(selectListOfEvents);
  const fetchStatus = useAppSelector(selectFetchStatus);

  useEffect(() => {
    if (fetchStatus === "idle") {
      store.dispatch<any>(fetchItems()).then(() => {
        console.log("Fetched all events.");
      });
    }
  }, [fetchStatus, dispatch]);

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
