"use client";

import { useState } from "react";
import BarChartComponent from "./BarChart";
import InsightsMessage from "./InsightsMessage";

const Insights = () => {
  const month = [
    // { name: "Jan", users: 4000 },
    { name: "Feb", users: 3000 },
    { name: "Mar", users: 2000 },
    { name: "Apr", users: 2780 },
    { name: "May", users: 1890 },
    { name: "Jun", users: 2390 },
    { name: "Jul", users: 3490 },
  ];

  const day = [
    { name: "Sun", users: 2390 },
    { name: "Mon", users: 3700 },
    { name: "Tue", users: 4000 },
    { name: "Wed", users: 2200 },
    { name: "Thu", users: 2780 },
    { name: "Fri", users: 1590 },
    { name: "Sat", users: 3490 },
  ];

  const week = [
    { name: "1st Week", users: 2510 },
    { name: "2nd Week", users: 1750 },
    { name: "3rd Week", users: 2180 },
    { name: "4th Week", users: 1590 },
    { name: "5th Week", users: 3230 },
  ];

  const [mapMetric, setMapMetric] = useState(month);
  const [insightName, setInsightName] = useState("6 months");

  const handleChange = (e) => {
    setInsightName(changeInsight(e.target.value));
    setMapMetric(JSON.parse(e.target.value));
  };

  const changeInsight = (map) => {
    if (map === JSON.stringify(month)) {
      return "6 months";
    } else if (map === JSON.stringify(week)) {
      return "5 week";
    } else if (map === JSON.stringify(day)) {
      return "7 days";
    }
  };

  return (
    <div className="xl:max-h-[316px] 2xl:max-h-[400px] flex-1 2xl:text-xl flex flex-col">
      <h2 className="font-bold grow-0 shrink-0 2xl:text-2xl">Insights</h2>
      <div className="flex justify-between grow-0 shrink-0">
        <InsightsMessage period={insightName} />
        <select
          defaultValue="months"
          className="text-xs 2xl:text-lg rounded-full shadow-md hover:shadow-xl bg-white font-semibold hover:scale-105 transition-all duration-200"
          onChange={(e) => handleChange(e)}
        >
          <option value={JSON.stringify(month)}>Last 6 months</option>
          <option value={JSON.stringify(week)}>Last 5 weeks</option>
          <option value={JSON.stringify(day)}>Last 7 days</option>
        </select>
      </div>
      <div className="pt-4 px-2 h-64 2xl:h-80">
        <BarChartComponent metric={mapMetric} />
      </div>
    </div>
  );
};

export default Insights;
