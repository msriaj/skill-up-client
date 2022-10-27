import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartInfo } from "../../Context/CartContext/CartContext";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, purchasedHandler } = useContext(CartInfo);

  const submitHandler = (e) => {
    e.preventDefault();
    purchasedHandler(cart);
    navigate("/purchased");
  };
  return (
    <div className=" py-5  dark:bg-[#111827]">
      <div className="md:flex lg:w-10/12  mx-auto">
        <h1 className="text-2xl my-3 dark:text-white">Shopping Cart</h1>
      </div>
      <div className="md:flex lg:w-10/12  mx-auto">
        <div className="w-full  md:w-6/12">
          <article className="flex  border border-gray-200  bg-white shadow-lg rounded-lg overflow-hidden dark:bg-[#182233]">
            <div className="lg:w-4/12">
              <Link>
                <img
                  alt="thumb"
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src={cart.CourseThumb}
                />
              </Link>
            </div>

            <div className="flex flex-col justify-center flex-1 px-3 py-3">
              <Link
                to={`/course-preview/${cart.courseID}`}
                className="tracking-wider uppercase   dark:text-violet-400"
              >
                <h3 className=" py-2 text-sm font-bold dark:text-[#E2E8F0] dark:hover:text-[#e2e8f08a]   ">
                  {cart.CourseName}
                </h3>
              </Link>
              <div className="flex flex-wrap justify-between  space-x-2 text-xs dark:text-gray-400">
                <span>
                  Instructor: <b>{cart.Author}</b>{" "}
                </span>
              </div>
              <div className="flex items-center text-gray-400 font-bold my-2 flex-wrap justify-between  space-x-2 text-xs dark:text-gray-400">
                <p className="text-lg ">Price : 5500Tk</p>
              </div>
            </div>
          </article>
        </div>
        <div className="w-full  md:w-6/12  px-5">
          <form onSubmit={submitHandler}>
            <div className="bg-white  dark:bg-[#182233] border border-gray-200 rounded-md shadow-lg p-8">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>

              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm border border-gray-200">
                  <option>Free Standard shipping - Online Downloadable </option>
                </select>
              </div>
              <div className="py-10">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Transactions ID
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full border border-gray-200"
                  required
                />
              </div>

              <div className="py-2">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full border border-gray-200"
                  required
                />
              </div>

              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>5500Taka</span>
                </div>
                <button
                  type="submit"
                  className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
