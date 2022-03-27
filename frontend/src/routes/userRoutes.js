import { FaChartBar, FaClipboardList, FaBars } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const userRoutes = [
  {
    name: "My Applications",
    icon: <FaChartBar />,
    path: "/applications",
  },
  {
    name: "Saved Jobs",
    icon: <AiFillStar />,
    path: "/saved_jobs",
  },
  {
    name: "Settings",
    icon: <FaClipboardList />,
    path: "/settings",
  },
];

export default userRoutes;
