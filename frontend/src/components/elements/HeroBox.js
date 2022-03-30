import React from "react";

let LandingDiv = () => {
  return (
    <>
      <div class="w-full flex flex-row items-center p-2 justify-between bg-white shadow-xs dark:bg-gray-800">
        <div class="ml-8 text-lg text-white hidden md:flex">WORKA</div>
        <div class="flex items-center mr-8 hidden md:flex">
          <a
            href="./login"
            type="button"
            class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Log in / Sign up
          </a>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 ">
        <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-40 lg:px-8 z-20">
          <h2 class="font-extrabold text-black dark:text-white md:text-5xl">
            <span class="block">
              Ara Ara, looking for a job, aren&#x27;t we?
            </span>
            <span class="block text-indigo-500">Worka will help you!</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default LandingDiv;
