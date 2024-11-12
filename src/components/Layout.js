// Layout.js
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import ConsentModal from "./ConsentModal";
import AnalyticsProvider from "./AnalyticsProvider";

const Layout = () => {
  const [consent, setConsent] = useState(localStorage.getItem("userConsent"));
  const [askForConsent, setAskForConsent] = useState(null);
  const handleAccept = () => {
    setConsent(true);
    localStorage.setItem("userConsent", "true");
    return window.location.reload();
  };

  const handleDecline = () => {
    setConsent(false);
    localStorage.setItem("userConsent", "false");
    return window.location.reload();
  };

  useEffect(() => {
    if (consent === null) return setAskForConsent(true);
    if (consent === true || consent === false) return setAskForConsent(false);
  }, [consent]);

  return (
    <>
      <Navigation />
      {askForConsent && (
        <ConsentModal
          handleAccept={handleAccept}
          handleDecline={handleDecline}
        />
      )}
      <AnalyticsProvider>
        <Outlet />
      </AnalyticsProvider>
    </>
  );
};

export default Layout;
