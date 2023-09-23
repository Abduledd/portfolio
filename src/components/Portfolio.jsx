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
    <div name="portfolio" className={`${style1} w-full md:h-screen py-20`}>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, codeLink, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="reactWeather"
                className="rounded-md duration-200 hover:scale-105"
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

                      <div className="flex flex-col justify-center items-center ">
                        <h1 className="text-red-700 font-bold mb-4">
                          Blogging Platform with User Authentication and Post
                          Management
                        </h1>
                        <div className="flex items-center p-3">
                          <h2 className="mr-4 text-red-700 font-bold">
                            Overview
                          </h2>
                          <p className="text-gray-500">
                            This project showcases a full-stack web application,
                            creating a dynamic and interactive blogging
                            platform. Users can register, log in, and publish
                            blog posts, which are then displayed for all
                            visitors to see. If logged in, users have the
                            additional ability to edit their own posts.
                          </p>
                        </div>
                        <div className="flex items-center p-3 ">
                          <h2 className="mr-4 text-red-700 font-bold">
                            Key Features
                          </h2>
                          <ul>
                            <li>
                              <strong className="text-green-700">
                                User Authentication:
                              </strong>{" "}
                              Users can register and log in securely. Passwords
                              are encrypted using bcrypt for enhanced security.
                            </li>
                            <li>
                              <strong className="text-green-700">
                                Post Management:
                              </strong>{" "}
                              Authenticated users can create and edit their blog
                              posts, with options to provide a title, summary,
                              content, and cover image.
                            </li>
                            <li>
                              <strong className="text-green-700">
                                Seamless UI:
                              </strong>{" "}
                              The frontend, built with React and styled using
                              Tailwind CSS, offers an intuitive and engaging
                              user interface for a seamless user experience.
                            </li>
                            <li>
                              <strong className="text-green-700">
                                Image Uploads:
                              </strong>{" "}
                              The application allows users to upload cover
                              images for their blog posts, enhancing the visual
                              appeal of each post.
                            </li>
                            <li>
                              <strong className="text-green-700">
                                Responsive Design:
                              </strong>{" "}
                              The application is designed to be fully
                              responsive, ensuring a consistent and enjoyable
                              experience across devices.
                            </li>
                          </ul>
                        </div>

                        <div className="flex p-3 items-center">
                          <div className="mr-4 flex-shrink-0">
                            <h2 className="text-red-700 font-bold">
                              Technologies Used
                            </h2>
                          </div>
                          <div className="flex-grow">
                            <ul>
                              <li>
                                <strong className="text-green-700">
                                  Frontend:
                                </strong>{" "}
                                React, Tailwind CSS
                              </li>
                              <li>
                                <strong className="text-green-700">
                                  Backend:
                                </strong>{" "}
                                Node.js, Express.js
                              </li>
                              <li>
                                <strong className="text-green-700">
                                  Database:
                                </strong>{" "}
                                MongoDB (with Mongoose ODM)
                              </li>
                              <li>
                                <strong className="text-green-700">
                                  Authentication:
                                </strong>{" "}
                                JSON Web Tokens (JWT) for secure user
                                authentication
                              </li>
                              <li>
                                <strong className="text-green-700">
                                  File Uploads:
                                </strong>{" "}
                                Multer for handling file uploads
                              </li>
                              <li>
                                <strong className="text-green-700">
                                  Styling:
                                </strong>{" "}
                                Tailwind CSS for efficient and responsive
                                styling
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

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
