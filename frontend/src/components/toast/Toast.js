import { GrClose } from "react-icons/gr";
import { useState } from "react";

export default function Toast(props) {
  const [isOpen, setIsOpen] = useState(true);
  function closeToast() {
    console.log(props);
    setIsOpen(false);
    setTimeout(() => {
      props.onChange();
    }, 1000);
  }
  return (
    <div
      className={
        "w-72 px-8 py-4 relative bg-white transition-all -translate-x-full " +
        (isOpen ? "translate-x-0" : "")
      }
    >
      <h1 className="mb-3 font-bold">{props.title}</h1>
      <p style={{ minHeight: "100px" }}>{props.paragraph}</p>
      <GrClose
        className="text-2xl font-bold absolute top-2 right-2 cursor-pointer transition-transform hover:rotate-90"
        onClick={closeToast}
      ></GrClose>
    </div>
  );
}
