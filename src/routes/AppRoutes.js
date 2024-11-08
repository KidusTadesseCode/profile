import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "../components/Navigation";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import GamifiedAchievementsPage from "../pages/gamified_achievements_page";
import TicTacToe from "../pages/TicTacToe.js";
import Resume from "../pages/Resume.js";

const AppRoutes = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/achievements" element={<GamifiedAchievementsPage />} />
      <Route path="/tic-tac-toe" element={<TicTacToe />} />
    </Routes>
  </Router>
);

export default AppRoutes;
