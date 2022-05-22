import React from "react";
import Navbar from "../components/navbar/navbar";
import Bell from "../components/bell/Bell";
import TableComponent from "../components/table/TableComponent";
import Toast from "../components/toast/Toast";
import Graph from "../components/graphs/Graph";
import DashBoardCard from "../components/cards/DasboardCard";
function AdminPage() {
  return (
    <div className="App">
      <h3 className="text-2xl  text-white">Dashboard</h3>

      <section className="grid gap-4 my-5 grid-cols-1 grid-flow-row md:grid-cols-6 md:grid-rows-2 md:grid-flow-col-dense md:h-96">
        <DashBoardCard title="Customers" value="10"></DashBoardCard>
        <DashBoardCard title="Customers" value="10"></DashBoardCard>
        <DashBoardCard title="Customers" value="10"></DashBoardCard>
        <DashBoardCard title="Customers" value="10"></DashBoardCard>

        <section className="h-96 md:col-start-3 md:col-end-7 -order-1">
          <Graph></Graph>
        </section>
      </section>

      <section className=" my-16 md:my-64">
        <TableComponent
          columns={["Name", "Email", "Year", "Action"]}
          keys={["name", "email", "year"]}
          rowsPerPage={8}
        ></TableComponent>
      </section>
    </div>
  );
}

export default AdminPage;
