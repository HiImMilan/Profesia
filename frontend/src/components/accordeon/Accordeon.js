import React from "react";
export default function Accordeon(props) {
  return (
    <>
      <div class="bg-slate-800 p-5 max-w-xl rounded-xl">
        <div class="flex justify-between items-center">
          <h2 class="text-1xl my-4">{props.title}</h2>
          <input type="checkbox" name="" id="" />
        </div>
        <small class="text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          aliquam, fugiat et in unde est accusamus sunt consequatur totam quis!
        </small>
      </div>
    </>
  );
}
