import React from "react";
import html from "../assets/html.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import tensorflow from "../assets/tensorflow.png";
import pandas from "../assets/pandas.png";
import react from "../assets/react.png";
import sql from "../assets/sql.png";
import github from "../assets/github.png";
import style2 from "../style2";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: python,
      title: "Python",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: java,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: tensorflow,
      title: "TensorFlow",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: css,
      title: "CSS",
      style: "shadow-blue-400",
    },
    {
      id: 8,
      src: tailwind,
      title: "TailWind",
      style: "shadow-green-200",
    },
    {
      id: 9,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },

    {
      id: 10,
      src: pandas,
      title: "Pandas",
      style: "shadow-white",
    },

    {
      id: 11,
      src: sql,
      title: "SQL",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      src: github,
      title: "Github",
      style: "shadow-gray-700",
    },

    {
      id: 13,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-700",
    },
    {
      id: 14,
      src: expressjs,
      title: "ExpressJS",
      style: "shadow-yellow-700",
    },
  ];

  return (
    <div name="technologies" className={`${style2} w-full h-full pt-32`}>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies
          </p>
          <p className="py-6 ">These are the technologes I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-3 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
