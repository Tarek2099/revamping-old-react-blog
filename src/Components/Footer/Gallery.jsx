import React from "react";
import { UseContext } from "../Context/MyContext";
import "./Footer.css";

const Gallery = () => {
  const blogs = UseContext();
  // Get latest blog image
  const gallery = blogs.slice(-9);

  return (
    <div className="galleryImages">
      {gallery.map((blog) => (
        <img src={blog.image} alt={blog.name} />
      ))}
    </div>
  );
};

export default Gallery;
