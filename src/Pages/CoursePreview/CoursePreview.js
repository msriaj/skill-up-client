import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar, FaUserGraduate } from "react-icons/fa";

const CoursePreview = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  const {
    catID,
    CategoryName,
    courseID,
    CourseThumb,
    CourseName,
    Author,
    LastUpdate,
    studentEnrolled,
    Hours,
    Review,
    descriptions,
    whatWillLearn,
    Requirements,
    CourseCurriculum,
    Features,
  } = courseDetails;
  return (
    <div className="bg-blue-50 py-5">
      <div className="lg:w-10/12 mx-auto ">
        <div className="bg-blue-600 text-white rounded-md flex">
          <div className=" p-12">
            <h1 className="text-xl font-semibold text-gray-300">
              {CategoryName}
            </h1>
            <h1 className="text-4xl font-semibold">{CourseName}</h1>
            <div className="flex justify-between w-5/12 my-5">
              <span className="flex items-center text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <b> {Review}</b>
              </span>
              <span className="flex items-center text-yellow-400">
                <FaUserGraduate />
                <b> {studentEnrolled} Enerolled</b>
              </span>
            </div>
            <div>
              Created by <b> {Author}</b> · Last updated : <b>{LastUpdate}</b>
            </div>
          </div>
          <div className="w-4/12">
            <img
              src="http://demo.foxthemes.net/courseplus-v4.3.1/assets/images/courses/course-intro.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex my-5">
          <div className="lg:w-8/12 border p-5 rounded-md shadow-md border-gray-200 bg-white">
            <h1 className="font-semibold text-xl text-gray-700">Description</h1>
            <p className="text-gray-600">{descriptions}</p>
          </div>
          <div className="lg:w-4/12"></div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
