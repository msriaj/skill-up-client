import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Purchsed = () => {
  return (
    <div className="bg-blue-50">
      <div className=" p-20 mx-auto text-center  bg-green-50">
        <div className="w-full md:w-6/12 py-12 mx-auto bg-white shadow-lg border border-gray-100 rounded-xl">
          <span className="rounded-full  text-9xl   p-10 text-green-600 inline-block">
            <FaCheckCircle />
          </span>

          <div>
            <h1 className="text-xl text-green-600 font-bold">
              Course Purchase Successfully{" "}
            </h1>
            <p className="text-lg text-gray-600 font-semibold">
              Go To Your Course Page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchsed;
