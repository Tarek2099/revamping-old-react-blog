import React, { useState } from "react";
import { UseContext } from "../../Context/MyContext";
import Blog from "../../pages/Blog/Blog";
import "./Categorized.css";

const Categorized = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState([
    "Travel",
    "Photography",
    "Lifestyle",
    "Career",
  ]);
  const blogs = UseContext();

  // Filter blogs based on active category
  const filteredBlogs = blogs.filter((blog) =>
    categories.map((category) => blog.id == category)
  );
  console.log(filteredBlogs);

  return (
    <div className="categorized-container">
      <div className="categorized">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="filtered-blogs">
        {filteredBlogs.map((blog) => (
          <Blog key={blog.id} data={blog} />
        ))}
      </div>
    </div>
  );
};

export default Categorized;
