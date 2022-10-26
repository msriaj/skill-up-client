import React from "react";
import Course from "../../Components/Course/Course";

const CoursesList = () => {
  const coursesItems = [
    "web design",
    "web design",
    "Graphic design",
    "web design",
    "web design",
    "web design",
  ];
  return (
    <div className="bg-blue-50">
      <div className="flex mx-auto lg:w-10/12 ">
        <div className="lg:w-3/12 bg-white shadow-2xl  ">sidebar</div>
        <div className="lg:w-9/12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-5  pt-12 gap-8">
          {coursesItems.map((courseitem) => (
            <Course></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
