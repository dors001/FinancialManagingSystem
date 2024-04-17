import React from "react";
import Sidebar from "../sidebar/sidebarComponent";
import ExpensesTable from "../expensesTable/expensesTableComponent";
import style from "./DashboardLayout.module.css";

const DashboardLayout = () => {
  return (
    <>
      <div className={style.dashboardContainer}>
        <Sidebar />
        <ExpensesTable />
      </div>
    </>
  );
};

export default DashboardLayout;
