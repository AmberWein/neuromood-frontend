import React, { useState } from "react";
import './ActionsHolder.css';

const ActionsHolder = () => {
  const [activity, setActivity] = useState("");
  const [mood, setMood] = useState(0);

  return (
    <div className="actions-container">
      <input
        className="input-field"
        type="text"
        placeholder="Daily Activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <div className="mood-container">
        <button className="mood-button" onClick={() => setMood(mood - 1)}>-</button>
        <span>{mood}</span>
        <button className="mood-button" onClick={() => setMood(mood + 1)}>+</button>
      </div>
      <button className="mood-button">Save</button>
    </div>
  );
};

export default ActionsHolder;