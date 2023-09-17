import React from "react";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import blog from "../assets/portfolio/blog.png";

import style1 from "../style1";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blog,
      codeLink: "https://github.com/Abduledd/Blog",
    },
    {
      id: 2,
      src: blog,
    },
    {
      id: 3,
      src: reactWeather,
    },
    {
      id: 4,
      src: reactWeather,
    },
    {
      id: 5,
      src: reactWeather,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div name="portfolio" className={`${style1} w-full md:h-screen py-20`}>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="reactWeather"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <a
                  href={codeLink}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {" "}
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
