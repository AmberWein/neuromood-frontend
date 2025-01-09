// Displays weather and air quality information.

import React from "react";
import './FetchedDataContainer.css';

const FetchedDataContainer: React.FC = () => {
  return (
    <div className="fetched-data-container">
      <div className="weather">
        <h3>Weather</h3>
        <p>Sunny</p>
        <p>7</p>
      </div>
      <div className="air-quality">
        <h3>Air Quality</h3>
        <p>120</p>
      </div>
    </div>
  );
};

export default FetchedDataContainer;