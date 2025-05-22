"use client";

import React from "react";
import First from "./First";
import Category from "./Category";
import Upcoming from "./Upcoming";
import Trending from "./Trending";

import About from "./About";
import Footer from "./Footer";
import Previous from "./previous";
import NavBarMain from "../Components/NavBarMain";

const Main: React.FC = () => {
  return (
    <div>
      <NavBarMain />
      <First />
      <Category />
      <Upcoming />
      <Trending />
      <Previous />
      <About />
      <Footer />
    </div>
  );
};

export default Main;
