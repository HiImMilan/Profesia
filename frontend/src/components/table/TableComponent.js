import { useState } from "react";
import TableRow from "./TableRow";
export default function TableComponent(props) {
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      name: "John",
      email: "dasas",
      year: "2020",
    },
    {
      id: 2,
      name: "John Doe",
      email: "dasas",
      year: "2020",
    },
    {
      id: 2,
      name: "John Doe",
      email: "dasas",
      year: "2020",
    },
    {
      id: 2,
      name: "John Doe",
      email: "dasas",
      year: "2021",
    },
    {
      id: 2,
      name: "John Doe",
      email: "dasas",
      year: "2022",
    },
    {
      id: 2,
      name: "John Doe",
      email: "dasas",
      year: "2023",
    },
  ]);

  const expandStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "80%",
    height: "80%",
    transform: "translate(-50%, -50%)",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100vw",
      height: "100vh",
      transform: "translate(-50%, -50%)",
      background: "rgba(0, 0, 0, 1)",
    },
  };
  function expandTable() {
    setExpanded(!expanded);
  }
  function createRows() {
    let elements = [];
    for (let index = 0; index < data.length; index++) {
      if (index >= props.rowsPerPage) {
        return elements;
      }
      const item = data[index];
      elements.push(
        <TableRow
          values={Object.keys(item)
            .filter((key) => props.keys.includes(key))
            .map((key) => item[key])}
        />
      );
    }
    return elements;
  }
  return (
    <section
      className={
        "bg-slate-700 text-neutral-400 rounded-lg md:w-2/3 overflow-x-auto"
      }
      style={expanded ? expandStyle : {}}
    >
      <div className="p-5">
        <button className="text-red-500 float-right" onClick={expandTable}>
          {" "}
          Expand{" "}
        </button>
        <h1 className="text-xl w-1/2">Top sellings</h1>
      </div>
      <div className="grid p-3 grid-cols-4 gap-8 bg-slate-800 justify-center">
        {props.columns.map((column) => (
          <div className="text-white text-center cursor-pointer">{column}</div>
        ))}
      </div>
      <div className="flex flex-col">{createRows()}</div>
    </section>
  );
}
