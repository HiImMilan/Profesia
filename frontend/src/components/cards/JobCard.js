import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";

function JobCard(props) {
  const handleContextMenu = (e) => {
    e.preventDefault();
    console.log("context menu");
  };

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
  });
  return (
    <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
      <a href="#" class="w-full block h-full">
        <img
          alt="cover"
          src={props.coverImage}
          class="max-h-40 w-full object-cover"
        />
        <div class="bg-white dark:bg-gray-800 w-full p-4">
          <p class="text-indigo-500 text-md font-medium">{props.advertiser}</p>
          <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
            {props.title}
          </p>
          <p class="text-gray-400 dark:text-gray-300 font-light text-md">
            {props.description}
          </p>
          <div class="flex flex-wrap justify-starts items-center mt-4">
            {props.chips.map((tag) => (
              <Chip label={tag.name} />
            ))}
          </div>
          <div class="flex items-center mt-4">
            <a href="#" class="block relative">
              <img
                alt="profil"
                src={props.profilePicture}
                class="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div class="flex flex-col justify-between ml-4 text-sm">
              <p class="text-gray-800 dark:text-white">
                {props.advertiserName}
              </p>
              <p class="text-gray-400 dark:text-gray-300">
                {props.addedDate} - {props.remainingTime} days left
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

/* hore ako tags: 
{props.Tags.map((tag) => (
<Chip label="{tag}" variant="outlined" /> )}
*/

export default JobCard;
