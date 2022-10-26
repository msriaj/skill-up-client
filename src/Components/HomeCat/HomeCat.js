import React from "react";

const HomeCat = () => {
  const category = [
    "web design",
    "web design",
    "Graphic design",
    "web design",
    "web design",
    "web design",
  ];
  return (
    <div className="lg:w-10/12 mx-auto px-5 pb-5">
      <div>
        <div className="px-4   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#21225f] sm:text-4xl md:mx-auto">
              Explore top <span className="text-[#08A9E6]"> featured</span>
              categories
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
            {category.map((cat, idx) => (
              <div
                key={idx}
                className="border shadow-lg  flex items-center justify-center text-sm border-blue-900 rounded-md py-3 px-5  hover:bg-blue-900 hover:text-white cursor-pointer font-bold"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCat;
