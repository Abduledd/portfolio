import React from "react";
// import { motion } from "framer-motion";
import style2 from "../style2";

const Education = () => {
  return (
    <div className={`flex items-center w-full h-screen ${style2} px-36`}>
      <ol class="relative border-l border-gray-200 dark:border-gray-700 ">
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-700 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2018-2019
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            AlMamounia High School
          </h3>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Bachelor's degree in Mathematics and Sciences with highest honors
          </p>
        </li>
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2019-2021
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            CPGE Omar Ibn AL-Khattab
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            In-depth studies of Mathematics, Physics, Programming, and
            Industrial Engineering Sciences.
          </p>
        </li>
        <li class="ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2021-Present
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            ENSEEIHT
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400 pb-3">
            Studied advanced computer science topics at ENSEEIHT, including
            programming paradigms, data science, data structures, algorithms,
            databases, web development, operating systems, and networking.
          </p>

          <a
            href="https://www.enseeiht.fr/fr/index.html"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            WebSite{" "}
            <svg
              class="w-3 h-3 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Education;
