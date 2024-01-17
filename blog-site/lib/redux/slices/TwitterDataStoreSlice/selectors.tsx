/* Instruments */
import type { ReduxState } from "@/lib/redux";

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: ReduxState) =>
  state.twitterDataStoreReducer.value;
export const selectFullData = (state: ReduxState) =>
  state.twitterDataStoreReducer.fullData;
export const selectElementsJsonData = (state: ReduxState) =>
  state.twitterDataStoreReducer.elementsData;
export const alternativeNodesSelector = (state: ReduxState) =>
  state.twitterDataStoreReducer.alternativeNodes;
export const alternativeEdgesSelector = (state: ReduxState) =>
  state.twitterDataStoreReducer.alternativeEdges;
export const selectTextForTweets = (state: ReduxState) =>
  state.twitterDataStoreReducer.tweetsWithText;
export const selectLogEvents = (state: ReduxState) =>
  state.twitterDataStoreReducer.logData;
export const lastEvent = (state: ReduxState) =>
  state.twitterDataStoreReducer.lastEvent;

export const points = (state: ReduxState) =>
  state.twitterDataStoreReducer.points;
