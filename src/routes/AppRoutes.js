// AppRoutes.js
import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import GamifiedAchievementsPage from "../pages/gamified_achievements_page";
import TicTacToe from "../pages/TicTacToe";
import Resume from "../pages/Resume";
import Layout from "../components/Layout";

const AppRoutes = createHashRouter([
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
