import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import CanvasChart from "./CanvasChart";
import { mockFetch } from "../api";

const Chart = () => {
  const [activeRange, setActiveRange] = useState("1d");
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    mockFetch("/api/data").then((response) =>
      response.json().then((data) => {
        console.log("", data);
        setDataPoints(data);
      })
    );
  }, [activeRange]);

  console.log("dataPoints", dataPoints);

  return (
    <div>
      <Buttons activeRange={activeRange} setActiveRange={setActiveRange} />
      <CanvasChart activeRange={activeRange} dataPoints={dataPoints} />
    </div>
  );
};

export default Chart;
