import React from "react";
import { FaBell } from "react-icons/fa";
import Navbar from "../components/navbar/navbar";

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
        <Navbar></Navbar>
        <main className="flex-1 bg-white px-32 py-4">
          <nav className="float-right w-48">
            <ul className="flex justify-around items-center px-2">
              <li>
                <div className="relative">
                  <FaBell className="w-6 h-6 cursor-pointer hover:rotate-12 transition-transform duration-75"></FaBell>
                  <label
                    htmlFor=""
                    className="w-4 h-4 text-xs bg-red-400 text-white rounded-full absolute text-center bottom-4 left-4"
                  >
                    1
                  </label>
                </div>
              </li>
              <li className="rounded-xl overflow-hidden w-10 flex justify-center items-center flex-1">
                <div className="font-bold mx-5">Test Test</div>
                <img
                  className="w-10 h-10"
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                />
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
