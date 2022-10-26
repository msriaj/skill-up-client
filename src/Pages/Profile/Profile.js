import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext/UserContext";
import avatar from "../../Components/Nav/avator.png";
import { FaMailBulk } from "react-icons/fa";
const Profile = () => {
  const { user, updateProfileInfo } = useContext(AuthContext);
  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;

    const displayName = form.name.value;
    const photoURL = form.photo.value;
    const info = { displayName: displayName, photoURL: photoURL };
    updateProfileInfo(info);
  };
  return (
    <div className="bg-blue-50 py-12">
      <div className="lg:w-1/2 mx-auto  bg-white rounded-lg  shadow-lg  dark:bg-gray-900 dark:text-gray-100">
        <div className="  p-8 sm:flex sm:space-x-6">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src={user?.photoURL ? user?.photoURL : avatar}
              alt=""
              className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">
                {user?.displayName
                  ? user?.displayName
                  : "No display Name Found"}
              </h2>
              <span className="text-sm dark:text-gray-400">Student</span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <FaMailBulk />
                <span className="dark:text-gray-400">
                  {user?.email ? user?.email : "No Email Found"}
                </span>
              </span>
            </div>
            <div>
              <form
                onSubmit={submitHandler}
                className="space-y-6 ng-untouched ng-pristine ng-valid"
              >
                <div className="space-y-1 text-sm">
                  <label htmlFor="Name" className="block dark:text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="Name"
                    placeholder={
                      user?.displayName
                        ? user?.displayName
                        : "No display Name Found"
                    }
                    className="w-full px-4  py-3 rounded-md bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                    required
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="Photo" className="block dark:text-gray-400">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="photo"
                    id="Photo"
                    placeholder="Photo"
                    className="w-full px-4  py-3 rounded-md bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>

                <button className="bg-gray-900 text-white dark:bg-gray-100 rounded-md px-5 py-3">
                  Edit Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
