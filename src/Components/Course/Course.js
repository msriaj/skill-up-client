import React from "react";
import { FaStar, FaStarHalfAlt, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Course = ({ course }) => {
  const {
    courseID,
    CategoryName,
    CourseThumb,
    CourseName,
    Review,
    Author,
    studentEnrolled,
  } = course;
  return (
    <article className="flex flex-col  bg-white shadow-lg rounded-lg overflow-hidden dark:bg-[#182233]">
      <img
        alt="thumb"
        className="object-cover w-full h-52 dark:bg-gray-500"
        src={CourseThumb}
      />

      <div className="flex flex-col flex-1 px-3 py-3">
        <div>
          <span className="bg-blue-600 text-xs  p-1 rounded text-white hover:bg-white hover:text-blue-600 border border-blue-600 transition-all duration-300 inline-block">
            {CategoryName}
          </span>
        </div>
        <Link
          to={`/course-preview/${courseID}`}
          className="tracking-wider uppercase   dark:text-violet-400"
        >
          <h3 className=" py-2 text-sm font-bold dark:text-[#E2E8F0] dark:hover:text-[#e2e8f08a]   ">
            {CourseName}
          </h3>
        </Link>
        <div className="flex flex-wrap justify-between  space-x-2 text-xs dark:text-gray-400">
          <span>
            Instructor: <b>{Author}</b>{" "}
          </span>
        </div>
        <div className="flex items-center text-gray-400 font-bold my-2 flex-wrap justify-between  space-x-2 text-xs dark:text-gray-400">
          <span className="flex items-center">
            <FaUserCircle className="mr-1" /> {studentEnrolled} Student
          </span>
          <span className="flex items-center">
            <FaStar className="inline-block text-yellow-600" />
            <FaStar className="inline-block text-yellow-600" />
            <FaStar className="inline-block text-yellow-600" />
            <FaStar className="inline-block text-yellow-600" />
            <FaStarHalfAlt className="inline-block text-yellow-600 mr-1" />
            {Review}
          </span>
        </div>
        <div>
          <Link
            className="bg-blue-600 block  text-center text-white hover:bg-blue-900 py-2 mt-2 rounded-md  font-semibold  "
            to={`/course-preview/${courseID}`}
          >
            See Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Course;
