import React from "react";
import { Link } from "react-router-dom";
import banner from "./banner.png";
const Header = () => {
  return (
    <div className="relative">
      <div className="relative bg-blue-50 dark:bg-[#0E1526] bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:w-10/12 md:px-24 lg:px-8 lg:py-40">
          <div className="flex flex-col md:flex-row items-center justify-between xl:flex-row">
            <div className=" mb-12 xl:mb-0 xl:pr-16 md:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-[#21225f] dark:text-[#E2E8F0] sm:text-4xl sm:leading-none">
                Discover the
                <span className="text-blue-400"> most exciting </span>
                online course
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-600 dark:text-[#515C70] md:text-lg">
                SkillUp has all the trendy and demanding courses in today's
                world. Our lab has all the necessary computer configurations
                required for the course. You can sit in the lab after the class
                and practice anything related to the course. Each course is
                designed in such a way that you have the confidence to work on
                each topic at the end of the course.
              </p>
              <Link to="/signup">
                <button className="px-5 py-3 rounded-md bg-blue-600  hover:bg-[#21225f] text-white mr-5 transition-colors duration-300">
                  Get Started
                </button>{" "}
              </Link>
              <Link to="/courses">
                <button className="px-5 py-3 rounded-md border border-blue-600   hover:bg-[#21225f] hover:text-white mr-5 transition-colors duration-300 dark:bg-[#0F172A] dark:text-white">
                  See Course
                </button>
              </Link>
            </div>
            <div className="mdl:px-8 md:w-5/12">
              <img className="w-full" src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
