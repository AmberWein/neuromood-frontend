// Manages inputs and buttons.

import React, { useState } from "react";
import axios from "axios";
import './ActionsHolder.css';

const ActionsHolder = () => {
  const [activity, setActivity] = useState("");
  const [mood, setMood] = useState(0);

  const saveMood = async () => {
    try {
      const response = await axios.post("http://localhost:8000/mood-logs/", {
        mood: mood.toString(),
      });
      console.log("Mood saved:", response.data);
      alert("Mood saved successfully!");
    } catch (error) {
      console.error("Error saving mood:", error);
      alert("Failed to save mood.");
    }
  };

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
      <button className="mood-button" onClick={saveMood}>Save</button>
    </div>
  );
};

export default ActionsHolder;