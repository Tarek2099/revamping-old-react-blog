import React from "react";
import Banner from "../../Components/BannerSlider/Banner.jsx";
import Blogs from "../Blog/Blogs.jsx";
const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <Blogs />
    </div>
  );
};
export default Home;
