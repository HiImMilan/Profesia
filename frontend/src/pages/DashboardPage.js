import React from "react";
import Navbar from "../components/navbar/navbar";
import Bell from "../components/bell/Bell";
import TableComponent from "../components/table/TableComponent";
import Toast from "../components/toast/Toast";
import Graph from "../components/graphs/Graph";
import DashBoardCard from "../components/cards/DasboardCard";
import { DataGrid } from "@mui/x-data-grid";

function AdminPage() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <div className="App">
      <h3 className="text-2xl  text-white">Dashboard</h3>

      <section className="grid gap-4 my-5 grid-cols-1 grid-flow-row md:grid-cols-6 md:grid-rows-2 md:grid-flow-col-dense md:h-96">
        <DashBoardCard title="Currently listed jobs" value="10"></DashBoardCard>
        <DashBoardCard title="Applications" value="10"></DashBoardCard>
        <DashBoardCard title="Customers" value="10"></DashBoardCard>
        <DashBoardCard title="Customers" value="10"></DashBoardCard>

        <section className="h-96 md:col-start-3 md:col-end-7 -order-1">
          <Graph></Graph>
        </section>
      </section>

      <section className=" my-16 md:my-64">
        <div class="h-96 w-1/2 text-white">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "primary.light",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default AdminPage;
