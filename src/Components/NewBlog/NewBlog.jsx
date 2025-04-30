import React, { useState } from "react";
import "./NewBlog.css";

function Write() {
  const [imagePreview, setImagePreview] = useState(null);
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="newBlog-container">
        <div className="newBlog">
          <label htmlFor="title" className="title">
            Title
          </label>
          <input type="text" className="titleInput" />
          <lable className="image">Image</lable>
          {imagePreview && (
            <div className="imgPreview">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}
          <input
            type="file"
            className="inputImage"
            onChange={handleImgChange}
          />
          <label htmlFor="content" className="content">
            Content
          </label>
          <textarea name="content" id="contentInput"></textarea>
          <label htmlFor="category" className="categoryLabel">
            Category
          </label>
          <input type="text" className="categoryInput" />
          <label htmlFor="tags" className="tags">
            Tags
          </label>
          <input type="text" className="tagsInput" />
          <button className="save">Save</button>
        </div>
      </div>
    </>
  );
}
export default Write;
