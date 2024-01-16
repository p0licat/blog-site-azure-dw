/* Core */
import {
  configureStore,
  type ThunkAction,
  type Action,
  combineReducers,
  applyMiddleware,
  createStore,
} from "@reduxjs/toolkit";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from "react-redux";

/* Instruments */
import { reducer } from "./rootReducer";
import { middleware } from "./middleware";

// export const reduxStore = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware().concat(middleware);
//   },
// });
import counterSlice from "../redux/slices/counterSlice/counterSlice";
import { composeWithDevTools } from "redux-devtools-extension";
import listOfEventsSlice from "../redux/slices/ListOfEventsSlice/ListOfEventsSlice";
import thunk from "redux-thunk";

export const combinedstore = combineReducers({
  counter: counterSlice,
  listOfEventsReducer: listOfEventsSlice,
});

export const store = createStore(
  combinedstore,
  composeWithDevTools(applyMiddleware(thunk))
);

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

/* Types */
export type reduxStore = typeof store;
export type ReduxStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;
export type AppDispatch = typeof store.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
