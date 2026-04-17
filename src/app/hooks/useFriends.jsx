"use client";
import { FriendsContext } from "@/context/friendsContext/FriendsContext";
import { useContext } from "react";

const useFriends = () => {
  const context = useContext(FriendsContext);
  
  return context;
};

export default useFriends;
