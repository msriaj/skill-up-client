import React from "react";

const Error = () => {
  return (
    <div className="bg-blue-50 p-20">
      <div className="  p-20 border bg-white border-gray-200   rounded-md flex items-center">
        <div>
          <img
            src="https://quizboxms.netlify.app/static/media/404.14d7231a7e39bbefaf1e.jpeg"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-xl text-center text-blue-400 font-extrabold">
            AWWW...DONT CRY.
          </h1>
          <h1 className="text-9xl text-center text-red-600 font-extrabold">
            404
          </h1>
          <h1 className="text-xl text-center text-red-400 font-extrabold">
            Your Requested Page Not Found
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Error;
