import { FaChartBar, FaClipboardList } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
const recrutorRoutes = [
  {
    name: "Dashboard",
    icon: <FaChartBar />,
    path: "/dashboard",
  },
  {
    name: "Jobs",
    icon: <FaClipboardList />,
    path: "jobs",
  },
  {
    name: "Settings",
    icon: <IoIosSettings />,
    path: "settings",
  },
];
export default recrutorRoutes;
