import CanvasJSReact from "@canvasjs/react-charts";
const CanvasJS = CanvasJSReact.CanvasJS;

export const getChartConfig = (dataPoints) => {
  return {
    animationEnabled: true,
    theme: "light2",
    axisX: {
      valueFormatString: "DD MMM",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    axisY: {
      valueFormatString: "##0.00",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
        labelFormatter: function (e) {
          return "$" + CanvasJS.formatNumber(e.value, "##0.00");
        },
      },
    },
    toolTip: {
      fontColor: "#FFF",
      cornerRadius: 4,
      backgroundColor: "#4B40EE",
      Content: "{x} : {y}",
    },
    data: [
      {
        type: "area",
        color: "#4B40EE",
        markerSize: 0,
        xValueFormatString: "DD MMM",
        yValueFormatString: "$##0.00",
        dataPoints: dataPoints,
      },
    ],
  };
};
export const rangeBtnData = [
  {
    id: "1d",
    label: "1d",
  },
  {
    id: "3d",
    label: "3d",
  },
  {
    id: "1m",
    label: "1m",
  },
  {
    id: "6m",
    label: "6m",
  },
  {
    id: "1y",
    label: "1y",
  },
  {
    id: "5y",
    label: "5y",
  },
  {
    id: "max",
    label: "max",
  },
];
