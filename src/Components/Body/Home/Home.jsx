import React from "react";
import Banner from "../BannerSlider/Banner";
import Blogs from "./Blogs";
function Home() {
  return (
    <div className="blogBody">
      <Banner />
      <Blogs />
    </div>
  );
}
export default Home;
