import React from "react";
import Banner from "../../Components/BannerSlider/Banner.jsx";
import Categorized from "../../Components/CategorizedPost/Categorized.jsx";
import Blogs from "../Blog/Blogs.jsx";
const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <Categorized />
      <Blogs />
    </div>
  );
};
export default Home;
