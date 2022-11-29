import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useEffect } from "react";

const Login = () => {
  const resetNotify = () =>
    toast.success("Reset Link Sent To Your Email!!", {
      position: "top-right",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const { user, signInEmail, googleSignIn, resetPass, signInGithub } =
    useContext(AuthContext);
  const [typedEmail, setTypedEmail] = useState("");
  const [logError, setLogError] = useState(null);
  console.log(typeof logError);
  const location = useLocation();
  const nextUrl = location?.state?.from.pathname || "/";

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInEmail(email, password)
      .then((user) => {
        navigate(nextUrl);
        setLogError("");
      })
      .catch((err) => setLogError(err.code));
  };

  const googleSignInBtn = () => {
    googleSignIn()
      .then((user) => navigate(nextUrl))
      .catch((err) => setLogError(err));
  };

  const signInGithubHandler = () => {
    signInGithub()
      .then((user) => navigate(nextUrl))
      .catch((err) => setLogError(err));
  };

  const resetHandler = () => {
    typedEmail !== "" &&
      resetPass(typedEmail)
        .then((result) => resetNotify())
        .catch((err) => setLogError(err));
  };
  useEffect(() => {
    if (user?.uid) {
      navigate(nextUrl);
    }
  }, [navigate, user?.uid]);

  return (
    <div className="bg-blue-50">
      <div className="flex flex-col p-12 justify-center items-center lg:flex-row  lg:w-10/12 mx-auto lg:py-20 lg:gap-12">
        <div className="w-1/2 hidden lg:block">
          <img
            src="https://www.bharatgeneric.com/login/svg/login-image.svg"
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2 max-w-md p-8 space-y-3 bg-white rounded-xl shadow-xl dark:bg-gray-900 dark:text-gray-100">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form
            onSubmit={submitHandler}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block dark:text-gray-400">
                Email
              </label>
              <input
                onChange={(e) => setTypedEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="w-full px-4  py-3 rounded-md bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-400">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                required
              />
              <div className="flex justify-end text-md font-semibold text-red-600 dark:text-gray-400">
                <span className="cursor-pointer" onClick={resetHandler}>
                  Forgot Password?
                </span>
              </div>
            </div>
            <button className="block w-full p-3 text-center   bg-blue-500 rounded-md text-white dark:text-gray-900 dark:bg-violet-400">
              Sign in
            </button>
          </form>
          {logError && (
            <p className="text-red-600 font-bold text-center text-xl">
              {logError}{" "}
            </p>
          )}
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center gap-1 text-4xl">
            <button
              onClick={googleSignInBtn}
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
            >
              <FaGoogle />
            </button>
            <button
              onClick={signInGithubHandler}
              aria-label="Log in with Twitter"
              className="p-3 rounded-sm"
            >
              <FaGithub />
            </button>
          </div>
          <p className="text-lg text-center sm:px-6 dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="underline font-bold dark:text-gray-100"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default Login;
