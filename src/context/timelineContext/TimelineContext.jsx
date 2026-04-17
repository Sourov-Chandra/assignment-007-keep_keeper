"use client"
import { createContext, useState } from "react";

export const TimelineContext = createContext();


const TimelineProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const addEntry = (friend, type) => {
    const newEntry = {
      id: Date.now(),
      friendId: friend.id,
      friendName: friend.name,
      friendPicture: friend.picture,
      type,
      date: new Date().toISOString(),
    };
    setEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};


export default TimelineProvider; 
