import React, { useState } from "react";
import RevenueCard from "./RevenueCard/RevenueCard";
import ChartCard from "./ChartCard/ChartCard";

interface Report {
  id: number;
  title: string;
  amount: string;
  percentage: string;
}

const RevenueChart = () => {
  const [reports, setReports] = useState<Report[]>([
    {
      id: 1,
      title: "New Clients",
      amount: "54",
      percentage: "+18.7",
    },
    {
      id: 2,
      title: "invoice overdue",
      amount: "6",
      percentage: "-2.7",
    },
  ]);

  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-col basis-1/3">
        {reports.map((item) => {
          return (
            <RevenueCard key={item.id} item={item} />
          );
        })}
      </div>
      <div className="basis-2/3 h-full">
        <ChartCard />
      </div>
    </div>
  );
};

export default RevenueChart;
