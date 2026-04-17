"use client";

import FriendsProvider from "@/context/friendsContext/FriendsContext";
import TimelineProvider from "@/context/timelineContext/TimelineContext";


export default function Providers({ children, friends }) {
  return (
    <TimelineProvider>
      <FriendsProvider initialFriends={friends}>{children}</FriendsProvider>
    </TimelineProvider>
  );
}
