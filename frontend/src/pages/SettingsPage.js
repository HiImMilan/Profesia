import React from "react";
import Accordeon from "../components/accordeon/Accordeon";
export default function SettingsPage() {
  const settings = {
    title: "General",
    content: [
      {
        title: "Account",
        content: [
          {
            title: "Name",
            content: "",
          },
          {
            title: "Email",
            content: " ",
          },
          {
            title: "Password",
            content: "",
          },
        ],
      },
      {
        title: "Notifications",
        content: [
          {
            title: "Email",
            content: "",
          },
          {
            title: "Push Notifications",
            content: "",
          },
        ],
      },
    ],
  };
  function Recursive(data) {
    if (data.content == null) return null;
    [...data.content].forEach((item) => {
      console.log(item);
      if (item.content != null) {
        Recursive(item);
        return <Accordeon title={item.title}></Accordeon>;
      }
    });
  }
  return (
    <div class="text-white">
      <h1 class="text-3xl">Settings</h1>
      <div class="px-10 mt-4">{Recursive(settings)}</div>
    </div>
  );
}
