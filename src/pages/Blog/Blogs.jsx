import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import { UseContext } from "../../Context/MyContext.jsx";
import Blog from "./Blog.jsx";

const Blogs = () => {
  const blogs = UseContext();

  return (
    <div className="container blog">
      <div style={{ display: "flex" }} className="allBlogs">
        <div className="col-9 blogsCard">
          {blogs?.length > 0 ? (
            blogs.map((blog) => (
              <Blog key={blog.id} data={blog} loading={false} error={null} />
            ))
          ) : (
            <div className="no-blogs">No blog posts available</div>
          )}
        </div>
        <div className="col-3 sideBarResponsive">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
