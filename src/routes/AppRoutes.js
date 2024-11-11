// AppRoutes.js
import { createHashRouter } from "react-router-dom";
import Layout from "../components/Layout";
import routes from "./routes";

const AppRoutes = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes.map((route) => ({
      path: route.path,
      element: route.element,
    })),
  },
]);

export default AppRoutes;
