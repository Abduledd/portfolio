import React from "react";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import blog from "../assets/portfolio/blog.png";
import chatbot from "../assets/portfolio/chatbotUi.png";
import movie from "../assets/portfolio/movieProject.png";
const Projects = () => {
  const projects = [
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

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Project Section
      </h2>

      <p className="text-sm md:text-base lg:text-lg xl:text-xl">
        Some description of the projects section.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map(({ id, src, codeLink }) => (
          <div key={id} className="bg-gray-800 p-6 rounded-lg shadow-lg flex">
            {/* Project Image */}
            <img
              src={src} // Replace with your image URL
              alt="Project Image"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />

            {/* Project Content */}
            <div className="flex flex-col justify-between">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Project Title</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Short description of the project.
                </p>
              </div>

              <div className="flex justify-between">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-300 transition duration-300">
                  View Project
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-300 transition duration-300">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-8 rounded-full hover:bg-blue-700 transition duration-300">
        Load More
      </button>
    </section>
  );
};

export default Projects;
