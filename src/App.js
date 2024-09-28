import "./App.css";
import Chart from "./Chart";
import Tabs from "./components/Tabs";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <Tabs
          className="tabs-class"
          defaultActive='chart'
          items={[
            { id: "summary", title: "Summary", children: <div>Summary</div> },
            { id: "chart", title: "Chart", children: <Chart /> },
            {
              id: "statistics",
              title: "Statistics",
              children: <div>Statistics</div>,
            },
            {
              id: "analysis",
              title: "Analysis",
              children: <div>Analysis</div>,
            },
            {
              id: "settings",
              title: "Settings",
              children: <div>Settings</div>,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
