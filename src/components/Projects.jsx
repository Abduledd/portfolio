import React from "react";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import blog from "../assets/portfolio/blog.png";
import chatbot from "../assets/portfolio/chatbotUi.png";
import movie from "../assets/portfolio/movieProject.png";
import portfolio from "../assets/portfolio/portfolio.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      src: blog,
      codeLink: "https://github.com/Abduledd/Blog",
      title: "Blogging Platform with User Authentication and Post Management",
      description:
        "This project showcases a full-stack web application, creating a dynamic and interactive blogging platform. Users can register, log in, and publish blog posts, which are then displayed for all visitors to see. If logged in, users have the additional ability to edit their own posts.",
      techs: ["ReactJs", "TailWind", "MongoDB", "NodeJS", "ExpressJS"],
    },
    {
      id: 2,
      src: chatbot,
      codeLink: "https://github.com/Abduledd/ChatBot",
      title: "Building an Intelligent Chatbot",
      description:
        "TThis project showcases an engaging and responsive chatbot application powered by OpenAI's GPT-3, integrated seamlessly with React for the frontend and Node.js for the backend. The chatbot provides users with an interactive conversation experience, generating insightful responses based on their inputs..",
      techs: ["openaiAPI", "ReactJs", "TailWind", "NodeJS", "ExpressJS"],
    },
    {
      id: 3,
      src: movie,
      codeLink: "https://github.com/Abduledd/Movie-Project",
      title: "Movie Recommendation System",
      description:
        "The Movie Recommendation System is an innovative project that leverages cutting-edge technologies to provide users with personalized movie recommendations based on their movie preferences. The system uses a combination of natural language processing and machine learning techniques to analyze movie descriptions and genres, ultimately suggesting similar movies that align with a user's taste.",
      techs: [
        "ReactJs",
        "TailWind",
        "Flask",
        "Python",
        "Pandas",
        "scikit-learn",
        "TMDB API",
        "RESTful APIs",
      ],
    },
    {
      id: 4,
      src: portfolio,
      title: "My Personal Portfolio",
      description:
        "My Personal Portfolio is an embodiment of my journey, a digital canvas where my story unfolds. Welcome to the hub of my creative odyssey, where each click reveals a new chapter of innovation and expertise. In this moment, you are perusing my portfolio — a glimpse into my world of creativity and dedication.",
      techs: ["ReactJs", "TailWind"],
    },
    {
      id: 5,
      src: reactWeather,
      description: "Ok its working",
      techs: ["ReactJs", "TailWindCSS"],
    },
    {
      id: 6,
      src: reactWeather,
      description: "Ok its working",
      techs: ["ReactJs", "TailWindCSS"],
    },
  ];

  return (
    <section
      name="projects"
      className="flex flex-col items-center bg-customColor text-white py-10">
      <h2 className="text-red-800 text-2xl sm:text-4xl font-bold">Projects</h2>

      {/* <p className="text-sm md:text-base lg:text-lg xl:text-xl">
        Some description of the projects section.
      </p> */}

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-8">
        {projects.map(({ id, src, codeLink, title, description, techs }) => (
          <div
            key={id}
            className="bg-customColor hover:bg-customColor2 duration-200 p-6 mx-10 lg:mx-32 xl:mx-72 rounded-lg sm:flex">
            <img
              src={src} // Replace with your image URL
              alt="Project Image"
              className="w-56 h-20 mb-5 sm:mb-0 md:w-72 md:h-36 rounded-md object-cover mr-4"
            />

            {/* Project Content */}
            <div className="flex flex-col justify-between">
              <div className="text-white">
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm ">{description}</p>
              </div>
              <div className="flex flex-wrap my-3 max-h-20 overflow-y-auto">
                {techs.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-customColor3 text-sm text-customColor4 py-1 px-3 rounded-2xl mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-300 transition duration-300">
                  View Project
                </a>
                <a
                  href={codeLink}
                  className="text-blue-500 hover:text-blue-300 transition duration-300">
                  Code
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
