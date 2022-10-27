import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import { serverUrl } from "../Components/Utilitis/ApiConfig";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CartPage from "../Pages/CartPage/CartPage";
import CoursePreview from "../Pages/CoursePreview/CoursePreview";
import CoursesList from "../Pages/CoursesList/CoursesList";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Purchsed from "../Pages/Purchsed/Purchsed";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRoutes from "./PrivetRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/courses",
        element: <CoursesList />,
      },
      {
        path: "/course-preview/:id",
        element: <CoursePreview />,
        loader: ({ params }) => {
          return fetch(`${serverUrl}/course/${params.id}`);
        },
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/profile",
        element: (
          <PrivetRoutes>
            <Profile />
          </PrivetRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivetRoutes>
            <CartPage />
          </PrivetRoutes>
        ),
      },
      {
        path: "/purchased",
        element: (
          <PrivetRoutes>
            <Purchsed />
          </PrivetRoutes>
        ),
      },

      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
