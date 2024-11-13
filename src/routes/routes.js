// routes.js
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import TicTacToe from "../pages/TicTacToe";
import Skills from "../pages/Skills";
import Achievements from "../pages/Achievements";
// import ImageConverter from "../components/ImageConverter";
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
    element: <Achievements />,
    name: "Achievements",
  },
];

export default routes;
