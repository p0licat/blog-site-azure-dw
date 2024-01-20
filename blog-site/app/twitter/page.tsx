"use client";
import Link from "next/link";
import { CytoscapeGraph } from "../components/CytoscapeGraph/CytoscapeGraph";

import styles from "../styles/layout.module.css";
import { usePathname } from "next/navigation";
import Plot3d from "../components/PlotlyVisualizations/Plot3d";

export default function VerifyPage() {
  const pathname = usePathname();
  return (
    <>
      <h1>X page</h1>
      <Plot3d></Plot3d>
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
    </>
  );
}
