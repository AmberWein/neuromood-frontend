import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.tsx';  // Make sure NavBar is imported
import Dashboard from './components/Dashboard/Dashboard.tsx';  // Assuming Dashboard is also part of the app
import History from './components/History/History.tsx';  // Assuming History is also part of the app

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="App">
      <header className="App-header">
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "history" && <History />}
      </header>
    </div>
  );
}

export default App;