import React from "react";
export default function SettingsSection(props) {
  return (
    <fieldset class="border-2 border-slate-400 rounded-lg p-5 mb-10">
      <legend class="text-2xl">{props.title}</legend>
      {props.children}
    </fieldset>
  );
}
