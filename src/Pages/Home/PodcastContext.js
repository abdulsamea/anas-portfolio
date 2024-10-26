// PodcastContext.js
import React, { createContext, useContext, useState } from "react";

const PodcastContext = createContext();

export const PodcastProvider = ({ children }) => {
  const [activePodcast, setActivePodcast] = useState(null);

  return (
    <PodcastContext.Provider value={{ activePodcast, setActivePodcast }}>
      {children}
    </PodcastContext.Provider>
  );
};

export const usePodcast = () => useContext(PodcastContext);
