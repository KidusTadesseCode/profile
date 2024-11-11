import Home from "../pages/Home";
import Resume from "../pages/Resume";
import TicTacToe from "../pages/TicTacToe";
import Skills from "../pages/Skills";
import GamifiedAchievementsPage from "../pages/gamified_achievements_page";
const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/resume",
    element: <Resume />,
    name: "Resume",
  },
  {
    path: "/tictactoe",
    element: <TicTacToe />,
    name: "Tic Tac Toe",
  },
  {
    path: "/skills",
    element: <Skills />,
    name: "Skills",
  },
  {
    path: "/achievements",
    element: <GamifiedAchievementsPage />,
    name: "Achievements",
  },
];

export default routes;
