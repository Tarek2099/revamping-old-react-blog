import React from "react";
import { Outlet, useParams } from "react-router";
import "../../App.css";
import Comments from "../../Components/Comment/Comments.jsx";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { UseContext } from "../../Context/MyContext";
import "./BlogDetails.css";

const Blogdetails = () => {
  console.log("Details Rendered");
  const blogs = UseContext();
  // Get id from routing parameter
  const { id } = useParams();
  console.log(id);
  // Find blog similar to id
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  return (
    <div className="details-container">
      <div style={{ display: "flex" }} className="blog-details-container">
        {id && (
          <div className="col-8">
            <div className="blogdetails">
              <div className="image-container" style={{ position: "relative" }}>
                <img src={blog.image} alt={blog.name} />
              </div>
              <h2 className="blog-title">{blog.name}</h2>
              <p className="blog-date">{blog.date}</p>
              <div className="blog-content">{blog.content}</div>
              <div className="blog-tags">
                {blog.tags?.map((tag, index) => (
                  <span key={index} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="blog-category">Category: {blog.category}</div>
            </div>
            <Comments />
          </div>
        )}
        <div className="col-4">
          <Sidebar />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Blogdetails;
