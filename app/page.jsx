"use client";
import React from "react";
import { BiImport, BiLogoLinkedinSquare } from "react-icons/bi";

// rafce
const PDF_File_URL = "http://localhost:3000/Beene_Chilala_CV1.pdf";
const DOCX_File_URL = "http://localhost:3000/lesson.docx";

const Home = () => {
  const DownloadFileURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  const toLinkedIn = () => {
    window.open("http://www.linkedin.com/in/beene-chilala-838ba4321");
    // e.preventDefault();
    //               window.location.href = "http://google.com";
  };

  return (
    <div className="">
      <div className="grid grid-cols-12 gap-4">
        <div className=""></div>
        <div className="col-span-5">
          <div className="text-gray-50 p-4">
            {/* <p className="text-xl font-semibold ">software developer</p> */}
            <p className="text-7xl font-bold">Hello I'm</p>
            <p className="text-primary text-7xl font-bold">
              Beene Chilala
            </p>{" "}
            <p className="py-2 font-medium">
              I have a strong passion for creating innovative solutions. I am
              proficient in various programing languages and tecnologies
            </p>
          </div>
          <div className="flex flex-row text-center">
            <div className="basis-1/2">
              <button
                className="btn btn-outline btn-primary"
                onClick={() => {
                  DownloadFileURL(PDF_File_URL);
                }}
              >
                Download CV
                <BiImport size={25} />
              </button>
            </div>
            <div className="basis-1/6">
              <button
                className="btn "
                onClick={() => {
                  toLinkedIn();
                  
                }}
              >
                <BiLogoLinkedinSquare size={50} />
              </button>
            </div>
            {/* <div className="basis-1/6 bg-pink-500">03</div>
            <div className="basis-1/6 bg-pink-600">04</div>
            <div className="basis-1/6 bg-pink-700">05</div> */}
          </div>
        </div>

        <div className="col-span-5 ">
          <div className="avatar m-4">
            <div className="ring-primary ring-offset-base-100 w-3/4 rounded-full ring ring-offset-2">
              <img src="http://localhost:3000/image3.jpg" />
            </div>
          </div>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default Home;
