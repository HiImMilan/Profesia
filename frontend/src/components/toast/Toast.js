import { GrClose } from "react-icons/gr";
import { useState } from "react";

export default function Toast() {
  const [isOpen, setIsOpen] = useState(false);

  function closeToast() {
    setIsOpen(false);
  }
  return (
    <div
      className={
        "w-72 px-8 py-4 fixed top-0 left-0 bg-white transition-transform -translate-x-full " +
        (isOpen ? "translate-x-0" : "")
      }
    >
      <h1>Test</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, rerum?
        Placeat, reiciendis quam. Quos commodi, reiciendis cumque
      </p>
      <GrClose
        className="text-2xl font-bold absolute top-2 right-2 cursor-pointer transition-transform hover:rotate-90"
        onClick={closeToast}
      ></GrClose>
    </div>
  );
}
