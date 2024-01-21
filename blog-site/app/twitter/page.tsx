"use client";
import Link from "next/link";
import { CytoscapeGraph } from "../components/CytoscapeGraph/CytoscapeGraph";

import styles from "../styles/layout.module.css";
import { usePathname } from "next/navigation";
import Plot3d from "../components/PlotlyVisualizations/Plot3d";
import Plot2d from "../components/PlotlyVisualizations/Plot2d";
import { TextDetailsSection } from "../components/TextDetailsSection/TextDetailsSection";

export default function VerifyPage() {
  const pathname = usePathname();
  return (
    <div
      className="main"
      style={{
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>X page</h1>
      <TextDetailsSection
        headerText={"Twitter Likes visualization 1"}
        headerVariant="h5"
        detailText={
          "Note that data is incomplete. I am using a subset of likes."
        }
        modalTitle="Details"
        modalText="My twitter likes are clustered in this 3d projection. Try to drag it around. It is build with Plotly, and uses some artificial intelligence techniques."
      />
      <Plot3d></Plot3d>
      <TextDetailsSection
        headerText={"Twitter likes visualization 2"}
        headerVariant="h5"
        detailText={""}
        modalTitle="Details"
        modalText="This 2d version of the projection above contains the same data, but loses a dimension."
      />
      <Plot2d></Plot2d>
      <TextDetailsSection
        headerText={"Dynamic search of Tweets"}
        headerVariant="h5"
        detailText={""}
        modalTitle="Details"
        modalText="Try using the search! A graph of related tweets will be built. It also uses some AI algorithms that I learned in 2021 at university."
      />
      <CytoscapeGraph></CytoscapeGraph>
      <p>Full screen visualizations will be added soon.</p>
    </div>
  );
}
