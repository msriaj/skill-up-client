import React from "react";
import { Link } from "react-router-dom";
const Course = () => {
  return (
    <article className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-900">
      <Link>
        <img
          alt="thumb"
          className="object-cover w-full h-52 dark:bg-gray-500"
          src="https://source.unsplash.com/200x200/?fashion?2"
        />
      </Link>
      <div className="flex flex-col flex-1 px-3 py-3">
        <Link></Link>
        <Link className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">
          <h3 className="flex-1 py-2  font-semibold  ">
            Te nulla oportere reprimique his dolorum
          </h3>
        </Link>
        <div className="flex flex-wrap justify-between  space-x-2 text-xs dark:text-gray-400">
          <span>June 2, 2020</span>
          <span>2.2K views</span>
        </div>
        <button className="bg-blue-600 text-white hover:bg-blue-900 py-2 mt-2 rounded-md  font-semibold  ">
          See Details
        </button>
      </div>
    </article>
  );
};

export default Course;
