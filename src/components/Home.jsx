import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import MoiBrux from "../assets/2.jpg";
// import { icons } from "react-icons";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full px-4 md:flex-row gap-2">
        <div className=" p-3 flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-4xl font-bold text-white w-full">
            I'm a student Software Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a passionate student engineer with a strong interest in data
            science. Eager to explore the world of analytics and insights, I'm
            committed to leveraging my engineering skills to unlock valuable
            information from complex datasets, making informed decisions that
            drive innovation and progress.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-32 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={MoiBrux}
            alt="me"
            className="rounded-2xl mx-auto md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
