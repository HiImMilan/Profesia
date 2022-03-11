import { useState } from "react";

export default function TableRow(props) {
  let [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(!clicked);
  }
  return (
    <div
      className={
        "grid p-3 grid-cols-4 gap-8 justify-center text-center" +
        (clicked ? " bg-red-500" : "")
      }
      onClick={handleClick}
    >
      {props.values.map((value) => (
        <div>{value}</div>
      ))}
    </div>
  );
}
