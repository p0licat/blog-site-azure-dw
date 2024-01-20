"use client";

/* Core */
import { useState } from "react";

/* Instruments */

import { selectCount, useDispatch, useSelector } from "@/lib/redux";
import dynamic from "next/dynamic";
const Plot3d = dynamic((): any => import("./Plot3d"), { ssr: false });
import { PlotParams } from "react-plotly.js";
import React from "react";

export interface PlotProps {
  data: [];
}

export class Plot3dmain extends React.Component {
  render() {
    return <Plot3d />;
  }
}
