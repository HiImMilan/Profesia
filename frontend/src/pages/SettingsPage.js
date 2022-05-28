import React from "react";
import Accordeon from "../components/accordeon/Accordeon";
import SettingsSection from "../components/accordeon/SettingsSection";
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
    {
      title: "Others",
      content: [
        {
          title: "Delete account",
          content: "",
        },
      ],
    },
  ];
  return (
    <div class="text-white">
      <h1 class="text-3xl">Settings</h1>
      <div class="px-10 mt-4">
        {settings.map((setting) => {
          return (
            <SettingsSection title={setting.title}>
              {setting.content.map((content) => {
                return (
                  <Accordeon title={content.title}>{content.content}</Accordeon>
                );
              })}
            </SettingsSection>
          );
        })}
      </div>
    </div>
  );
}
