// ga.js
import ReactGA from "react-ga4";

export const initGA = (measurementId) => {
  ReactGA.initialize(measurementId, {
    gaOptions: {
      anonymizeIp: true,
    },
  });
};

export const trackPage = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};

export const trackButton = (buttonName) => {
  ReactGA.event({
    category: "User",
    action: `Clicked the ${buttonName}`,
  });
};
