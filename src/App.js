// frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Demo from "./pages/Demo";
import Dashboard from "./components/User/Dashboard";
import Profile from "./components/User/Profile";
import ResellerPanel from "./components/Reseller/ResellerPanel";
import FreeDemoTracker from "./components/Admin/FreeDemoTracker";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reseller-panel" element={<ResellerPanel />} />
        <Route path="/admin/free-demo" element={<FreeDemoTracker />} />
      </Routes>
    </Router>
  );
};

export default App;
