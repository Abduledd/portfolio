import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import MoiBrux from "../assets/2.jpg";
// import moiAllemagne from "../assets/3.jpg";
// import { icons } from "react-icons";
import { Link } from "react-scroll";
import style1 from "../style1";
const Home = () => {
  return (
    <div name="home" className={`h-screen w-full ${style1}`}>
      <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full px-4 md:flex-row gap-2">
        <div className=" p-3 flex flex-col justify-center h-full sm:px-14">
          <h2 className="text-4xl sm:text-4xl font-bold text-gray-400 w-full">
            Hello, it's me <br />
            <div className="text-red-900">Abderrahmane Eddahbi </div>
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            Hello! My name is Eddahbi Abderrahmane, and I am a dedicated and
            enthusiastic student pursuing my Bachelor's degree in Software
            Engineering. From an early age, I was drawn to the world of
            technology, and this passion has fueled my journey into the realms
            of Data Science, Artificial Intelligence, and Full-stack Software
            Development.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-32 text-white bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center">
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
            className="rounded-2xl mx-auto md:w-2/3 hover:scale-105 duration-200 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
