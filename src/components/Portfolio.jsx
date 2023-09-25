import React, { useState } from "react";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import blog from "../assets/portfolio/blog.png";
import chatbot from "../assets/portfolio/chatbotUi.png";
import movie from "../assets/portfolio/movieProject.png";

import style1 from "../style1";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blog,
      codeLink: "https://github.com/Abduledd/Blog",
      description: "<p>Ok its working for blog</p>",
    },
    {
      id: 2,
      src: chatbot,
      codeLink: "https://github.com/Abduledd/ChatBot",
      description: "Ok its working",
    },
    {
      id: 3,
      src: movie,
      codeLink: "https://github.com/Abduledd/Movie-Project",
      description: "Ok its working",
    },
    {
      id: 4,
      src: reactWeather,
      description: "Ok its working",
    },
    {
      id: 5,
      src: reactWeather,
      description: "Ok its working",
    },
    {
      id: 6,
      src: reactWeather,
      description: "Ok its working",
    },
  ];

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState(""); // New state to store selected description

  const toggleModal = (description) => {
    setModalVisible(!isModalVisible);
    setSelectedDescription(description); // Set the selected description when toggling modal
  };

  return (
    <div name="portfolio" className={`${style1} py-20`}>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="flex flex-col items-center w-full h-full px-12 sm:px-0">
          {portfolios.map(({ id, src, codeLink, description }) => (
            <div
              key={id}
              className="bg-black w-full h-full my-4 flex rounded-lg">
              <img
                src={src}
                alt="reactWeather"
                className="w-72 h-56 object-cover m-auto rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => toggleModal(description)}>
                  Demo
                </button>
                {isModalVisible && (
                  <div className="fixed inset-0 flex flex-col justify-center items-center z-50 bg-gray-900 bg-opacity-95 w-4/5 h-2/3 md:h-3/4 m-auto">
                    <div className="modal-content bg-black p-6 rounded-lg text-center">
                      <button
                        type="button"
                        className="absolute top-4 left-4 bg-gray-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={() => toggleModal("")}>
                        <span className="sr-only">Close menu</span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      {/* <div
                        dangerouslySetInnerHTML={{
                          __html: selectedDescription,
                        }}
                      /> */}
                    </div>
                  </div>
                )}

                <a href={codeLink} className="">
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
