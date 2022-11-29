import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaFeather,
  FaPrint,
  FaStar,
  FaUserGraduate,
  FaVideo,
} from "react-icons/fa";
import { useContext } from "react";
import { CartInfo } from "../../Context/CartContext/CartContext";
import html2pdf from "html2pdf.js";
import courseIntro from "./course-intro.png";

const CoursePreview = () => {
  const { addtocart, purchasedCourse } = useContext(CartInfo);

  const courseDetails = useLoaderData();
  const navigate = useNavigate();

  const {
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

  const purchasedHandler = () => {
    addtocart(courseDetails);

    navigate("/cart");
  };

  const pdfDownload = (params) => {
    html2pdf()
      .set({
        html2canvas: { useCORS: true, scale: 2 },
        margin: [2, 0],
        jsPDF: { format: "a4", orientation: "portrait" },
      })
      .from(document.querySelector("#courseContent"))
      .save("course.pdf");
  };

  return (
    <div className="bg-blue-50 dark:bg-[#0F172A] py-5">
      <div className="lg:w-10/12 mx-auto " id="courseContent">
        <div className="bg-blue-600 mx-5 md:mx-0 text-white rounded-md flex items-center">
          <div className="w-full md:w-8/12 p-5 md:p-12">
            <div>
              <span
                onClick={pdfDownload}
                className="bg-white inline-block cursor-pointer rounded-md px-3 py-2 hover:bg-yellow-600 text-gray-900 hover:text-white  "
              >
                <FaPrint />
              </span>
            </div>
            <h1 className="text-xl font-semibold text-gray-300 dark:text-white">
              {CategoryName}
            </h1>
            <h1 className="text-4xl font-semibold">{CourseName}</h1>
            <div className="flex justify-between w-full  my-5">
              <div className="flex items-center text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <b> {Review}</b>
              </div>
              <div className="flex items-center text-yellow-400">
                <FaUserGraduate />
                <b> {studentEnrolled} Enerolled</b>
              </div>
            </div>
            <div>
              Created by <b> {Author}</b> · Last updated : <b>{LastUpdate}</b>
            </div>
          </div>
          <div className="hidden lg:flex w-4/12">
            <img src={courseIntro} alt="" crossOrigin="anonymous" />
          </div>
        </div>
        <div className="md:flex px-5 md:px-0 my-5">
          <div className="lg:w-8/12 border p-5 rounded-md shadow-md border-gray-200 bg-white dark:bg-[#182133]">
            <h1 className="font-semibold text-xl text-gray-700 dark:text-[#E2E8F0]">
              Description
            </h1>
            <p className="text-gray-600 dark:text-white">{descriptions}</p>

            <h1 className="font-semibold text-xl text-gray-700 dark:text-white mt-5">
              What You’ll Learn
            </h1>
            <p className="flex flex-wrap">
              {whatWillLearn.map((wwil, idx) => (
                <li
                  key={idx}
                  className=" w-full md:w-1/2 list-none flex items-center my-1 text-green-600  dark:text-[#36B4EC]"
                >
                  <FaCheckCircle />
                  <span className="ml-2 font-semibold"> {wwil}</span>
                </li>
              ))}
            </p>

            <h1 className="font-semibold text-xl text-gray-700 dark:text-[#E2E8F0] mt-5">
              Requirements
            </h1>
            <div>
              {Requirements.map((req, idx) => (
                <li
                  key={idx}
                  className="  list-none flex items-center text-gray-500 my-2"
                >
                  <FaArrowRight />
                  <span className="ml-2 font-semibold"> {req}</span>
                </li>
              ))}
            </div>
          </div>
          <div className="lg:w-4/12 md:ml-3 mt-8 md:mt-0">
            <div className="rounded-xl shadow-md overflow-hidden bg-white dark:bg-[#182133]">
              <img src={CourseThumb} alt="" />
              <div className="p-4">
                <div className="flex justify-around border-b border-blue-100 pb-3">
                  <div className="text-center">
                    <div className="text-4xl font-bold dark:text-white">
                      {Hours} <br />
                    </div>
                    <div className="text-gray-600 dark:text-white font-semibold">
                      Hours{" "}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold dark:text-white">
                      {studentEnrolled} <br />
                    </div>
                    <div className="text-gray-600 dark:text-white font-semibold">
                      Students{" "}
                    </div>
                  </div>
                </div>
                {Features.map((feture, ids) => (
                  <div
                    key={ids}
                    className="border-b py-3 flex items-center text-gray-600 dark:text-white font-semibold border-blue-100"
                  >
                    <FaFeather />
                    <span className="ml-2"> {feture}</span>
                  </div>
                ))}
              </div>
              <div className="pb-4 px-5">
                {}
                <button
                  onClick={purchasedHandler}
                  className={` rounded-md text-white font-bold py-2 w-full ${
                    purchasedCourse?.courseID === courseID
                      ? "bg-gray-400"
                      : "bg-blue-600"
                  }`}
                  disabled={purchasedCourse?.courseID === courseID}
                >
                  {purchasedCourse?.courseID === courseID
                    ? "Already Owned"
                    : "Get premium access"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="lg:w-10/12  md:mx-auto rounded-md shadow-md px-5 mx-5   dark:text-gray-100 bg-white dark:bg-[#182133]">
        <div className="container flex flex-col justify-center  py-8 mx-auto ">
          <h2 className="text-2xl font-semibold sm:text-2xl mb-3">
            Course Curriculum
          </h2>

          <div className="space-y-4">
            {CourseCurriculum.map((classModule, idx) => (
              <details key={idx} className="w-full border rounded-lg">
                <summary className="px-4 cursor-pointer font-bold  text-gray-600 dark:text-white py-6 focus:outline-none focus-visible:ring-violet-400">
                  {classModule.title}
                </summary>
                {classModule.topics.map((topic, idy) => (
                  <p
                    key={idy}
                    className="px-4 cursor-pointer  py-6 pt-0 ml-4 -mt-4  text-blue-600 dark:text-gray-400"
                  >
                    <span className="flex items-center  hover:bg-blue-100 p-3">
                      <FaVideo /> <span className="ml-3">{topic}</span>
                    </span>
                  </p>
                ))}
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursePreview;
