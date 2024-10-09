import React from "react";
import EmployeeSelectBox from "../EmployeeSelectBox/EmployeeSelectBox";
import ReportCards from "./ReportCards/ReportCards";
import RevenueChart from "./RevenueChart/RevenueChart";
import Meetings from "./Meetings/Meetings";
import InformationSidebar from "./InformationSidebar/InformationSidebar";

const DashboardProfile = () => {
  return (
    <div className="dashboard-main">
      <div className="flex flex-row gap-5 pl-4 pr-10">
        <div className="basis-1/5">
          <EmployeeSelectBox />
        </div>
      </div>
      <div className="flex flex-row gap-5 pl-4 pr-10 mt-10 h-screen">
        <div className="basis-3/4">
          <ReportCards />
          <RevenueChart />
          <Meetings />
        </div>
        <div className="basis-1/4">
          <InformationSidebar />
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
