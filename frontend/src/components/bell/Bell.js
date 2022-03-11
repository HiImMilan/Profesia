import { FaBell } from "react-icons/fa";
import { useState } from "react";
export default function Bell(props) {
  const [notifications, setNotifications] = useState([{}]);

  return (
    <div className="relative">
      <FaBell
        className="w-6 h-6 cursor-pointer hover:rotate-12 transition-transform duration-75"
        onClick={props.dialog}
      ></FaBell>

      {notifications.length > 0 && (
        <label
          htmlFor=""
          className="w-4 h-4 text-xs bg-red-400 text-white rounded-full absolute text-center bottom-4 left-4"
        >
          {notifications.length}
        </label>
      )}
    </div>
  );
}
