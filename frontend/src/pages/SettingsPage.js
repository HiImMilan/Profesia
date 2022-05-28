import React from "react";
import Accordeon from "../components/accordeon/Accordeon";
export default function SettingsPage() {
  const settings = [
    {
      title: "General",
      content: [
        {
          title: "Account",
          content: [
            {
              title: "Name",
              content: "John Doe",
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
    },
  ];
  return (
    <div class="text-white">
      <h1 class="text-3xl mb-10">Settings</h1>
      <Accordeon title={"Enable email notifications"}></Accordeon>
    </div>
  );
}
