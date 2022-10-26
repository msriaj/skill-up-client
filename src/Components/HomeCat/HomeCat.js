import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

import { serverUrl } from "../Utilitis/ApiConfig";

const HomeCat = () => {
  const [category, setCategory] = useState([]);
  const [courses, setCourses] = useState([]);
  const [courseCat, setCourseCat] = useState(7);
  useEffect(() => {
    fetch(`${serverUrl}/categories`)
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`${serverUrl}/category/${courseCat}`)
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.log(err));
  }, [courseCat]);

  return (
    <div className="dark:bg-[#0F172A]">
      <div className="lg:w-10/12 mx-auto px-5 pb-5 ">
        <div>
          <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#21225f] dark:text-[#E2E8F0] sm:text-4xl md:mx-auto">
                Explore top <span className="text-[#08A9E6]"> featured</span>{" "}
                categories
              </h2>
              <p className="text-base text-gray-700 md:text-lg dark:text-[#6D7A8E]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-7">
              {category.map((cat) => (
                <div
                  key={cat.catID}
                  onClick={() => setCourseCat(cat.catID)}
                  className="border shadow-lg  text-center flex items-center justify-center text-xs border-blue-900 rounded-md py-3 px-2  hover:bg-blue-900 hover:text-white cursor-pointer font-bold dark:bg-[#182233] dark:text-white dark:hover:bg-gray-500"
                >
                  {cat.CategoryName}
                </div>
              ))}
            </div>
            <div>
              <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2   gap-4">
                {courses.map((course) => (
                  <Course key={course.courseID} course={course}></Course>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCat;
