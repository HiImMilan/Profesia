import { FaChartBar, FaClipboardList, FaBars } from "react-icons/fa";
import { AiFillStar, AiOutlineMail } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";

const userRoutes = [
  {
    name: "Jobs",
    icon: <FaClipboardList />,
    path: "jobs",
  },
  {
    name: "My Applications",
    icon: <AiOutlineMail />,
    path: "applications",
  },
  {
    name: "Saved Jobs",
    icon: <AiFillStar />,
    path: "saved_jobs",
  },
  {
    name: "Settings",
    icon: <IoIosSettings />,
    path: "settings",
  },
];

export default userRoutes;
