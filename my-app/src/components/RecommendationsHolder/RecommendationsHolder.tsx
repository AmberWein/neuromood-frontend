import React from "react";
import './recommendationsHolder.css';

const RecommendationsHolder: React.FC = () => {
  return (
    <div className="recommendations-container">
      <div className="recommendation-item">
        <h4>Recommendation</h4>
        <p>Go outside for a walk</p>
      </div>
      <div className="recommendation-item">
        <h4>Daily Advice</h4>
        <p>Hello! lorem ipsum</p>
      </div>
    </div>
  );
};

export default RecommendationsHolder;