import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Settings from "./Components/Settings/Settings";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
