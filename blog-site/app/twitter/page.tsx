"use client";
import Link from "next/link";
import { CytoscapeGraph } from "../components/CytoscapeGraph/CytoscapeGraph";

import styles from "../styles/layout.module.css";
import { usePathname } from "next/navigation";
import Plot3d from "../components/PlotlyVisualizations/Plot3d";
import Plot2d from "../components/PlotlyVisualizations/Plot2d";

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
      <Plot3d></Plot3d>
      <Plot2d></Plot2d>
      <CytoscapeGraph></CytoscapeGraph>
      <p>
        This page is intended to verify that Redux state is persisted across
        page navigations.
      </p>
      <Link
        className={`${styles.link} ${
          pathname === "/render1" ? styles.active : ""
        }`}
        href="/render1.html"
      >
        Visualization 1
      </Link>
    </div>
  );
}
