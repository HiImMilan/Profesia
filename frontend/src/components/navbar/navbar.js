import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChartBar, FaClipboardList, FaBars } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";

import { useSwipeable } from "react-swipeable";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      console.log("User Swiped!", eventData);
      setIsOpen(!isOpen);
    },
    ...{
      delta: 10, // min distance(px) before a swipe starts. *See Notes*
      preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
      trackTouch: true, // track touch input
      trackMouse: false, // track mouse input
      rotationAngle: 0, // set a rotation angle
    },
  });
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
    {
      name: "Settings",
      icon: <IoIosSettings />,
      path: "/settings",
    },
  ];

  // user routes
  const userRoutes = [
    {
      name: "My Applications",
      icon: <FaChartBar />,
    },
    {
      name: "Saved Jobs",
      icon: <AiFillStar />,
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
    <div
      className="absolute top-0 left-0 z-20 w-screen h-screen "
      {...handlers}
    >
      <nav
        className="bg-slate-800 p-5 flex flex-col transition-all ease-in-out duration-500 w-56 h-screen relative"
        style={
          !isOpen
            ? { maxWidth: "80px", left: "-100%" }
            : { maxWidth: "300px", left: "0" }
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
                  "flex items-center h-7 " +
                  (isOpen ? "gap-2" : "justify-around")
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
    </div>
  );
}
