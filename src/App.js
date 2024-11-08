import { RouterProvider } from "react-router-dom";
import PageRoutes from "./Global/Setting/PageRoutes";
import BrowserRouter from "./Global/Outlet/BrowserRouter";

function App() {
  return <RouterProvider router={BrowserRouter(PageRoutes)} />;
}

export default App;
