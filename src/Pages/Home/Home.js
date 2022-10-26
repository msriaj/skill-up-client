import React from "react";
import Courses from "../../Components/Courses/Courses";
import { Feature } from "../../Components/Feature/Feature";
import Header from "../../Components/Header/Header";
import HomeCat from "../../Components/HomeCat/HomeCat";

const Home = () => {
  return (
    <>
      <Header />
      <Feature />
      <HomeCat />
      {/* <Courses /> */}
    </>
  );
};

export default Home;
