import React from "react";
import { UseContext } from "../Context/MyContext";

const PostTags = () => {
  const blogs = UseContext();
  const tags = blogs.map((item) => item.tags).map((tag) => tag);
  return (
    <div className="postTags">
      <h2 className="postTagsHead">Post Tags</h2>
      <ul className="categoryList">
        {tags.map((tag) => (
          <li key={tag[0]}>{tag[0]}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostTags;
