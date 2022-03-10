import React from "react";
import { FaBell } from "react-icons/fa";
function AdminPage() {
  const tableData = [
    {
      id: 1,
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
      year: "2020",
    },
  ];
  return (
    <div className="App">
      <section className="flex justify-center h-screen">
        <nav className="bg-slate-900 w-56 p-5 flex flex-col">
          <h1 className="text-3xl font-bold text-white text-center">Worka</h1>
          <ul className="flex flex-col justify-between gap-2 flex-1 mt-52">
            <li className="px-2 py-3 text-neutral-400 text-lg font-medium rounded-md hover:bg-white hover:text-slate-900">
              <a href="/">Dashboard</a>
            </li>
            <li className="px-2 py-3 text-neutral-400 text-lg font-medium rounded-md hover:bg-white hover:text-slate-900">
              <a href="/">Resumes</a>
            </li>
            <li>
              <a
                href="/"
                className="px-2 py-3 text-neutral-400 text-lg font-medium rounded-md hover:bg-white hover:text-slate-900"
              >
                {" "}
                Advanced
              </a>
            </li>
            <li className="px-2 py-3 text-neutral-400 text-lg font-medium rounded-mdtext-neutral-400 mt-auto">
              <button>Collapse menu</button>
            </li>
          </ul>
        </nav>
        <main className="flex-1 bg-white px-32 py-4">
          <nav className="float-right w-32">
            <ul className="flex justify-between items-center px-2">
              <li>
                <FaBell className="w-5 h-5"></FaBell>
              </li>
              <li className="rounded-xl overflow-hidden w-10">
                <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" />
              </li>
            </ul>
          </nav>
          <section className="my-10">
            <h3 className="text-2xl font-bold text-neutral-900">Dashboard</h3>

            <section className="grid grid-cols-3 justify-center my-5">
              <input
                type="text"
                placeholder="Search for"
                className="border-2"
              />
              <input
                type="text"
                placeholder="Search for"
                className="border-2"
              />
              <input
                type="text"
                placeholder="Search for"
                className="border-2"
              />
            </section>

            <section className="my-64">
              <table class="border-collapse table-fixed w-full text-sm">
                <thead className="bg-gray-300">
                  <tr>
                    <th className="p-5 px-10 rounded-tl-xl text-left">Song</th>
                    <th className="py-5 text-right">Artist</th>
                    <th className="p-5 px-10 rounded-tr-xl text-right ">
                      Year
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => (
                    <tr
                      className="bg-red-400"
                      style={{ borderBottom: "1px solid white" }}
                    >
                      <td className="px-10 py-3">{item.name}</td>
                      <td className="text-right">{item.email}</td>
                      <td className="text-right px-10">{item.year}</td>
                    </tr>
                  ))}

                  <tr>
                    <td className="px-10 py-3">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Next
                      </button>
                    </td>
                    <td className="text-right">
                      <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Prev
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
        </main>
      </section>
    </div>
  );
}

export default AdminPage;
