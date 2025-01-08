// Displays the history graph and a filter input.

import React from "react";
import './History.css';

const History: React.FC = () => {
  return (
    <div className="history-container">
      <input
        className="filter-input"
        type="text"
        placeholder="Filter"
      />
      <div className="graph-container">
        {/* Replace with an actual graph component */}
        <p>Graph Placeholder</p>
      </div>
    </div>
  );
};

export default History;