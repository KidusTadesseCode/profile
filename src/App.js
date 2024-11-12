// App.js
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { initGA } from "./ga";

function App() {
  useEffect(() => {
    const consent = JSON.parse(localStorage.getItem("userConsent"));
    if (consent === true) initGA(process.env.REACT_APP_GA_TRACKING_ID);
  }, []);

  return (
    <RouterProvider router={AppRoutes}>
      <AppRoutes />
    </RouterProvider>
  );
}

export default App;
