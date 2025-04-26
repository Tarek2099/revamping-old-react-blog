import React from "react";

import Categories from "../Category/Categories";
import LatestPosts from "./LatestPosts";
import PostTags from "../PostTags/PostTags";
import Search from "./Search";
import SoicalMeida from "./SoicalMeida";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Search />
            <Categories />
            <LatestPosts />
            <PostTags />
            <SoicalMeida />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
