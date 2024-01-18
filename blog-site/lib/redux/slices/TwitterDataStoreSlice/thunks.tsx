/* Instruments */
import type { ReduxThunkAction } from "@/lib/redux";
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import axios from "axios";
import {
  EdgeData,
  ElementsJSON,
  GetPointsDTO,
  MyEdge,
  MyNode,
  NodeData,
  ResponseDTO,
  TextForTweetDTO,
} from "./types";
import { twitterDataStoreSlice } from "./TwitterDataStoreSlice";
import { fetchIdentityCount } from "./fetchIdentityCount";
import { selectCount } from "./selectors";

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const incrementAsync = createAppAsyncThunk(
  "counter/fetchIdentityCount",
  async (amount: number) => {
    const response = await fetchIdentityCount(amount);

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const queryTweetTextForSingleId = createAppAsyncThunk(
  "counter/queryTweetText",
  async (tweetId: string, { getState }) => {
    const state = getState();
    const globalStore = state.twitterDataStoreReducer.globalStore;
    const filtered = globalStore.filter((e) => e.tweetId === tweetId);
    if (filtered.length == 0) {
      return false;
    }

    var rv: TextForTweetDTO = {
      tweetId: filtered[0].tweetId,
      fullText: filtered[0].fullText,
    };
    return rv;
  }
);

export const fetchGraphDataFromTextAsync = createAppAsyncThunk(
  "counter/fetchGraphDataFromText",
  async (startingText: string, { getState }) => {
    var state = getState();

    console.log(startingText);

    const tweetDataCopy = state.twitterDataStoreReducer.globalStore;
    const pairingDataCopy = state.twitterDataStoreReducer.globalPairings;

    var bestMatches: string[] = [];
    var maxMatches = 0;
    for (var tweet of tweetDataCopy) {
      //console.log(tweet);
      var ctext: string = tweet.fullText;
      var cc = ctext.split(" ").map((e) => e.toLowerCase()) as Array<string>;
      if (cc.length == 0) continue;

      var queryTerms = startingText.split(" ");
      //console.log(queryTerms);
      if (queryTerms.length == 0) continue;
      var localMatches = 0;
      var localIdStack: string[] = [];
      for (var queryTerm of queryTerms) {
        for (var tweetText of tweetDataCopy) {
          var tweetTextSplit: string[] = tweetText.fullText
            .split(" ")
            .map((e) => e.toLowerCase()) as string[]; // same as cc
          var matchTerm = tweetTextSplit.find(
            (e) => e === queryTerm.toLowerCase()
          );
          //console.log(matchTerm);
          if (matchTerm && typeof matchTerm !== "undefined") {
            localMatches += 1;
            localIdStack = localIdStack.concat([tweetText.tweetId]);
          }
        }
      }
      if (localMatches > maxMatches) {
        maxMatches = localMatches;
        bestMatches = localIdStack;
      }
    }

    var X: string[] = [];
    var Y: string[] = [];

    for (var pairing of pairingDataCopy) {
      if (
        bestMatches.find((f) => pairing.tweetId1 === f) ||
        bestMatches.find((f) => pairing.tweetId2 === f)
      ) {
        X = X.concat(pairing.tweetId1);
        Y = Y.concat(pairing.tweetId2);
      }
    }

    var allNodes: MyNode[] = [];
    for (var uniqueNode of X.concat(Y)) {
      var cNodeData: NodeData = {
        id: uniqueNode,
        name: uniqueNode, // text being displayed
      };
      var cNode: MyNode = {
        data: cNodeData,
      };
      allNodes = allNodes.concat(cNode);
    }

    var allEdges: MyEdge[] = [];
    for (var nodeIndex in X) {
      var cEdgeData: EdgeData = {
        source: X[nodeIndex],
        target: Y[nodeIndex],
      };
      var myEdge: MyEdge = {
        data: cEdgeData,
      };
      allEdges = allEdges.concat(myEdge);
    }

    var response: ElementsJSON = {
      edges: allEdges,
      nodes: allNodes,
    }; // beware: might need wrapping in a list or changing reducer fulfilled routine

    var responseDTO: ResponseDTO = {
      elements: response,
    };

    return responseDTO;
  }
);

export const fetchGraphDataAsync = createAppAsyncThunk(
  "counter/fetchGraphData",
  async (startingId: string) => {
    // let result: any;
    // if (startingId == "") {
    //   result = await axios.get<ResponseDTO>(
    //     `${process.env.NEXT_PUBLIC_REMOTE_ADDR_AZ}` +
    //       `:${process.env.NEXT_PUBLIC_REMOTE_PORT_AZ_1}` +
    //       `/getPickledGraphForTestUI` // todo: url builder
    //   );
    //   console.log("Ran default query without ID.");
    // } else {
    //   result = await axios.get<ResponseDTO>(
    //     //`https://test-reactui.azurewebsites.net/api/getGeneratedGraphFromStartingTweetId?code=duVrLpH607nBX82XjV_xwlOX7TNv2vemSiWHEY1jDmCkAzFuv7gN_A==&id=` +
    //     //`http://localhost:7071/api/getGeneratedGraphFromStartingTweetId?id=` +
    //     `http://localhost:5000/getGeneratedGraphFromStartingTweetId?code=duVrLpH607nBX82XjV_xwlOX7TNv2vemSiWHEY1jDmCkAzFuv7gN_A==&id=` +
    //       startingId // todo: url builder
    //   );
    //   console.log("Ran explicit query with ID.");
    // }
    // console.log("Got result...");
    // console.log(result);
    // //JSON.parse(result.data)
    // console.log(result.data.elements);
    // return result.data;
  }
);

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());

    if (currentValue % 2 === 1) {
      dispatch(twitterDataStoreSlice.actions.incrementByAmount(amount));
    }
  };
