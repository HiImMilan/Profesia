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
      <section className="flex justify-center h-screen max-h-screen">
        <Navbar></Navbar>
        <main className="flex-1 bg-slate-900 px-8 py-4 overflow-y-auto md:px-32">
          <nav className="float-right w-48">
            <ul className="flex justify-around items-center px-2 text-white">
              <li>
                <Bell></Bell>
              </li>
              <li className="rounded-xl overflow-hidden w-10 flex justify-center items-center flex-1 ">
                <div className="font-bold mx-5">Test Test</div>
                <img
                  className="w-10 h-10"
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                />
              </li>
            </ul>
          </nav>
          <section className="my-10">
            <h3 className="text-2xl  text-white">Dashboard</h3>

            <section className="grid gap-4 my-5 h-96 max-h-96 grid-cols-1 grid-flow-row md:grid-cols-6 md:grid-rows-2 md:grid-flow-col-dense">
              <DashBoardCard title="Customers" value="10"></DashBoardCard>
              <DashBoardCard title="Customers" value="10"></DashBoardCard>
              <DashBoardCard title="Customers" value="10"></DashBoardCard>
              <DashBoardCard title="Customers" value="10"></DashBoardCard>

              <section className="h-96 md:col-start-3 md:col-end-7">
                <Graph></Graph>
              </section>
            </section>

            <section className="my-64">
              <TableComponent
                columns={["Name", "Email", "Year", "Action"]}
                keys={["name", "email", "year"]}
                rowsPerPage={8}
              ></TableComponent>
            </section>
          </section>
        </main>
      </section>

      <Toast></Toast>
    </div>
  );
}

export default AdminPage;
