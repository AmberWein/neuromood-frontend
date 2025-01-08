import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar.tsx';
import Dashboard from './Components/Dashboard/Dashboard.tsx';
import History from './Components/History/History.tsx';

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