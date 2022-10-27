import { useContext, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext/UserContext";
import avatar from "./avator.png";

export const Nav = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const currentPageLocation = location.pathname;

  const MenuItems = [
    {
      menuID: 1,
      MenuName: "Home",
      link: "/",
    },
    {
      menuID: 2,
      MenuName: "Courses",
      link: "/courses",
    },
    {
      menuID: 3,
      MenuName: "Blog",
      link: "/Blog",
    },
    {
      menuID: 4,
      MenuName: "FAQ",
      link: "/faq",
    },
  ];
  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:w-10/12 md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link className="inline-flex items-center" to="/">
            <span
              aria-label="Company"
              className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"
            >
              SkillUP
            </span>
          </Link>

          <ul className="items-center hidden space-x-8 lg:flex">
            {MenuItems.map((item) => (
              <Link
                key={item.menuID}
                to={item.link}
                aria-label="Our product"
                title={item.MenuName}
                className={`font-medium tracking-wide py-2 rounded px-3 text-gray-100 transition-colors duration-200 hover:text-teal-accent-400  ${
                  currentPageLocation === item.link && "border border-white"
                }`}
              >
                {item.MenuName}
              </Link>
            ))}

            <li></li>
          </ul>

          <ul className="hidden lg:flex items-center gap-8">
            <label
              htmlFor="Toggle2"
              className="inline-flex items-center space-x-4 cursor-pointer text-gray-100"
            >
              <span>Light</span>
              <span className="relative">
                <input
                  id="Toggle2"
                  onChange={() => setDarkMode(!darkMode)}
                  type="checkbox"
                  className="hidden peer"
                />
                <div className="w-10 h-4 rounded-full shadow  bg-white peer-checked:dark:bg-violet-400"></div>
                <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto  bg-violet-400"></div>
              </span>
              <span>Dark</span>
            </label>
            {user?.uid ? (
              <>
                <li className="font-semibold">
                  <Link to="/profile">
                    <img
                      className="rounded-full w-12"
                      src={user?.photoURL ? user?.photoURL : avatar}
                      alt="user"
                      title={
                        user?.displayName
                          ? user?.displayName
                          : "No displayName Found please login again"
                      }
                    />
                  </Link>
                </li>
                <span
                  title="Log Out"
                  onClick={logOut}
                  className="bg-white cursor-pointer hover:bg-[#21225f] hover:text-white rounded text-sm px-5 py-2 mr-2"
                >
                  <FaSignOutAlt />
                </span>
              </>
            ) : (
              <li className="font-semibold">
                <Link to="/login">
                  <button className="bg-white hover:bg-[#21225f] hover:text-white rounded text-sm px-5 py-2 mr-2">
                    Sign In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-blue-600  hover:bg-[#21225f] text-white rounded text-sm px-5 py-2">
                    Sign Up
                  </button>
                </Link>
              </li>
            )}
          </ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute z-10 top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          FAQ
                        </Link>
                      </li>

                      {user?.uid ? (
                        <>
                          <li className="font-semibold">
                            <Link to="/profile">
                              <img
                                className="rounded-full w-12"
                                src={user?.photoURL ? user?.photoURL : avatar}
                                alt="user"
                                title={
                                  user?.displayName
                                    ? user?.displayName
                                    : "No displayName Found please login again"
                                }
                              />
                            </Link>
                          </li>
                          <li>
                            <div
                              title="Log Out"
                              onClick={logOut}
                              className="bg-white flex items-center cursor-pointer w-full hover:bg-[#21225f] hover:text-white rounded text-sm px-5 py-2 mr-2"
                            >
                              <FaSignOutAlt />{" "}
                              <span className="ml-2">log out</span>
                            </div>
                          </li>
                        </>
                      ) : (
                        <li className="font-semibold">
                          <Link to="/login">
                            <button className="bg-white hover:bg-[#21225f] hover:text-white rounded text-sm px-5 py-2 mr-2">
                              Sign In
                            </button>
                          </Link>
                          <Link to="/signup">
                            <button className="bg-blue-600  hover:bg-[#21225f] text-white rounded text-sm px-5 py-2">
                              Sign Up
                            </button>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
