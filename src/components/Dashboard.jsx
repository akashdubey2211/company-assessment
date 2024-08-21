import React, { useState, useEffect } from "react";
import FertilizerTable from "./FertilizerTable";
import FertilizerGraph from "./FertilizerGraph";
import TopFertilizers from "./TopFertilizers";
import { fertilizerData, graphData } from "../dummyData";
import "../assests/styles.css";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [fertilizerDataState, setFertilizerDataState] = useState([]);
  const [graphDataState, setGraphDataState] = useState([]);

  useEffect(() => {
    setFertilizerDataState(fertilizerData);
    setGraphDataState(graphData);
  }, []);

  return (
    <div className="card-container">
      <div className="card">
        <div>
          <div>
            <FertilizerTable rowData={fertilizerDataState} />
          </div>
        </div>
      </div>
      <div className="card">
        <FertilizerGraph data={graphDataState} />
      </div>
      <div className="card">
        <h3>Top 5 Most Required Fertilizers</h3>
        <TopFertilizers data={fertilizerDataState} type="most" />
      </div>
      <div className="card">
        <h3>Top 5 Least Available Fertilizers</h3>
        <TopFertilizers data={fertilizerDataState} type="least" />
      </div>
    </div>
  );
};

export default Dashboard;
