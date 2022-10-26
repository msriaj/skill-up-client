import React from "react";
import Course from "../Course/Course";

const Courses = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 lg:w-10/12 mx-auto mb-12">
        <Course />
      </div>
    </div>
  );
};

export default Courses;
