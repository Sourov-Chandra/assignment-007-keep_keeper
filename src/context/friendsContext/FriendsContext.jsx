"use client";
import { createContext, useState, useEffect } from "react";

export const FriendsContext = createContext(null);

const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/friends")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data.friends);
        setLoading(false);
      });
  }, []);

  return (
    <FriendsContext.Provider value={{ friends, setFriends, loading }}>
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendsProvider;
