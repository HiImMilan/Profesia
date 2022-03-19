import React from "react";

function SkeletonCard() {
  return (
    <div class="animate-pulse overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
      <a href="#" class="w-full block h-full">
        <img
          alt="cover"
          src="/skeletonImageSource.png"
          class="max-h-40 w-full object-cover"
        />
        <div class="bg-white dark:bg-gray-800 w-full p-4">
          <p class="bg-gray-500 w-36 h-3 rounded-md font-medium"></p>
          <p class="bg-gray-500 w-45 h-7 mt-4 rounded-md text-xl font-medium mb-2"></p>
          <p class="bg-gray-500 w-45 h-20 mt-4 rounded-md">
          </p>
          <div class="flex flex-wrap justify-starts items-center mt-4">
            
          </div>
          <div class="flex items-center mt-4">
            <a href="#" class="block relative">
              <img
                alt="profil"
                src="/skeletonImageSource.png"
                class="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div class="flex flex-col justify-between ml-4 text-sm">
              <p class="text-gray-800 dark:text-white">
              <div class="w-36 bg-gray-500 h-6 rounded-md ">
             </div>
              </p>
              <p class="text-gray-400 dark:text-gray-300">
                <div class="w-20 bg-gray-500 mt-2 h-4 rounded-md " > </div>
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}


/* 

<div class="animate-pulse max-h-40 w-full object-cover">
          <div class="w-12 bg-gray-300 h-12 rounded-full ">
          </div>
          <div class="flex flex-col space-y-3">
            <div class="w-36 bg-gray-300 h-6 rounded-md ">
            </div>
            <div class="w-24 bg-gray-300 h-6 rounded-md ">
            </div>
          </div>
        </div>

*/
export default SkeletonCard;