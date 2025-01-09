// Displays recommendations and daily advice.

import React from "react";
import "./RecommendationsHolder.css";

const RecommendationsHolder = () => {
  return (
    <div className="recommendations-holder">
      <div className="recommendation">
        <h4>Recommendation</h4>
        <p>Go outside for a walk</p>
      </div>
      <div className="advice">
        <h4>Daily Advice</h4>
        <p>Hello! What a beautiful day</p>
      </div>
    </div>
  );
};

export default RecommendationsHolder;