"use client";
import { createContext, useState } from "react";

export const FriendsContext = createContext(null);

const FriendsProvider = ({ initialFriends, children }) => {
  const [friends, setFriends] = useState(initialFriends);

  const data = {
    friends,
    setFriends,
  };

  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendsProvider