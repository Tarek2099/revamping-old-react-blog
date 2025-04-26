import React from "react";
import { Link } from "react-router-dom";
import { UseContext } from "../Context/MyContext";

const Categories = () => {
  const blogs = UseContext();
  // Mapping the blogs and get all categories
  const category = [...new Set(blogs.map((item) => item.category))];

  return (
    <div className="category">
      <h2 className="categoryhead">Category</h2>
      {category.map((item) => (
        <ul key={item}>
          <li>
            <Link to={`/category/${item}`}>{item}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Categories;
