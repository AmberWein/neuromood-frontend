// Handles tab navigation.

import React from "react";
import './NavBar.css';

interface NavBarProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="navbar">
      <button
        className={`tab-button ${activeTab === "dashboard" ? "active-tab" : "inactive-tab"}`}
        onClick={() => setActiveTab("dashboard")}
      >
        Dashboard
      </button>
      <button
        className={`tab-button ${activeTab === "history" ? "active-tab" : "inactive-tab"}`}
        onClick={() => setActiveTab("history")}
      >
        History
      </button>
    </div>
  );
};

export default NavBar;