"use client";
import { FriendsContext } from "@/context/friendsContext/FriendsContext";
import { useContext } from "react";

const useFriends = () => {
  return useContext(FriendsContext);
};

export default useFriends;
