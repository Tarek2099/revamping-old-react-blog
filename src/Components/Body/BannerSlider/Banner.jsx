import React, { useState } from "react";
import { useNavigate } from "react-router";
import { UseContext } from "../../Context/MyContext";
import "./Banner.css";

function Banner() {
  // Access data using context API
  const blogs = UseContext();

  // Made a id for tracking post id
  const [id, setId] = useState(1);

  // Navigator
  const navigate = useNavigate();

  // Every 4 minutes, banner will be change based on id
  setTimeout(() => {
    setId(id + 1);

    // After completing the all post, banner shows from beginning
    if (id === blogs.length) {
      setId(1);
    }
  }, 4000);

  // Pass id from clicked blog
  const handleBlogDetails = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="banner">
      {blogs.map(
        (blog) =>
          // The banner starts to show the post from 1, and one after another
          blog.id === id && (
            <div className="container-fluid" key={blog.id}>
              <div className="bannerbody">
                <img src={blog.image} alt={blog.name} />
                <div className="bannerElements">
                  <h3 className="bannerHeader">{blog.name}</h3>
                  <p className="bannertext">{blog.content}</p>
                  <button
                    className="continuebtn"
                    onClick={() => handleBlogDetails(blog.id)}
                  >
                    Continue
                  </button>
                </div>
              </div>
              <div className="overlay"></div>
            </div>
          )
      )}
    </div>
  );
}
export default Banner;
