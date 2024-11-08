// src/routes/AppRoutes.js
import { createBrowserRouter } from "react-router-dom";
// import Navigation from "../components/Navigation";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import GamifiedAchievementsPage from "../pages/gamified_achievements_page";
import TicTacToe from "../pages/TicTacToe.js";
import Resume from "../pages/Resume.js";
import Layout from "../components/Layout.js";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/tictactoe",
        element: <TicTacToe />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/achievements",
        element: <GamifiedAchievementsPage />,
      },
    ],
  },
]);

export default AppRoutes;
