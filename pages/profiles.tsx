import React from "react";
import { Sidebar } from "../components/Sidebar";
import AccountMenu from "../components/AccountMenu";
import DashNav from "../components/DashNav";
import DashNavBar from "../components/DashNavBar";
const Profiles = () => {
  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <DashNav />
      </div>
    </div>
  );
};

export default Profiles;
