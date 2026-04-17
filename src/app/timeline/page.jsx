"use client";
import useTimeline from "@/app/hooks/useTimeline";
import { TbPhoneCall } from "react-icons/tb";
import { LuMessageSquareText } from "react-icons/lu";
import { PiVideoCameraBold } from "react-icons/pi";
import { useState } from "react";

const filterBy = ["All", "Call", "Text", "Video"];

const typeIcon = {
  Call: <TbPhoneCall className="w-6 h-6 text-gray-600" />,
  Text: <LuMessageSquareText className="w-6 h-6 text-gray-600" />,
  Video: <PiVideoCameraBold className="w-6 h-6 text-gray-600" />
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const TimelinePage = () => {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? entries : entries.filter((e) => e.type === filter);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Timeline</h1>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-6 w-64 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-500 bg-white shadow-sm 
          focus:outline-none"
        >
          {filterBy.map((opt) => (
            <option key={opt} value={opt}>
              {opt === "All" ? "Filter timeline" : opt}
            </option>
          ))}
        </select>

        <div className="space-y-3">
          {filtered.length === 0 ? (
            <p className="text-gray-400 text-xl mt-10 md:mt-16 flex justify-center items-center">
              No entries yet.
            </p>
          ) : (
            filtered.map((entry) => (
              <div
                key={entry.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  {typeIcon[entry.type]}
                </div>
                <div>
                  <p className="text-sm text-slate-800">
                    <span className="font-bold text-xl">{entry.type}</span>
                    <span className="text-gray-500 text-lg font-bold">
                      {" "}
                      with {entry.friendName}
                    </span>
                  </p>
                  <p className="text-xs text-slate-400">
                    {formatDate(entry.date)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
