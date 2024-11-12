import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPage } from "../ga";

export default function AnalyticsProvider({ children }) {
  const location = useLocation();
  useEffect(() => {
    const userConsent = JSON.parse(localStorage.getItem("userConsent"));
    console.log("userConsent", userConsent);
    if (!userConsent) return;
    const currentPath = location.pathname + location.search;
    trackPage(currentPath);
    return;
  }, [location]);

  return children;
}
