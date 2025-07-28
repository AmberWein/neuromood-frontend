// Displays the history graph and a filter input.

import React, { useState, useEffect } from "react";
import axios from "axios";
import './History.css';

interface Mood {
  id: number;
  mood: string;
  timestamp: string;
}

const History: React.FC = () => {
  const [moods, setMoods] = useState<Mood[]>([]);

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/moods`)
        setMoods(response.data);
      } catch (error) {
        console.error("Error fetching moods:", error);
      }
    };

    fetchMoods();
  }, []);

  return (
    <div className="history-container">
      <h3>Mood History</h3>
      <ul>
        {moods.map((mood) => (
          <li key={mood.id}>
            Mood: {mood.mood} | Time: {new Date(mood.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;