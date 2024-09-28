import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { getChartConfig } from "./data";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CanvasChart = ({ dataPoints }) => {
  return (
    <div className="chart-wrapper">
      <CanvasJSChart options={getChartConfig(dataPoints)} />
    </div>
  );
};

export default CanvasChart;
