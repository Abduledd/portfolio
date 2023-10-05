import React, { useState } from "react";
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
      src: chatbot,
      description: "Ok its working",
    },
    {
      id: 5,
      src: chatbot,
      description: "Ok its working",
    },
    {
      id: 6,
      src: chatbot,
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
