import { FaClock, FaHeart, FaVideo } from "react-icons/fa";

export const Feature = () => {
  return (
    <div className="dark:bg-[#0F172A]">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:w-10/12 md:px-24 lg:px-8 lg:py-20 lg:-mt-40 dark:text-[#78869A] ]">
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          <div className="relative p-px overflow-hidden transition duration-300 transform   border dark:border-[#101C2C] rounded shadow-lg hover:scale-105 group hover:shadow-xl">
            <div className="relative p-5 bg-white dark:bg-[#182233] rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full  bg-indigo-50 dark:bg-[#0D1A2B] lg:mb-0">
                  <FaClock />
                </div>
                <h6 className="font-semibold leading-5 dark:text-[#E0E6EE]">
                  Lifetime support
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900 dark:text-[#78869A]">
                Even though the training is over, the relationship with you does
                not end here. As a Skill Up student you get life-time support.
                24/7 online support anytime. Our subject wise experienced team
                ensures this support offline or online.
              </p>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform   border dark:border-[#101C2C] rounded shadow-lg hover:scale-105 group hover:shadow-xl">
            <div className="relative p-5 bg-white dark:bg-[#182233] rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full  bg-indigo-50 dark:bg-[#0D1A2B] lg:mb-0">
                  <FaHeart />
                </div>
                <h6 className="font-semibold leading-5 dark:text-[#E0E6EE]">
                  Career placement support
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900 dark:text-[#78869A]">
                The Career Placement Department works to get the CV to the right
                place according to the students' qualifications. From here you
                will get various seminars on post-course grooming and career
                guidelines.
              </p>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform   border  dark:border-[#101C2C] rounded shadow-lg hover:scale-105 group hover:shadow-xl">
            <div className="relative p-5 bg-white dark:bg-[#182233] rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full  bg-indigo-50 dark:bg-[#0D1A2B] lg:mb-0">
                  <FaVideo />
                </div>
                <h6 className="font-semibold leading-5 dark:text-[#E0E6EE]">
                  Class video
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900 dark:text-[#78869A]">
                Many times students do not understand some topics in the class,
                for them there is the benefit of class videos. So now the
                students can take the class safely. You can solve any problem
                yourself by watching the video in any difficulty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
