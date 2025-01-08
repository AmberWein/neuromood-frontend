// This is the parent component that manages navigation between Dashboard and History.


import React, { useState } from "react";
import NavBar from "../NavBar/NavBar.tsx";
import Dashboard from "../Dashboard/Dashboard.tsx";
import History from "../History/History.tsx";
import './mainComponent.css';

const MainComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  return (
    <div className="main-container">
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "dashboard" && <Dashboard />}
      {activeTab === "history" && <History />}
    </div>
  );
};

export default MainComponent;