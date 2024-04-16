import React from "react";
import Sidebar from "../sidebar/sidebarComponent";
import ExpensesTable from "../expensesTable/expensesTableComponent";

const DashboardLayout = () => {
  return (
    <>
      <div className="m-6 dashboard-container flex flex-col ">
        <Sidebar></Sidebar>
        <ExpensesTable></ExpensesTable>
      </div>
    </>
  );
};

export default DashboardLayout;
