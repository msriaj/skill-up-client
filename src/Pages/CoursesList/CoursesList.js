import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Course from "../../Components/Course/Course";
import { serverUrl } from "../../Components/Utilitis/ApiConfig";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [courseCatList, setCourseCatList] = useState([]);
  const [courseCat, setCourseCat] = useState(6);

  console.log(`${serverUrl}/category/${courseCat}`);

  useEffect(() => {
    fetch(`${serverUrl}/category/${courseCat}`)
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.log(err));
  }, [courseCat]);

  useEffect(() => {
    fetch(`${serverUrl}/categories`)
      .then((res) => res.json())
      .then((data) => setCourseCatList(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(courses);
  console.log(courseCatList);
  return (
    <div className="bg-blue-50">
      <div className="flex mx-auto lg:w-10/12 ">
        <div className="lg:w-1/5 bg-white shadow-2xl rounded-lg my-12  p-5">
          {courseCatList.map((category) => (
            <div
              key={category}
              onClick={() => setCourseCat(category.catID)}
              className={`cursor-pointer hover:bg-blue-50 rounded-md py-2 my-2 px-4 font-semibold ${
                category.catID == courseCat ? "bg-blue-100" : "bg-white"
              }`}
            >
              {category.CategoryName}
            </div>
          ))}
        </div>
        <div className="lg:w-4/5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-5  pt-12 gap-8">
          {courses.map((course) => (
            <Course key={course.courseID} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
