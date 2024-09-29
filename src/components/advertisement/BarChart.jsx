"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const BarChartComponent = ({ metric }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={340} height={240} data={metric}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="users" className="fill-blue-500" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
