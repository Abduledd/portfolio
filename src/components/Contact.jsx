import React from "react";
import style1 from "../style1";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/abderrahmane-eddahbi-6b911a216/",
      style: "rounded-tl-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Abduledd",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:abduleddahbi@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/CV.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div name="contact" className={`w-full h-full ${style1} pt-48`}>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full sm:pl-14">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 animate-pulse">
            Submit the below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/64e31a8f-7cd5-4f61-a0fe-9185b94fbf44"
            method="POST"
            className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="email"
              placeholder="Enter Your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="name"
              placeholder="Enter Your name"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300
            ">
              Let's talk
            </button>
          </form>
        </div>

        <div className="md:hidden flex justify-center ">
          <ul className="flex">
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  "flex justify-center items-center w-16 h-14 px-4 hover:mt-[-10px] duration-300 bg-slate-900" +
                  " " +
                  style
                }>
                <a
                  href={href}
                  className=""
                  download={download}
                  target="_blank"
                  rel="noreferrer">
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
