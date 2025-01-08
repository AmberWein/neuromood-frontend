// This component includes the ActionsHolder, FetchedDataContainer, and RecommendationsHolder.

import React from "react";
import ActionsHolder from '../../Components/ActionsHolder/ActionsHolder.tsx';
// import FetchedDataContainer from "./FetchedDataContainer";
// import RecommendationsHolder from "./RecommendationsHolder";
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <ActionsHolder />
      {/* <FetchedDataContainer /> */}
      {/* <RecommendationsHolder /> */}
    </div>
  );
};

export default Dashboard;