"use client";
import React, { useState } from "react";
import {
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
  FaHtml5,
} from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";

const Resume = () => {
  const [selectedSection, setSelectedSection] = useState("Experience");

  const renderContent = () => {
    switch (selectedSection) {
      case "Experience":
        return (
          <div>
            <p className="text-5xl font-bold">My Experience</p>
            <p className="py-4 font-medium">
              Use these Tailwind CSS avatar components to display user profile
              pictures and company logos individually or grouped in stacks.
              These components are designed and built by the Tailwind CSS team,
              and include a variety of different styles.
            </p>
            <div className="grid grid-cols-2 gap-2 overflow-y-auto h-96">
              <div className="h-full p-2 bg-slate-900 rounded-md shadow-md ">
                <p className="text-primary text-xs font-semibold pt-2">
                  05/2024 - 05/2024
                </p>

                <ul className="font-thin text-sm py-2">
                  <li>
                    Participated in the testing of software products, working
                    with code, correcting errors and introducing new functions.
                  </li>
                </ul>
                <div className=" text-md">
                  <p>Student Intern</p>{" "}
                  <p>Belgorod State National University</p>
                </div>
              </div>

              <div className="h-full p-2 bg-slate-900 rounded-md shadow-md z-4">
                <p className="text-primary text-xs font-semibold pt-2">
                  06/2023 - 07/2023
                </p>

                <ul className="font-thin text-sm py-2">
                  <li>
                    Collaborated with a team of 3 software engineers undertaking
                    the software development of the interface of a web
                    application for monitoring the environmental factors or
                    growing conditions of plant rack for seedlings and flowers.
                  </li>
                </ul>
                <div className=" text-md">
                  <p>Student Intern</p>{" "}
                  <p>Belgorod State National University</p>
                </div>
              </div>

              <div className="h-full p-2 bg-slate-900 rounded-md shadow-md z-4">
                <p className="text-primary text-xs font-semibold pt-2">
                  06/2022 - 07/2022
                </p>

                <ul className="font-thin text-sm py-2">
                  <li>
                    Developed a custom made a storefront for a computer
                    accessory store using PHP, HTML, JavaScript,CSS and MySQL
                  </li>
                </ul>
                <div className=" text-md">
                  <p>Student Intern</p>{" "}
                  <p>Belgorod State National University</p>
                </div>
              </div>

              <div className="h-full p-2 bg-slate-900 rounded-md shadow-md z-4">
                <p className="text-primary text-xs font-semibold pt-2">
                  06/2021 - 07/2021
                </p>

                <ul className="font-thin text-sm py-2">
                  <li>
                    Developed a tic-tac-toe game using C++ as programing
                    language demonstrating strong problem-solving skills and an
                    understanding of game mechanics.
                  </li>
                </ul>
                <div className=" text-md">
                  <p>Student Intern</p>{" "}
                  <p>Belgorod State National University</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "Education":
        return (
          <div>
            <p className="text-5xl font-bold">My Education</p>
            <div className="grid grid-cols-1 gap-2">
              <div className="h-full p-2 bg-slate-900 rounded-md shadow-md z-4">
                <p className="text-primary text-md font-bold pt-4">
                  09/2020 – 06/2024
                </p>
                <p className="text-xl font-bold py-4">
                  Bachelor of Science: Software and Administration of
                  Information Systems
                </p>
                <p className="text-xl font-bold py-2">
                  Belgorod State National Research University – Belgorod, Russia
                </p>
                <p className="text-md font-thin pb-4">
                  Graduated with a Bachelor of Science in Software and
                  Administration of Information Systems through completion of
                  courses such as Databases, Parallel Programming, Structures
                  and Algorithms of Computer Data Processing and Architecture of
                  Computer and Computing Systems.
                </p>
              </div>

              <div className="h-full p-2 bg-slate-900 rounded-md shadow-md z-4">
                <p className="text-primary text-md font-bold pt-4">
                  01/2014 – 12/2018
                </p>
                <p className="text-xl font-bold py-4">GCSEs</p>
                <p className="text-md font-thin pb-4">
                  St. Joseph's Secondary School – Monze, Zambia
                </p>
              </div>
            </div>
          </div>
        );
      case "Skills":
        return (
          <div>
            <p className="text-5xl font-bold">My Skills</p>
            {/* <p className="py-4 font-medium">
              I am proficient in various programming languages including
              JavaScript, Python, and Java, and I have experience in web
              development using frameworks like React and Node.js.
            </p> */}
            <div className="grid grid-cols-4 gap-6 text-center pt-10">
              <div className="flex items-center justify-center h-36 p-2 bg-slate-900 rounded-md shadow-md z-4">
                <FaHtml5 size={90} />
              </div>
              <div className="flex items-center justify-center h-full p-2 bg-slate-900 rounded-md shadow-md z-4">
                <FaCss3 size={90} />
              </div>
              <div className="flex items-center justify-center h-full p-2 bg-slate-900 rounded-md shadow-md z-4">
                <FaJs size={90} />
              </div>
              <div className="flex items-center justify-center h-full p-2 bg-slate-900 rounded-md shadow-md z-4">
                <RiNextjsLine size={90} />
              </div>
              <div className="flex items-center justify-center h-36 p-2 bg-slate-900 rounded-md shadow-md z-4">
                <FaReact size={90} />
              </div>
              <div className="flex items-center justify-center h-full p-2 bg-slate-900 rounded-md shadow-md z-4">
                <SiCplusplus size={90} />
              </div>
              <div className="flex items-center justify-center h-full p-2 bg-slate-900 rounded-md shadow-md z-4">
                <FaPython size={90} />
              </div>
              <div className="flex items-center justify-center h-full p-2 bg-slate-900 rounded-md shadow-md z-4">
                <FaFigma size={90} />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div class="grid grid-cols-12">
        <div className=""></div>
        <div className="col-span-4">
          <div className="text-gray-50 p-4">
            <p className="text-5xl font-bold">Why Hire Me</p>
            <p className="py-4 font-medium">
              I am a highly motivated and organized individual with a strong
              passion for learning and growth.
            </p>
          </div>
          <div className="flex flex-col text-center w-full">
            <div className="">
              <button
                className="btn btn-outline btn-primary w-5/6 my-2"
                id="Experience"
                name="Experience"
                onClick={() => setSelectedSection("Experience")}
              >
                Experience
              </button>
            </div>
            <div>
              <button
                className="btn btn-outline btn-primary w-5/6 my-2"
                id="Education"
                name="Education"
                onClick={() => setSelectedSection("Education")}
              >
                Education
              </button>
            </div>
            <div>
              <button
                className="btn btn-outline btn-primary w-5/6 my-2"
                id="Skills"
                name="Skills"
                onClick={() => setSelectedSection("Skills")}
              >
                Skills
              </button>
            </div>
            <div></div>
          </div>
        </div>

        <div className="col-span-6">
          <div className="text-gray-50 p-4">{renderContent()}</div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Resume;
