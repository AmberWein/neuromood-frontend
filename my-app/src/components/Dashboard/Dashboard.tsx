// This component includes the ActionsHolder, FetchedDataContainer, and RecommendationsHolder.

import React from "react";
import ActionsHolder from '../../Components/ActionsHolder/ActionsHolder.tsx';
import FetchedDataContainer from "../../Components/FetchedDataContainer/FetchedDataContainer.tsx";
import RecommendationsHolder from "../../Components/RecommendationsHolder/RecommendationsHolder.tsx";
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <ActionsHolder />
      <FetchedDataContainer />
      <RecommendationsHolder />
    </div>
  );
};

export default Dashboard;