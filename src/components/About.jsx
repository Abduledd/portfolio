import React from "react";
import style1 from "../style1.js";

const About = () => {
  return (
    <div name="About" className={`w-full h-screen ${style1}`}>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm a dedicated and enthusiastic student pursuing a degree in
          SoftwareEngineering at ENSEEIHT. My passion for technology and
          problem-solving drives my curiosity to explore various facets of
          software development. With a keen interest in data science and its
          potential to shape the future, I'm continuously honing my skills to
          transform complex data into meaningful insights. When I'm not coding,
          I enjoy exploring new hiking trails and diving into books about
          emerging technologies.
        </p>
        <br />
        <p className="text-xl">
          Motivated by a strong desire for constant growth and professional
          development, I am deeply fascinated by the field of artificial
          intelligence. Currently pursuing studies in Software Engineering, I am
          passionate about the possibilities technology offers to reshape
          industries. My commitment to learning and problem-solving drives my
          journey to become a proficient developer. Away from my studies, I find
          relaxation in outdoor exploration and staying updated on advancements
          in AI.
        </p>
      </div>
    </div>
  );
};

export default About;
