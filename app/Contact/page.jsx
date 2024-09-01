import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="p-4 w-5/6 items-center px-20">
        <div className="text-gray-50 p-4">
          <p className="text-7xl font-semibold  ">ABOUT ME</p>
          <p className="py-2 font-thin text-2xl">
            {/* I have a passion for creating innovative solutions. I am proficient
            in various programing languages and tecnologies.  */}
            I have a background in software and administration of information systems from Belgorod
            State National Research University, I have great dynamic and
            detail-orientation in the information technology profession. With a
            strong passion int in software development, web development,
            database management, and systems administration, data analysis, with
            a strong foundation in computer science principles, programming
            languages, problem-solving and analytical skills. Eager to apply my
            knowledge and contribute to a dynamic team, and also committed to
            continuous learning to provide innovative solutions in a rapidly
            evolving digital landscape.
          </p>
        </div>
        <div className="grid grid-col-4 grid-flow-col gap-4 px-4 text-xl">
          <div className="col-span-2">
            <div className="flex items-center py-2">
              <p className="mr-2">Name:</p>
              <p className="font-bold text-md">Beene Chilala</p>
            </div>
            <div className="flex items-center py-2">
              <p className="mr-2">Nationality:</p>
              <p className="font-bold text-md">Zambian</p>
            </div>
            <div className="flex items-center py-2 ">
              <p className="mr-2">Languages:</p>
              <p className="font-bold text-md">English, Russian, Tonga</p>
            </div>
          </div>
          <div className="col-span-2 ">
            <div className="flex items-center py-2">
              <p className="mr-2">Email:</p>
              <p className="font-bold text-md">bchilala22@yahoo.com</p>
            </div>
            <div className="flex items-center py-2">
              <p className="mr-2">Phone:</p>
              <p className="font-bold text-md">+26097546229</p>
            </div>
            <div className="flex items-center py-2">
              <p className="mr-2">Telegram:</p>
              <p className="font-bold text-md">http://T.me/Beene_C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
