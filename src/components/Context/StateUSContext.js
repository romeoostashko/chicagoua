import React from "react";

const StateUSContext = React.createContext({
  ua: [
    {
      name: "Алабама",
      abbreviation: "AL",
    },
  ],
  usa: [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
  ],
  langues: "ua",
});

export default StateUSContext;
