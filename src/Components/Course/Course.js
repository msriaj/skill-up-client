import React from "react";
import { Link } from "react-router-dom";
const Course = ({ course }) => {
  console.log(course);
  const {
    courseID,
    CategoryName,
    CourseThumb,
    CourseName,
    Review,
    Author,
    studentEnrolled,
    catID,
  } = course;
  return (
    <article className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-900">
      <Link>
        <img
          alt="thumb"
          className="object-cover w-full h-52 dark:bg-gray-500"
          src={CourseThumb}
        />
      </Link>

      <div className="flex flex-col flex-1 px-3 py-3">
        <div>
          <Link
            to={`/category/${catID}`}
            className="bg-blue-600 text-xs p-1 rounded text-white hover:bg-white hover:text-blue-600 border border-blue-600 transition-all duration-300 inline-block"
          >
            {CategoryName}
          </Link>
        </div>
        <Link className=" tracking-wider uppercase hover:underline dark:text-violet-400">
          <h3 className="flex-1 py-2  font-semibold  ">{CourseName}</h3>
        </Link>
        <div className="flex flex-wrap justify-between  space-x-2 text-xs dark:text-gray-400">
          <span>Instructor: {Author} </span>
        </div>
        <div className="flex flex-wrap justify-between  space-x-2 text-xs dark:text-gray-400">
          <span>{studentEnrolled} Enrolled</span>
          <span>Review: {Review}</span>
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
