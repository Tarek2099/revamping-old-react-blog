import React from "react";
import { UseContext } from "../../../Context/MyContext.jsx";
import Sidebar from "../../Sidebar/Sidebar.jsx";
import Blog from "./Blog.jsx";

const Blogs = () => {
  const blogs = UseContext();

  return (
    <div className="container blog">
      <div style={{ display: "flex" }} className="allBlogs">
        <div className="col-8 blogsCard">
          {blogs?.length > 0 ? (
            blogs.map((blog) => (
              <Blog key={blog.id} data={blog} loading={false} error={null} />
            ))
          ) : (
            <div className="no-blogs">No blog posts available</div>
          )}
        </div>
        <div className="col-4 sideBarResponsive">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
