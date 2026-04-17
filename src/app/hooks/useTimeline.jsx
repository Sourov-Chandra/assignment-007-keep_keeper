"use client"

import { TimelineContext } from "@/context/timelineContext/TimelineContext";
import { useContext } from "react";

const useTimeline = () => {
  const context = useContext(TimelineContext);
  
  return context;
};

export default useTimeline