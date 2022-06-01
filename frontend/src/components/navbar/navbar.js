import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./navbar.css";
import userRoutes from "../../routes/userRoutes";
import recrutorRoutes from "../../routes/recrutorRoutes";

export default function Navbar(props) {
  let routes = null;
  console.log(props.routes);
  if (props.routes === true) {
    routes = recrutorRoutes;
  } else {
    routes = userRoutes;
  }
  const [isOpen, setIsOpen] = [...props.open];
  function collapseNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <nav
      className={
        "bg-slate-800 p-5 flex flex-col transition-all duration-200 w-56 z-10 mainNav " +
        (isOpen ? "active" : "")
      }
    >
      <h1 className="text-3xl font-bold text-white text-center">
        {isOpen ? "Worka" : "W"}
      </h1>
      <ul className="flex flex-col justify-between gap-2 flex-1 mt-52">
        {routes.map((route) => (
          <li className="px-2 py-3 text-neutral-400 text-lg font-medium rounded-md hover:bg-white hover:text-slate-900">
            <Link
              to={route.path}
              className={
                "flex items-center h-7 " + (isOpen ? "gap-2" : "justify-around")
              }
            >
              {route.icon}
              {isOpen && <span>{route.name}</span>}
            </Link>
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
