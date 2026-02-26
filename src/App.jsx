import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Settings from "./Components/Settings/Settings";

function App() {
  const [userData, setUserData] = useState({
    username: "",
    image: null,
  });

  return (
    <div className="app">
      <Sidebar />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile userData={userData} />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/settings"
            element={<Settings setUserData={setUserData} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
