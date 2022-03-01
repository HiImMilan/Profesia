import React from "react";

function JobCard(props) {
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
            {/*{props.Tags} is an array of tags. Loop over it and add tags*/}
            {props.Tags.map((tag) => (
              <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                {tag}
              </div>
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

export default JobCard;
