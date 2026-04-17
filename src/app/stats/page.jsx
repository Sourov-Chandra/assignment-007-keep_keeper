"use client";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import useTimeline from "@/app/hooks/useTimeline";

const COLORS = {
  Call: "#378ADD",
  Text: "#1D9E75",
  Video: "#D85A30",
};

const StatsPage = () => {
  const { entries } = useTimeline();

  const counts = entries.reduce(
    (acc, e) => {
      if (acc[e.type] !== undefined) acc[e.type]++;
      return acc;
    },
    { Call: 0, Text: 0, Video: 0 },
  );

  const data = Object.entries(counts).map(([name, value]) => ({ name, value }));
  const total = entries.length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 my-10">
          Friendship Analytics
        </h1>

        {total === 0 ? (
          <p className="text-gray-400 text-xl mt-16 flex justify-center">
            No entries yet.
          </p>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 ">
            <p className="text-gray-600 mb-8 text-left">By interactions type</p>
            <div className="flex flex-col items-center">
              <PieChart width={320} height={320}>
                <Pie
                  data={data}
                  innerRadius={90}
                  outerRadius={140}
                  paddingAngle={4}
                  cornerRadius={6}
                  dataKey="value"
                >
                  {data.map((entry) => (
                    <Cell key={entry.name} fill={COLORS[entry.name]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [
                    `${value} (${Math.round((value / total) * 100)}%)`,
                    name,
                  ]}
                />
                <Legend />
              </PieChart>

              <div className="flex gap-6 mt-4">
                {data.map((entry) => (
                  <div key={entry.name} className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-slate-800">
                      {entry.value}
                    </span>
                    <span className="text-sm text-gray-400">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;
