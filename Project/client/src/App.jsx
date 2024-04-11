import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addusers from "./pages/AddusersPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Addusers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/project" element={<TestPage />} />
        <Route path="/inventory" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
