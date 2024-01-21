"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import { selectCount, useDispatch, useSelector } from "@/lib/redux";
import { DataGrid } from "@mui/x-data-grid";
import { useStyles } from "./styles";

import {
  relativeSelectorColumnsBooks,
  relativeSelectorRowsBooks,
} from "./data_store2";
import { TextDetailsSection } from "../TextDetailsSection/TextDetailsSection";

export const BooksGrids = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState(2);
  const classes = useStyles();

  return (
    <div>
      <div style={{ height: 600, width: "100%" }}>
        <div style={{ height: 600, width: "100%" }}>
          <div style={{ maxWidth: "1300px" }}>
            <TextDetailsSection
              headerText={"Books log"}
              headerVariant="h5"
              detailText={"Mot relevant books. Note that list is incomplete."}
              modalTitle="Details"
              modalText="Books that I solicited or borrowed at various libraries. Reading is one of my favourite activities. The relevance score is calculated based on the relevant skills from my educations that it refers to, my work experience and more."
            />
            <DataGrid
              className={classes.root2}
              rows={relativeSelectorRowsBooks()}
              columns={relativeSelectorColumnsBooks()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
