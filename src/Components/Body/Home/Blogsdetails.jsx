import React from "react";
import Blogdetails from "../../BlogDetails/Blogdetails";
import Sidebar from "../../Sidebar/Sidebar";
import Comments from "./Comments";

function Blogsdetails() {
  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        <div className="col-8">
          <Blogdetails />
          <Comments />
        </div>
        <div className="col-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Blogsdetails;
