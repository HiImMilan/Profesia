import React from "react";
import { FaChartBar, FaClipboardList, FaBars } from "react-icons/fa";
export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(true);

  // recruter routes
  const routes = [
    {
      name: "Dashboard",
      icon: <FaChartBar />,
      path: "/dashboard",
    },
    {
      name: "Jobs",
      icon: <FaClipboardList />,
      path: "/jobs",
    },
    {
      name: "Candidates",
      icon: <FaClipboardList />,
      path: "/candidates",
    },
  ];

  // user routes
  const userRoutes = [
    {
      name: "My Applications",
      icon: <FaChartBar />,
    },
    {
      name: "Settings",
      icon: <FaClipboardList />,
    },
    
  ];

  function collapseNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <nav
      className="bg-slate-900 p-5 flex flex-col transition-all duration-200 w-56"
      style={!isOpen ? { maxWidth: "80px" } : { maxWidth: "300px" }}
    >
      <h1 className="text-3xl font-bold text-white text-center">
        {isOpen ? "Worka" : "W"}
      </h1>
      <ul className="flex flex-col justify-between gap-2 flex-1 mt-52">
        {routes.map((route) => (
          <li className="px-2 py-3 text-neutral-400 text-lg font-medium rounded-md hover:bg-white hover:text-slate-900">
            <a href={route.path} className="flex items-center gap-2 h-7">
              {route.icon}
              {isOpen && <span>{route.name}</span>}
            </a>
          </li>
        ))}
        <li className="px-2 py-3 text-neutral-400 text-lg font-medium rounded-mdtext-neutral-400 mt-auto">
          <button onClick={collapseNavbar}>
            {isOpen ? "Collapse menu" : <FaBars className="rotate-180" />}
          </button>
        </li>
      </ul>
    </nav>
  );
}
