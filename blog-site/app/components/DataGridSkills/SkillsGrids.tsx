"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import { selectCount, useDispatch, useSelector } from "@/lib/redux";
import { DataGrid } from "@mui/x-data-grid";
import { useStyles } from "./styles";
import {
  relativeSelectorColumns,
  relativeSelectorColumnsFrameworks,
  relativeSelectorColumnsSkills,
  relativeSelectorRows,
  relativeSelectorRowsFrameworks,
  relativeSelectorRowsSkills,
} from "./data_store";
import {
  relativeSelectorColumnsBooks,
  relativeSelectorRowsBooks,
} from "./data_store2";
import { TextDetailsSection } from "../TextDetailsSection/TextDetailsSection";
export const SkillsGrids = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState(2);
  const classes = useStyles();

  const columns = relativeSelectorColumns();
  const rows = relativeSelectorRows();

  const columnsSkills = relativeSelectorColumnsSkills();
  const rowsSkills = relativeSelectorRowsSkills();

  const columnsSkillsFW = relativeSelectorColumnsFrameworks();
  const rowsSkillsFW = relativeSelectorRowsFrameworks();

  return (
    <div>
      <div style={{ height: 600, width: "100%" }}>
        <div style={{ height: 600, width: "100%" }}>
          <TextDetailsSection
            headerText={"University courses"}
            headerVariant="h5"
            detailText={""}
            modalTitle="Details"
            modalText="Data is taken from my data warehouse, and the weighted average is a complex formula depending on the number of credits, grade, hours required, and more."
          />
          <DataGrid className={classes.root} rows={rows} columns={columns} />
          <TextDetailsSection
            headerText={"Experience metrics with languages and tools"}
            headerVariant="h5"
            detailText={""}
            modalTitle="Details"
            modalText="Main technologies that I have actually worked with. The weighted average does not have as much to do with university, education, and courses, as it does with concrete working experience. Consider this working experience."
          />
          <DataGrid
            className={classes.root}
            rows={rowsSkills}
            columns={columnsSkills}
          />
          <TextDetailsSection
            headerText={"Experience metrics with frameworks and libraries"}
            headerVariant="h5"
            detailText={""}
            modalTitle="Details"
            modalText="As with the table above, the weight is based on concrete working experience."
          />
          <DataGrid
            className={classes.root}
            rows={rowsSkillsFW}
            columns={columnsSkillsFW}
          />
        </div>
      </div>
    </div>
  );
};
